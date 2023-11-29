import { Button } from '@ow-develop/ow-design-system'
import {
  AddIcon,
  InfoOutlineIcon,
  RemoveIcon
} from '@ow-develop/ow-icons/react/material'
import { HTMLAttributes, useMemo } from 'react'
import { useTranslation } from 'react-i18next'

import {
  AmountBox,
  AmountControlBox,
  AmountControlField,
  AmountNumberUnit,
  InsufficientBox,
  ItemImageBox,
  ItemInfoField,
  ItemTitleBox,
  LevelingInventoryItemWrapper,
  MaxControlBox,
  TitleUnit
} from './style'
import { SelectInventoryItem, useLevelingInventoryContext } from '../context'
import SvgIcon from '~/common/svg-icon'
import { NextMonster } from '~/types/system'
import FullWidthImage from '~/common/image/full-width-image'
import useRankUpBalanceQuery from '../../../../rankup/src/hooks/useRankUpBalanceQuery'
import useSystemStore from '../../../hooks/useSystemStore'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  idx?: number
  nextMonster?: NextMonster
  title?: string
  subTitle?: string
  imgUrl?: string
  imgUrlCf?: string
  gifUrl?: string
  gifUrlCf?: string
  profile?: string
  profileCf?: string
  amount?: number
  insufficient?: boolean
  disabled?: boolean
  type?: 'full' | 'max'
}

const LevelingInventoryItem = ({
  idx,
  nextMonster,
  title,
  subTitle,
  imgUrl,
  imgUrlCf,
  gifUrl,
  gifUrlCf,
  profile,
  profileCf,
  amount,
  insufficient,
  type,
  disabled
}: Props) => {
  const { t } = useTranslation()
  const { selectItems, setSelectItems, multiple } =
    useLevelingInventoryContext()
  const { selectAllCount } = useSystemStore()
  const { getMonsterAmountByTokenId } = useRankUpBalanceQuery()

  const findData = useMemo(
    () => selectItems.find((item) => item.idx === idx),
    [selectItems]
  )

  const isSelected = useMemo(
    () => selectItems?.some((selectItem) => selectItem.idx === idx),
    [selectItems]
  )

  const isDisabled = useMemo(() => {
    return (
      (!multiple && !isSelected && selectItems.length !== 0) ||
      insufficient ||
      disabled
    )
  }, [selectItems, insufficient, disabled])

  const showControl = useMemo(
    () => multiple && isSelected,
    [multiple, isSelected]
  )

  const decrementDisabled = useMemo(() => findData?.amount === 1, [findData])
  const incrementDisabled = useMemo(
    () => findData?.amount === amount,
    [findData]
  )

  const handleClick = () => {
    const initItem: SelectInventoryItem = {
      idx,
      amount: 1,
      title,
      imgUrl,
      gifUrl,
      nextMonster
    }

    if (insufficient || disabled) return

    if (type === 'max' && selectAllCount === 10) {
      return
    } else {
      if (multiple) {
        setSelectItems((prev) => {
          if (isSelected) {
            return prev.filter((data) => data.idx !== idx)
          }

          return [...prev, initItem]
        })
      } else {
        setSelectItems(() => (isSelected ? [] : [initItem]))
      }
    }
  }

  const handleIncrement = () => {
    if (type === 'max') {
      setSelectItems((prev) =>
        prev.map((selectItem) =>
          selectItem.idx === idx
            ? {
                ...selectItem,
                amount:
                  selectAllCount < 10
                    ? selectItem.amount + 1
                    : selectItem.amount
              }
            : selectItem
        )
      )
    } else {
      setSelectItems((prev) =>
        prev.map((selectItem) =>
          selectItem.idx === idx
            ? { ...selectItem, amount: selectItem.amount + 1 }
            : selectItem
        )
      )
    }
  }

  const handleDecrement = () => {
    setSelectItems((prev) =>
      prev.map((selectItem) =>
        selectItem.idx === idx
          ? { ...selectItem, amount: selectItem.amount - 1 }
          : selectItem
      )
    )
  }

  const handleMax = () => {
    if (type === 'max') {
      setSelectItems((prev) => {
        return prev.map((item) => {
          let amount = 0
          if (item.idx === idx) {
            const availableCount = 10 - selectAllCount + item.amount
            amount =
              getMonsterAmountByTokenId(idx) >= availableCount
                ? availableCount
                : getMonsterAmountByTokenId(idx)
          }

          return {
            ...item,
            amount: item.idx === idx ? amount : item.amount
          }
        })
      })
    } else {
      setSelectItems((prev) => {
        return prev.map((item) => {
          return {
            ...item,
            amount:
              item.idx === idx ? getMonsterAmountByTokenId(idx) : item.amount
          }
        })
      })
    }
  }

  return (
    <LevelingInventoryItemWrapper
      disabled={isDisabled}
      selected={isSelected}
      insufficient={insufficient}
      onClick={handleClick}
    >
      <ItemImageBox disabled={isDisabled}>
        <FullWidthImage src={profileCf || profile} />
      </ItemImageBox>
      <ItemInfoField disabled={isDisabled}>
        <ItemTitleBox>
          <div>{t(subTitle)}</div>
          <TitleUnit disabled={isDisabled}>{t(title)}</TitleUnit>
        </ItemTitleBox>
        <AmountBox>
          {t('Owned')} : {amount}
          {insufficient && (
            <InsufficientBox>
              <SvgIcon
                icon={<InfoOutlineIcon />}
                size={16}
                color='status-danger-default'
              />
              {t('Insufficient')}
            </InsufficientBox>
          )}
        </AmountBox>
      </ItemInfoField>
      {showControl && (
        <AmountControlField onClick={(e) => e.stopPropagation()}>
          <AmountControlBox>
            <Button
              variant='text'
              size='sm'
              disabled={decrementDisabled}
              onClick={handleDecrement}
            >
              <SvgIcon
                icon={<RemoveIcon />}
                color={decrementDisabled ? 'icon-weaker' : 'icon-weak'}
              />
            </Button>
            <AmountNumberUnit>{findData.amount}</AmountNumberUnit>
            <Button
              variant='text'
              size='sm'
              disabled={incrementDisabled}
              onClick={handleIncrement}
            >
              <SvgIcon
                icon={<AddIcon />}
                color={incrementDisabled ? 'icon-weaker' : 'icon-weak'}
              />
            </Button>
          </AmountControlBox>
          <MaxControlBox>
            <Button variant='text' size='sm' onClick={handleMax}>
              Max
            </Button>
          </MaxControlBox>
        </AmountControlField>
      )}
    </LevelingInventoryItemWrapper>
  )
}

export default LevelingInventoryItem
