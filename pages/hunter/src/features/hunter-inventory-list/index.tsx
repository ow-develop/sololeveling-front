import React, {
  FormEvent,
  useCallback,
  useEffect,
  useMemo,
  useState
} from 'react'
import {
  BadgeBox,
  ButtonBox,
  HunterInventoryCardBox,
  HunterInventoryListField,
  InventoryHeaderField,
  InventoryWrapper
} from './style'
import HunterInventoryFilter from '../hunter-inventory-filter'
import useModal from '~/hooks/useModal'
import SvgIcon from '~/common/svg-icon'
import {
  FilterListIcon,
  RefreshIcon
} from '@ow-develop/ow-icons/react/material'
import HunterInventoryModal from '../../ui/hunter-inventory-modal'
import HunterInventoryCard from '../../ui/hunter-inventory-card'
import useBreakpoint from '~/hooks/useBreakpoint'
import { useGetHunterInventoryQuery } from '../../hooks/useGetHunterInventoryQuery'
import { HunterInventoryItemDto, SeasonType } from '~/api/dto/hunter'
import { HUNTER_FILTER_LIST, HUNTER_SORT_LIST } from '../../../hunterData'
import { InView, useInView } from 'react-intersection-observer'
import { useUpdateHunterInventoryQuery } from '../../hooks/useUpdateHunterInventoryQuery'
import SelectDropdown from '../../ui/select-dropdown'
import HunterInventoryNoList from '../hunter-inventory-no-list'
import { Badge, Button } from '@ow-develop/ow-design-system'
import { seasonSet } from '~/constants/season'
import { useRecoilState } from 'recoil'
import { modalState } from '~/atoms/modal'
import { useCountDown } from '~/hooks/useCountDown'
import { getHunterCardBgType } from '../../../style'
import { MILLISECONDS_A_MINUTE } from '~/constants/time'
import { HunterCollectionType, HunterSortType } from '~/types/hunter'
import { TokenStandardType } from '~/constants/contracts'
import HunterInventorySkeleton from './hunter-inventory-skeleton'
import useAuth from '~/hooks/useAuth'
import HunterFilterBottomSheet from '../hunter-filter-bottom-sheet'
import HunterInventoryDetail from '../../ui/hunter-inventory-detail'

interface Props {
  address: string | string[]
}

const HunterInventoryList = ({ address }: Props) => {
  const [, setModalContent] = useRecoilState(modalState)
  const [isFilterShow, setIsFilterShow] = useState(true)
  const [checkedFilterList, setCheckedFilterList] = useState<
    HunterCollectionType[]
  >([])
  const [sort, setSort] = useState<HunterSortType | string>(HunterSortType.Rank)
  const [updatable, setUpdatable] = useState(true)

  const {
    data: hunterInventory,
    fetchNextPage,
    remove,
    isLoading
  } = useGetHunterInventoryQuery({
    address,
    sort: sort,
    filter: checkedFilterList
  })

  const { refetch: updateHunterInventoryQuery } = useUpdateHunterInventoryQuery(
    {
      address,
      sort: sort,
      filter: checkedFilterList,
      page: 1
    }
  )

  const { address: userAddress } = useAuth()
  const { startCountDown } = useCountDown()
  const { ref, inView } = useInView({ triggerOnce: true })
  const { belowMediumWidth } = useBreakpoint()

  const {
    openModal: openHunterModal,
    closeModal: closeHunterModal,
    isOpen: isOpenHunterModal
  } = useModal()

  const {
    openModal: openFilterModal,
    closeModal: closeFilterModal,
    isOpen: isOpenFilterModal
  } = useModal()

  const handleFilterClear = () => {
    setCheckedFilterList([])
  }

  const handleUpdateBtn = () => {
    setUpdatable(false)
    updateHunterInventoryQuery()
    startCountDown(() => setUpdatable(true), MILLISECONDS_A_MINUTE)
    remove()
  }

  const handleFilterBtn = () => {
    setIsFilterShow((prev) => !prev)
    belowMediumWidth && filterModal()
  }

  const handleClickSort = (value: HunterSortType | string) => {
    setSort(value)
  }

  const handleCheckFilter = useCallback(
    (e: FormEvent<HTMLInputElement>) => {
      const inputEl = e.target as HTMLInputElement
      const isChecked = inputEl.checked
      const checkFilterType = inputEl.id as HunterCollectionType

      if (isChecked) {
        setCheckedFilterList((prev) => [...prev, checkFilterType])
      } else {
        const deleteItem = checkedFilterList.filter(
          (filterType) => filterType !== checkFilterType
        )
        setCheckedFilterList(deleteItem)
      }
    },
    [checkedFilterList]
  )

  const handleCardClick = (item: HunterInventoryItemDto) => {
    openHunterModal(
      <HunterInventoryModal
        isHunterModal={true}
        onClose={closeHunterModal}
        hunterCardBgType={getHunterCardBgType(item)}
      >
        <HunterInventoryDetail
          handleModalClose={() => closeHunterModal()}
          item={item}
        />
      </HunterInventoryModal>
    )
  }

  const filterCountMap = useMemo(() => {
    return HUNTER_FILTER_LIST?.reduce((acc, cur) => {
      acc[cur.value] = hunterInventory[0]?.collectionBalance[cur.value]
      return acc
    }, {} as Record<HunterCollectionType, number>)
  }, [hunterInventory])

  const filterModal = () => {
    openFilterModal(
      <HunterFilterBottomSheet
        onClear={handleFilterClear}
        onClose={closeFilterModal}
      >
        <HunterInventoryFilter
          filterList={HUNTER_FILTER_LIST}
          filterCountMap={filterCountMap}
          checkedFilterList={checkedFilterList}
          onChangeFilterCheckbox={handleCheckFilter}
          handleClickClear={handleFilterClear}
        />
      </HunterFilterBottomSheet>
    )
  }

  useEffect(() => {
    if (isOpenFilterModal && !isLoading) {
      setModalContent(
        <HunterFilterBottomSheet
          onClear={handleFilterClear}
          onClose={closeFilterModal}
        >
          <HunterInventoryFilter
            filterList={HUNTER_FILTER_LIST}
            filterCountMap={filterCountMap}
            checkedFilterList={checkedFilterList}
            onChangeFilterCheckbox={handleCheckFilter}
            handleClickClear={handleFilterClear}
          />
        </HunterFilterBottomSheet>
      )
    }
  }, [
    checkedFilterList,
    closeFilterModal,
    filterCountMap,
    isLoading,
    handleCheckFilter,
    setModalContent,
    isOpenFilterModal
  ])

  useEffect(() => {
    inView && fetchNextPage()
  }, [inView, isOpenFilterModal, fetchNextPage])

  return (
    <InventoryWrapper>
      <InventoryHeaderField>
        {userAddress === address && (
          <Button
            onClick={handleUpdateBtn}
            variant='tertiary'
            size='sm'
            width='fixed'
            fixedWidth={40}
            disabled={!updatable}
          >
            <SvgIcon
              icon={<RefreshIcon />}
              size={24}
              color={!updatable ? 'icon-weaker' : 'icon-default'}
            />
          </Button>
        )}

        <ButtonBox>
          {checkedFilterList.length > 0 && (
            <BadgeBox>
              <Badge size={'sm'}>{checkedFilterList.length}</Badge>
            </BadgeBox>
          )}

          <Button
            onClick={handleFilterBtn}
            variant='tertiary'
            size='sm'
            width='fixed'
            fixedWidth={40}
          >
            <SvgIcon icon={<FilterListIcon />} size={24} color='icon-default' />
          </Button>
        </ButtonBox>
        <SelectDropdown
          items={HUNTER_SORT_LIST}
          onChangeCb={handleClickSort}
          disabled={!hunterInventory[0]?.items.length}
        />
      </InventoryHeaderField>

      <HunterInventoryListField>
        {isFilterShow && !belowMediumWidth && (
          <HunterInventoryFilter
            filterList={HUNTER_FILTER_LIST}
            filterCountMap={filterCountMap}
            checkedFilterList={checkedFilterList}
            onChangeFilterCheckbox={handleCheckFilter}
            handleClickClear={handleFilterClear}
          />
        )}

        {!isLoading ? (
          hunterInventory[0]?.items.length > 0 ? (
            <HunterInventoryCardBox isFilterShow={isFilterShow}>
              {hunterInventory?.map((list, index) =>
                list.items.map((item, idx) => {
                  return (
                    <InView key={item.idx}>
                      <HunterInventoryCard
                        inViewRef={ref}
                        key={item.idx}
                        imgUrl={
                          item.gifCf || item.gif || item.imageCf || item.image
                        }
                        title={item.title}
                        subtitle={item.collectionType}
                        amount={item.amount}
                        shouldShowCount={
                          TokenStandardType.ERC1155 === item.tokenStandard
                        }
                        seasonName={
                          item.season === SeasonType.Preseason
                            ? seasonSet[item.season]?.name
                            : ''
                        }
                        onClick={() => handleCardClick(item)}
                        hunterCardBgType={getHunterCardBgType(item)}
                      />
                    </InView>
                  )
                })
              )}
            </HunterInventoryCardBox>
          ) : (
            <HunterInventoryNoList />
          )
        ) : (
          <HunterInventoryCardBox isFilterShow={isFilterShow}>
            {Array(SKELETON_ITEM_AMOUNT)
              .fill('')
              .map((item, idx) => (
                <HunterInventorySkeleton key={idx} />
              ))}
          </HunterInventoryCardBox>
        )}
      </HunterInventoryListField>
    </InventoryWrapper>
  )
}
export default HunterInventoryList
const SKELETON_ITEM_AMOUNT = 12
