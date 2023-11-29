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
}

const UpgradeResultCard = ({
  title,
  resultImgUrl,
  count,
  disabled,
  shadowRank
}: Props) => {
  const { t } = useI18next()

  return (
    <LevelingInputCardWrapper>
      <TitleUnit>{t(title)}</TitleUnit>
      <CardContentField disabled={disabled} shadowRank={shadowRank}>
        <FullWidthImage src={resultImgUrl} />
      </CardContentField>
      {count > 0 && (
        <AmountBox>
          <AmountUnit>{count}</AmountUnit>
        </AmountBox>
      )}
    </LevelingInputCardWrapper>
  )
}

export default UpgradeResultCard
