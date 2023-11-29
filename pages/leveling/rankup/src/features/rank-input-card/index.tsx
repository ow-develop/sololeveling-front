import React from 'react'
import { useTranslation } from 'react-i18next'

import {
  AmountBox,
  AmountUnit,
  CardActiveBox,
  CardContentField,
  LevelingInputCardWrapper,
  SelectActionUnit,
  TitleUnit,
  UnselectButtonUnit,
  UnselectUnit
} from './style'

import FullWidthImage from '~/common/image/full-width-image'

export interface Props {
  title?: string
  imgUrls?: string[]
  balance?: number
  max?: number
  increase?: number
  count?: number
  setCount?: (count: number) => void
  action?: () => void
}

const RankUpInputCard = ({ title, imgUrls = [], count, action }: Props) => {
  const { t } = useTranslation()

  const hasImage = imgUrls.length !== 0

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

  return (
    <LevelingInputCardWrapper>
      <TitleUnit>{t(title)}</TitleUnit>
      <CardContentField>{cardViewSet()}</CardContentField>

      {count > 0 && (
        <AmountBox>
          <AmountUnit>{`${count} / 10`}</AmountUnit>
        </AmountBox>
      )}
    </LevelingInputCardWrapper>
  )
}

export default RankUpInputCard
