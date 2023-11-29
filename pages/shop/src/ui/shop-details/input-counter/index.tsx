import {
  AddIcon,
  InfoOutlineIcon,
  RemoveIcon
} from '@ow-develop/ow-icons/react/material'
import React, { ChangeEvent, useEffect, useState } from 'react'

import {
  AmountBox,
  AmountInputUnit,
  AmountWrapper,
  BalanceUnit,
  DescriptionBox,
  IncrementBox,
  WarningUnit
} from './style'

import SvgIcon from '~/common/svg-icon'
import { useI18next } from '~/lib/i18n'

export interface InputCounterProps {
  balance?: number
  increase?: number
  count?: number
  setAmount?: (count: number) => void | number
  disabled?: boolean
  priceUSD?: number
  USDCBalance?: number
  error?: boolean
}

export const InputCounter = ({
  balance,
  priceUSD,
  increase,
  count: initialCount,
  setAmount,
  disabled = false,
  USDCBalance
}: InputCounterProps) => {
  const [count, setCount] = useState(initialCount || 1)
  const [error, setError] = useState(false)
  const { t } = useI18next()

  const maxCount = USDCBalance / priceUSD || 9999
  const removeDisabled = count / (increase || 1) === 1
  const addDisabled = count + (increase || 0) >= maxCount

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newCount = e.target.valueAsNumber

    if (isNaN(newCount) || newCount <= 0) {
      setCount(1)
      setAmount?.(1)
    } else if (newCount > 9999) {
      setCount(9999)
      setAmount?.(9999)
    } else {
      setCount(newCount)
      setAmount?.(newCount)
    }
  }

  const handleIncrement = (flag: 'remove' | 'add') => {
    if (flag === 'add') {
      setCount(count + 1)
      setAmount?.(count + 1)
    } else {
      const newCount = Math.max(0, count - 1)
      setCount(newCount)
      setAmount?.(newCount)
    }
  }

  useEffect(() => {
    if (count > maxCount) {
      setError(true)
    } else {
      setError(false)
    }
  }, [count, maxCount])

  useEffect(() => {
    setCount(increase || 1)
  }, [increase])

  return (
    <AmountWrapper>
      <AmountBox>
        <IncrementBox
          align='left'
          disabled={removeDisabled}
          onClick={() => handleIncrement('remove')}
        >
          <SvgIcon
            icon={<RemoveIcon />}
            size={20}
            color={removeDisabled ? 'icon-weaker' : 'icon-default'}
          />
        </IncrementBox>

        <AmountInputUnit
          type='number'
          value={count}
          disabled={disabled}
          error={error}
          onChange={handleInputChange}
          min={1}
          max={maxCount}
        />
        <IncrementBox
          align='right'
          disabled={addDisabled}
          onClick={() => handleIncrement('add')}
        >
          <SvgIcon
            icon={<AddIcon />}
            size={20}
            color={addDisabled ? 'icon-weaker' : 'icon-default'}
          />
        </IncrementBox>
      </AmountBox>
      <DescriptionBox>
        {error && (
          <WarningUnit>
            <SvgIcon
              icon={<InfoOutlineIcon />}
              size={16}
              color='status-danger-default'
            />
            {t('Insufficient balance')}
          </WarningUnit>
        )}

        <BalanceUnit>
          {t('Owned amount')} : {balance} {t('Qty.')}
        </BalanceUnit>
      </DescriptionBox>
    </AmountWrapper>
  )
}
