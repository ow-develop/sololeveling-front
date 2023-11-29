import React from 'react'

import {
  AmountBox,
  AmountUnit,
  CardContentField,
  LevelingInputCardWrapper,
  TitleUnit
} from '../../../../src/ui/leveling-input-card/style'

import FullWidthImage from '~/common/image/full-width-image'
import { useI18next } from '~/lib/i18n'

export interface Props {
  title?: string
  resultImgUrl?: string
  count?: number
  disabled?: boolean
  shadowRank?: string
  isShadow?: boolean
}

const AriseResultCard = ({
  title,
  resultImgUrl,
  count,
  disabled,
  shadowRank,
  isShadow
}: Props) => {
  const { t, i18nextTranslate } = useI18next()
  const translate = i18nextTranslate(`Try Arise {{value}} time`, {
    value: count
  })
  const titles = i18nextTranslate(`{{value}}`, {
    value: title
  })

  return (
    <LevelingInputCardWrapper>
      <TitleUnit>{t(titles)}</TitleUnit>
      <CardContentField disabled={disabled} shadowRank={shadowRank}>
        <FullWidthImage src={resultImgUrl} />
      </CardContentField>
      <AmountBox>
        <AmountUnit>{translate}</AmountUnit>
      </AmountBox>
    </LevelingInputCardWrapper>
  )
}

export default AriseResultCard
