import { Button, useToast } from '@ow-develop/ow-design-system'
import { useRouter } from 'next/router'
import React, { useState } from 'react'

import {
  BalanceUnit,
  ConfirmField,
  ContentBox,
  ContentUnit,
  DescriptionUnit,
  FreeBadge,
  FreePriceBox,
  FreePriceUnit,
  InformationBox,
  InformationField,
  PriceBox,
  PricePaymentBox,
  PriceUnit,
  ShopDetailsWrapper,
  ThumbnailBox,
  TitleBox,
  TitleUnit
} from '../shop-details-card/style'
import useGateKeyQuery from '../../../../../dungeon/src/hooks/useGateKeyQuery'

import FullWidthImage from '~/common/image/full-width-image'
import useAuth from '~/hooks/useAuth'
import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'
import useModal from '~/hooks/useModal'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'
import { HunterRankType } from '~/types/common'
import { GateKeyInfo } from '~/types/shop'
import ReceiptModal from '~/common/modal/receipt-modal'
import { InternalPath } from '~/constants/route'
import { useKeyMinted } from '../../../hooks/useKeyMinted'
import { convertToLocale } from '~/utils/formatNumber'
import {
  CryptoUsdcIcon,
  MaticTokenIcon
} from '@ow-develop/ow-icons/react/integration'
import useUSDCBalanceQuery from '~/hooks/queries/useUSDCBalanceQuery'

export interface ShopDetailsCardProps extends GateKeyInfo {
  title: string
  subTitle?: string
  keyRank?: HunterRankType
  balance?: number
  maticBalance?: number
}

export const FreeDetailsCard = ({
  title,
  subTitle,
  priceUSD,
  imgUrl,
  imgUrlCf,
  descriptionEN,
  maticBalance,
  keyRank
}: ShopDetailsCardProps) => {
  const { push } = useRouter()
  const { setToast } = useToast()
  const [amount, setAmount] = useState(1)
  const { refetch: refetchGateKeyBalance } = useGateKeyQuery()
  const { refetch: refetchWalletBalance } = useMaticBalanceQuery()
  const { data: USDCBalance } = useUSDCBalanceQuery()
  const { t, i18nextTranslate } = useI18next()
  const { isLoggedIn, isAvailableFreeGateKey } = useAuth()
  const { keyMinted } = useKeyMinted()
  const { openModal } = useModal()
  const { transaction } = useTransactionHandler()
  const [isDisabled, setIsDisabled] = useState(false)

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
        const transaction = await keyMinted()
        await refetchGateKeyBalance()

        const { txHash } = transaction
        openModal(
          <ReceiptModal
            title='Free Minted'
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
        setIsDisabled(true)
      }
    })
  }

  return (
    <ShopDetailsWrapper>
      <ThumbnailBox>
        <FreeBadge>{t('1 Free per day')}</FreeBadge>
        <FullWidthImage src={imgUrlCf || imgUrl} alt={title} />
      </ThumbnailBox>
      <InformationField>
        <InformationBox>
          <TitleBox>
            <TitleUnit>{t(`Free ${title}`)}</TitleUnit>
          </TitleBox>
          <DescriptionUnit>{t(`${descriptionEN} Description`)}</DescriptionUnit>
        </InformationBox>

        <ContentBox>
          <ContentUnit>{t('Amount')}</ContentUnit>
          <PriceBox>
            <PriceUnit>1</PriceUnit>
          </PriceBox>
        </ContentBox>

        <ContentBox>
          <ContentUnit>{t('Price')}</ContentUnit>
          <FreePriceBox>
            <FreePriceUnit>1 USDC</FreePriceUnit>
            <PriceUnit>
              0 USDC <CryptoUsdcIcon width={20} />
            </PriceUnit>
          </FreePriceBox>
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
            disabled={!isAvailableFreeGateKey || isDisabled}
          >
            {t('Claim')}
          </Button>
        </ConfirmField>
      </InformationField>
    </ShopDetailsWrapper>
  )
}
