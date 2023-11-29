import { AddIcon, RemoveIcon } from '@ow-develop/ow-icons/react/material'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import {
  AmountBox,
  AmountUnit,
  BalanceUnit,
  CardActiveBox,
  CardContentField,
  IncrementBox,
  LevelingInputCardWrapper,
  SelectActionUnit,
  TitleUnit,
  UnselectButtonUnit,
  UnselectUnit
} from './style'

import FullWidthImage from '~/common/image/full-width-image'
import SvgIcon from '~/common/svg-icon'

export interface Props {
  title?: string | number
  imgUrls?: string[]
  balance?: number
  isOwned?: boolean
  max?: number
  increase?: number
  count?: number
  required?: number
  setCount?: (count: number) => void
  action?: () => void
  disabled?: boolean
}

const LevelingInputCard = ({
  title,
  imgUrls = [],
  balance,
  isOwned,
  max,
  increase,
  count,
  required,
  setCount,
  action,
  disabled
}: Props) => {
  const { t } = useTranslation()

  const hasImage = imgUrls.length !== 0

  const removeDisabled = count / increase === 1
  const addDisabled = max
    ? count + increase > balance || count / increase + 1 > max
    : count + increase > balance

  const handleIncrement = (flag: 'remove' | 'add') => {
    if (!setCount) return

    if (flag === 'add') setCount(count + increase)
    else {
      if (count / increase !== 1) setCount(count - increase)
    }
  }

  const cardViewSet = () => {
    switch (true) {
      // no data + action
      case !hasImage && !!action:
        return (
          <UnselectButtonUnit onClick={action}>
            {t('Click to select item.')}
          </UnselectButtonUnit>
        )

      // no data
      case !hasImage:
        return <UnselectUnit>{t('Must select item.')}</UnselectUnit>

      // has image + action
      case hasImage && !!action:
        return (
          <>
            <CardActiveBox>
              {imgUrls.map((data, idx) => (
                <FullWidthImage key={idx} src={data} />
              ))}
            </CardActiveBox>
            <SelectActionUnit transparent onClick={action}>
              {t('Click to change item.')}
            </SelectActionUnit>
          </>
        )

      // has image
      case hasImage:
        return (
          <>
            {imgUrls.map((data, idx) => (
              <FullWidthImage key={idx} src={data} />
            ))}
          </>
        )
    }
  }

  useEffect(() => {
    setCount?.(1 * increase)
  }, [title])

  return (
    <LevelingInputCardWrapper>
      <TitleUnit>{t(title)}</TitleUnit>
      <CardContentField disabled={disabled}>{cardViewSet()}</CardContentField>

      <AmountBox>
        <AmountUnit>
          {count ? (setCount ? count : count / increase) : null}
          {required && `/${required}`}
        </AmountUnit>
        {setCount && (
          <>
            <IncrementBox
              align='left'
              disabled={removeDisabled}
              onClick={() => handleIncrement('remove')}
            >
              <SvgIcon icon={<RemoveIcon />} size={20} color='icon-weak' />
            </IncrementBox>
            <IncrementBox
              align='right'
              disabled={addDisabled}
              onClick={() => handleIncrement('add')}
            >
              <SvgIcon icon={<AddIcon />} size={20} color='icon-weak' />
            </IncrementBox>
          </>
        )}

        <BalanceUnit>
          {isOwned && (
            <>
              {t('Owned')} : {balance}
            </>
          )}
        </BalanceUnit>
      </AmountBox>
    </LevelingInputCardWrapper>
  )
}

export default LevelingInputCard
