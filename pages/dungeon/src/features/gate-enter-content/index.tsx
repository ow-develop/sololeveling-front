import { Button, useDownCustom, useToast } from '@ow-develop/ow-design-system'
import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ErrorOutlineIcon
} from '@ow-develop/ow-icons/react/material'
import { SwiperSlide } from 'swiper/react'
import Config from '~/config'

import { gateInfoList } from './data'
import {
  ActionTextBox,
  ContentField,
  ContentSwiper,
  ExpandInfoItemSubValueUnit,
  ExpandInfoItemValueUnit,
  GateEnterContentWrapper,
  GateExpandActionWrapper,
  MultiValueBox,
  PagingButtonUnit,
  SlideContentBox,
  SlideContentField,
  SlideContentItemBox,
  SlideContentItemMultiValueBox,
  SlideContentItemTitleUnit,
  SlideContentItemValueBox,
  SlideTitleUnit
} from './style'
import useDungeonStore from '../../hooks/useDungeonStore'
import useGateKeyQuery from '../../hooks/useGateKeyQuery'

import SvgIcon from '~/common/svg-icon'
import { ERC1155CollectionType } from '~/constants/contracts'
import { HunterRank } from '~/constants/hunter'
import { Breakpoint } from '~/constants/style'
import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'
import useIsApprovedQuery from '~/hooks/queries/useIsApprovedQuery'
import useModal from '~/hooks/useModal'
import useSwiper from '~/hooks/useSwiper'
import { useI18next } from '~/lib/i18n'
import { HunterRankType } from '~/types/common'
import { convertTimeToString } from '~/utils/formatDate'
import { findKeyByValue } from '~/utils/formatEnum'
import { lazy, useEffect, useState } from 'react'
import { ErrorMessage } from '~/constants/message'
import ERC1155Contract from '~/contracts/erc1155'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import { convertUSDToUSDC } from '~/lib/ethers-util'
import useShopListQuery from '../../../../shop/src/hooks/useShopListQuery'
import useAuth from '~/hooks/useAuth'

const LazyGateEnterModal = lazy(() => import('../gate-enter-modal/index'))
const LazyGateRewardModal = lazy(() => import('../gate-reward-modal/index'))

const GateEnterContent = () => {
  const {
    signer,
    contract: { USDCContract }
  } = useWeb3AuthContext()
  const { setGateRank } = useDungeonStore()
  const [isValid, setIsValid] = useState([false])
  const { keyBalanceByRank } = useGateKeyQuery()
  const { rank } = useHunterRankQuery()
  const { data: isApproved } = useIsApprovedQuery(
    ERC1155CollectionType.GATE_KEY,
    Config.DungeonGate
  )
  const { priceByRank } = useShopListQuery()
  const { address } = useAuth()
  const { openModal } = useModal()
  const { defaultOptions, onPrev, onNext } = useSwiper(HunterRank[rank ?? 'E'])
  const isSmallBreakPoint = useDownCustom(Breakpoint.S)
  const { setToast } = useToast()
  const { t } = useI18next()

  const getRanksUpToKey = (key: HunterRankType): HunterRankType[] | null => {
    const rankKeys = Object.keys(HunterRank).filter((k) => isNaN(Number(k)))
    const foundIndex = rankKeys.findIndex((k) => k === key)

    if (foundIndex === -1) {
      return null
    }

    const result = rankKeys.slice(0, foundIndex + 1)
    return result as HunterRankType[]
  }

  const fetchEnterValid = async () => {
    const gateKeyContract = new ERC1155Contract(
      ERC1155CollectionType.GATE_KEY
    ).initialize(signer)

    const result = await Promise.all(
      getRanksUpToKey(rank).map(async (rank: HunterRankType) => {
        const rankNum: number = findKeyByValue(rank, HunterRank)
        const price = convertUSDToUSDC(priceByRank(rank))
        const gateKey = await gateKeyContract.balanceOf(address, rankNum)
        const usdc = await USDCContract.balanceOf()
        return !(gateKey === 0 && usdc.lt(price))
      })
    )

    setIsValid(result)
  }

  const handleEnterGate = (rankName: HunterRankType) => {
    setGateRank(rankName)
    const rankNum: number = findKeyByValue(rank, HunterRank)
    const canEnter = isValid[rankNum]
    if (!canEnter)
      return setToast(t(ErrorMessage.INSUFFICIENT_MATIC_FOR_GATE_KEY), {
        type: 'warning',
        autoClose: 2000
      })

    if (isApproved) {
      openModal(<LazyGateEnterModal type='enter' />)
    } else {
      openModal(<LazyGateEnterModal type='approve' />)
    }
  }

  const getDisabled = (rankName: HunterRankType) => {
    const targetRank = findKeyByValue(rankName, HunterRank)
    const myRank = findKeyByValue(rank, HunterRank)

    return myRank < targetRank
  }

  const showGateRewardModal = () => {
    openModal(<LazyGateRewardModal />)
  }

  useEffect(() => {
    fetchEnterValid()
  }, [])

  return (
    <GateEnterContentWrapper>
      <PagingButtonUnit align='left' variant='text' onClick={onPrev}>
        <SvgIcon size={40} icon={<ArrowLeftIcon />} color='icon-on-accent' />
      </PagingButtonUnit>

      <ContentSwiper {...defaultOptions}>
        <SlideContentBox>
          {gateInfoList.map(
            ({
              rankName,
              block,
              needKeyCount,
              monsterAmount,
              seasonPackAmount
            }) => {
              return (
                <SwiperSlide key={rankName}>
                  <ContentField>
                    <SlideTitleUnit>
                      {t(`${rankName}-Rank Gate`)}
                    </SlideTitleUnit>

                    <SlideContentField>
                      <SlideContentItemBox>
                        <SlideContentItemTitleUnit>
                          {t('Gate reward')}
                          <SvgIcon
                            icon={<ErrorOutlineIcon />}
                            size={13}
                            color='white-70'
                            onClick={showGateRewardModal}
                          />
                        </SlideContentItemTitleUnit>

                        <SlideContentItemMultiValueBox>
                          <MultiValueBox>
                            <ExpandInfoItemValueUnit>
                              {monsterAmount}
                            </ExpandInfoItemValueUnit>
                            <ExpandInfoItemSubValueUnit>
                              {t('Monster')}
                            </ExpandInfoItemSubValueUnit>
                          </MultiValueBox>

                          <MultiValueBox>
                            <ExpandInfoItemValueUnit>
                              {seasonPackAmount}
                            </ExpandInfoItemValueUnit>
                            <ExpandInfoItemSubValueUnit>
                              {t('Season Pack')}
                            </ExpandInfoItemSubValueUnit>
                          </MultiValueBox>
                        </SlideContentItemMultiValueBox>
                      </SlideContentItemBox>

                      <SlideContentItemBox>
                        <SlideContentItemTitleUnit>
                          {t('Gate clear time')}
                        </SlideContentItemTitleUnit>
                        <SlideContentItemValueBox>
                          <ExpandInfoItemValueUnit>
                            {`${block.toLocaleString()} ${t('Block')}`}
                          </ExpandInfoItemValueUnit>
                          <ExpandInfoItemSubValueUnit>
                            {`≈ ${convertTimeToString(block * 2.5)}`}
                          </ExpandInfoItemSubValueUnit>
                        </SlideContentItemValueBox>
                      </SlideContentItemBox>

                      <SlideContentItemBox>
                        <SlideContentItemTitleUnit>
                          {t('Require Gate key')}
                        </SlideContentItemTitleUnit>
                        <SlideContentItemValueBox>
                          <ExpandInfoItemValueUnit>
                            {needKeyCount}
                          </ExpandInfoItemValueUnit>
                          <ExpandInfoItemSubValueUnit>
                            {t('Owned amount')} : {keyBalanceByRank(rankName)}
                          </ExpandInfoItemSubValueUnit>
                        </SlideContentItemValueBox>
                      </SlideContentItemBox>
                    </SlideContentField>

                    <GateExpandActionWrapper>
                      <ActionTextBox color={'text-weaker'}>
                        {getDisabled(rankName)
                          ? t('Need hunter rank up to enter the gate.')
                          : ''}
                      </ActionTextBox>

                      <Button
                        width='fixed'
                        size='sm'
                        onClick={() => handleEnterGate(rankName)}
                        fixedWidth={isSmallBreakPoint ? 196 : 250}
                        disabled={getDisabled(rankName)}
                      >
                        {t('Gate Enter')}
                      </Button>
                    </GateExpandActionWrapper>
                  </ContentField>
                </SwiperSlide>
              )
            }
          )}
        </SlideContentBox>
      </ContentSwiper>

      <PagingButtonUnit align='right' variant='text' onClick={onNext}>
        <SvgIcon size={40} icon={<ArrowRightIcon />} color='icon-on-accent' />
      </PagingButtonUnit>
    </GateEnterContentWrapper>
  )
}

export default GateEnterContent
