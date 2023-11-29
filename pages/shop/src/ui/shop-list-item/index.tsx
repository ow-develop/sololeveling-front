import {
  CardContentField,
  CardImageBox,
  DescriptionUnit,
  PriceBox,
  PriceUnit,
  ShopListItemWrapper,
  TitleBox,
  TitleUnit
} from './style'

import FullWidthImage from '~/common/image/full-width-image'
import { useI18next } from '~/lib/i18n'
import { GateKeyInfo } from '~/types/shop'
import { CryptoUsdcIcon } from '@ow-develop/ow-icons/react/integration'
import React from 'react'

export const ShopListItem = ({
  gateKeyId,
  type,
  title,
  rank,
  priceUSD,
  imgUrl,
  imgUrlCf,
  descriptionEN
}: GateKeyInfo) => {
  const { t } = useI18next()

  return (
    <ShopListItemWrapper>
      <CardImageBox>
        <FullWidthImage src={imgUrlCf || imgUrl} alt={t(title)} />
      </CardImageBox>
      <CardContentField>
        <TitleBox>
          <TitleUnit>{t(title)}</TitleUnit>
        </TitleBox>
        <DescriptionUnit>{t(`${descriptionEN} Description`)}</DescriptionUnit>
        <PriceBox>
          <PriceUnit>
            {priceUSD} USDC <CryptoUsdcIcon width={20} />
          </PriceUnit>
        </PriceBox>
      </CardContentField>
    </ShopListItemWrapper>
  )
}
