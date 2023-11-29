import { Button } from '@ow-develop/ow-design-system'
import React from 'react'
import { useRecoilValue } from 'recoil'
import useEnterGate from '../../../hooks/useEnterGate'
import { keyImgSet } from '../gate-key-enter/data'
import {
  ContentField,
  EqualUnit,
  HeadingUnit,
  ImageBox,
  PriceBox,
  PriceField,
  ValueUnit
} from '../style'

import { dungeonState } from '~/atoms/dungeon'
import FullWidthImage from '~/common/image/full-width-image'
import useModal from '~/hooks/useModal'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'
import useShopListQuery from '../../../../../shop/src/hooks/useShopListQuery'
import { ErrorMessage } from '~/constants/message'

const GateBuyEnter = () => {
  const { selectedRank } = useRecoilValue(dungeonState)
  const { t } = useI18next()
  const { transaction } = useTransactionHandler()
  const { priceByRank } = useShopListQuery()
  const { enterGate, checkUSDC, allowUSDC } = useEnterGate()
  const { closeModal } = useModal()

  const buyEnterGate = async () => {
    const hasBalance = await checkUSDC(selectedRank)
    if (!hasBalance) {
      throw new Error(ErrorMessage.INSUFFICIENT_MATIC_FOR_GATE_KEY)
    }
    await allowUSDC()
    await enterGate(selectedRank)
  }

  const onClick = async () => {
    await transaction({
      onSuccess: buyEnterGate,
      onSettled: closeModal
    })
  }

  return (
    <ContentField>
      <ImageBox>
        <FullWidthImage src={keyImgSet[selectedRank]} />
      </ImageBox>

      <PriceField>
        <PriceBox>
          <HeadingUnit>{t('Require Gate key')}</HeadingUnit>
          <ValueUnit>1</ValueUnit>
        </PriceBox>

        <EqualUnit>=</EqualUnit>

        <PriceBox>
          <HeadingUnit>{t('Price')}</HeadingUnit>
          <ValueUnit>{priceByRank(selectedRank)} USDC</ValueUnit>
        </PriceBox>
      </PriceField>

      <Button variant='primary' width='fill' onClick={onClick}>
        {t('Buy Gate Key and Enter')}
      </Button>
    </ContentField>
  )
}

export default GateBuyEnter
