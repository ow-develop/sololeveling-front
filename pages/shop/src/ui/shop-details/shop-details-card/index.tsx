import { Button } from '@ow-develop/ow-design-system'
import {
  CryptoUsdcIcon,
  MaticTokenIcon
} from '@ow-develop/ow-icons/react/integration'
import { useRouter } from 'next/router'
import React, { useEffect, useMemo, useState } from 'react'

import {
  BalanceUnit,
  ConfirmField,
  ContentBox,
  ContentUnit,
  DescriptionUnit,
  InformationBox,
  InformationField,
  PriceBox,
  PricePaymentBox,
  PriceUnit,
  ShopDetailsWrapper,
  ThumbnailBox,
  TitleBox,
  TitleUnit
} from './style'
import useGateKeyQuery from '../../../../../dungeon/src/hooks/useGateKeyQuery'
import { useBuyKey } from '../../../hooks/useBuyKey'
import { InputCounter } from '../input-counter'

import FullWidthImage from '~/common/image/full-width-image'
import ReceiptModal from '~/common/modal/receipt-modal'
import { InternalPath } from '~/constants/route'
import useAuth from '~/hooks/useAuth'
import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'
import useModal from '~/hooks/useModal'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'
import { HunterRankType } from '~/types/common'

import { convertToLocale } from '~/utils/formatNumber'
import { GateKeyInfo } from '~/types/shop'
import useUSDCBalanceQuery from '~/hooks/queries/useUSDCBalanceQuery'
import { useBuyStone } from '../../../hooks/useBuyStone'
import useShopTokenBalanceQuery from '../../../hooks/useShopTokenBalanceQuery'

export interface ShopDetailsCardProps extends GateKeyInfo {
  type: string
  title: string
  subTitle?: string
  keyRank?: HunterRankType
  balance?: number
  maticBalance?: number
}

export const ShopDetailsCard = ({
  type,
  title,
  subTitle,
  priceUSD,
  imgUrl,
  imgUrlCf,
  descriptionEN,
  balance,
  maticBalance,
  keyRank
}: ShopDetailsCardProps) => {
  const { push } = useRouter()
  const [amount, setAmount] = useState(1)
  const { refetch: refetchGateKeyBalance } = useGateKeyQuery()
  const { refetch: refetchWalletBalance } = useMaticBalanceQuery()
  const { refetch: refetchStoneBalance } = useShopTokenBalanceQuery()
  const { data: USDCBalance } = useUSDCBalanceQuery()
  const { t, i18nextTranslate } = useI18next()
  const { isLoggedIn } = useAuth()
  const { buyKey } = useBuyKey(keyRank)
  const { buyStone } = useBuyStone()
  const { openModal } = useModal()
  const { transaction } = useTransactionHandler()

  const totalPrice = priceUSD * amount
  const maxCount = isLoggedIn ? USDCBalance.USDC < totalPrice : undefined
  const [isInsufficient, setIsInsufficient] = useState(false)

  const disabled = useMemo(() => {
    return !isInsufficient
  }, [isInsufficient])

  const onClick = async () => {
    if (!isLoggedIn) {
      return push(InternalPath.SIGN_IN)
    }

    const description = i18nextTranslate(
      `You have obtained {{value.amount}} {{value.title}}.`,
      {
        value: {
          amount,
          title: t(title)
        }
      }
    )

    await transaction({
      onSuccess: async () => {
        const { txHash } =
          type === 'stone' ? await buyStone(amount) : await buyKey(amount)

        if (type === 'stone') {
          await refetchStoneBalance()
          await refetchWalletBalance()
        } else {
          await refetchGateKeyBalance()
          await refetchWalletBalance()
        }

        openModal(
          <ReceiptModal
            title='Buy'
            txHash={txHash}
            description={description}
            button={
              <Button
                width='fill'
                variant='secondary'
                size='sm'
                onClick={() => push(InternalPath.DUNGEON)}
              >
                {t('Go to Dungeon')}
              </Button>
            }
          >
            <ReceiptModal.Block imgUrl={imgUrl} />
          </ReceiptModal>
        )
      },
      onSettled: async () => {
        await refetchWalletBalance()
      }
    })
  }

  useEffect(() => {
    if (USDCBalance) {
      const disabled = USDCBalance.USDC < totalPrice
      setIsInsufficient(disabled)
    }
  }, [maxCount])

  return (
    <ShopDetailsWrapper>
      <ThumbnailBox>
        <FullWidthImage src={imgUrlCf || imgUrl} alt={title} />
      </ThumbnailBox>
      <InformationField>
        <InformationBox>
          <TitleBox>
            <TitleUnit>{t(title)}</TitleUnit>
          </TitleBox>
          <DescriptionUnit>{t(`${descriptionEN} Description`)}</DescriptionUnit>
        </InformationBox>

        <ContentBox>
          <ContentUnit>{t('Amount')}</ContentUnit>
          <InputCounter
            balance={balance}
            setAmount={setAmount}
            priceUSD={priceUSD}
            USDCBalance={USDCBalance?.USDC ?? 0}
          />
        </ContentBox>

        <ContentBox>
          <ContentUnit>{t('Price')}</ContentUnit>
          <PriceBox>
            <PriceUnit>
              {convertToLocale(totalPrice, 3)} USDC{' '}
              <CryptoUsdcIcon width={20} />
            </PriceUnit>
          </PriceBox>
        </ContentBox>

        {isLoggedIn && (
          <ContentBox>
            <ContentUnit>{t('My Balance')}</ContentUnit>
            <PriceBox>
              <PricePaymentBox>
                <BalanceUnit>
                  {convertToLocale(USDCBalance.USDC, 3)} USDC
                </BalanceUnit>
                <CryptoUsdcIcon width={20} />
              </PricePaymentBox>
              <PricePaymentBox>
                <BalanceUnit>
                  {convertToLocale(maticBalance, 3)} MATIC
                </BalanceUnit>
                <MaticTokenIcon width={20} />
              </PricePaymentBox>
            </PriceBox>
          </ContentBox>
        )}

        <ConfirmField>
          <Button
            variant='primary'
            width='fill'
            onClick={onClick}
            disabled={!disabled}
          >
            {t('Buy')}
          </Button>
        </ConfirmField>
      </InformationField>
    </ShopDetailsWrapper>
  )
}
