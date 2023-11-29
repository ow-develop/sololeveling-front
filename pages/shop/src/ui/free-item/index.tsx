import FullWidthImage from '~/common/image/full-width-image'
import { useI18next } from '~/lib/i18n'
import { GateKeyInfo } from '~/types/shop'
import {
  CardContentField,
  CardImageBox,
  DescriptionUnit,
  FreeItemDisabled,
  FreeItemWrapper,
  PriceUnit,
  TimeBgUnit,
  TimeUnit,
  TitleBox,
  TitleUnit
} from '../shop-list-item/style'
import {
  FreeBadge,
  FreePriceBox,
  FreePriceUnit
} from '../shop-details/shop-details-card/style'
import React from 'react'
import useAuth from '~/hooks/useAuth'
import { useRouter } from 'next/router'
import { InternalPath } from '~/constants/route'

export const FreeItem = ({
  gateKeyId,
  type,
  title,
  rank,
  priceUSD,
  imgUrl,
  imgUrlCf,
  descriptionEN,
  isAvailableFreeGateKey,
  remainingTimeOfFreeGateKey
}: GateKeyInfo) => {
  const { push } = useRouter()
  const { t } = useI18next()
  const { isLoggedIn } = useAuth()

  const remainingSeconds = remainingTimeOfFreeGateKey

  const secondsInADay = 24 * 60 * 60
  const secondsLeftInADay = remainingSeconds
  const hoursLeft = Math.floor(secondsLeftInADay / 3600)
  const minutesLeft = Math.floor((secondsLeftInADay % 3600) / 60)

  const isAvailable = isLoggedIn && !isAvailableFreeGateKey

  const onClick = () => {
    push(`${InternalPath.SHOP}/free`)
  }

  return (
    <FreeItemDisabled onClick={onClick}>
      {isAvailable && (
        <>
          <TimeBgUnit />
          <TimeUnit>
            <TimeUnit>{`${hoursLeft} ${t('hours')} ${minutesLeft} ${t(
              'minutes left'
            )}`}</TimeUnit>
          </TimeUnit>
        </>
      )}
      <FreeItemWrapper disabled={isAvailable}>
        <CardImageBox>
          <FreeBadge>{t('1 Free per day')}</FreeBadge>
          <FullWidthImage src={imgUrlCf || imgUrl} alt={t(title)} />
        </CardImageBox>
        <CardContentField>
          <TitleBox>
            <TitleUnit>{t('Free E-Rank Gate Key')}</TitleUnit>
          </TitleBox>
          <DescriptionUnit>{t(`${descriptionEN} Description`)}</DescriptionUnit>
          <FreePriceBox>
            <FreePriceUnit>1 USDC</FreePriceUnit>
            <PriceUnit>0 USDC</PriceUnit>
          </FreePriceBox>
        </CardContentField>
      </FreeItemWrapper>
    </FreeItemDisabled>
  )
}
