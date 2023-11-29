import {
  AmountUnit,
  ContentBox,
  ImageBox,
  ImageUnit,
  ItemCardWrapper,
  LabelBox,
  SubtitleUnit,
  ThumbnailField,
  TitleUnit
} from './style'

import React from 'react'

import { useTranslation } from 'react-i18next'
import {
  HUNTER_CARD_BG_SET,
  HunterCardBgType
} from '../../../../pages/hunter/style'
import { cardEffect } from '~/stories/inventory-list/effect'

export interface ItemCardProps {
  imgUrl?: string
  title?: string
  subtitle?: string
  selected?: boolean
  shouldShowCount?: boolean
  amount: number
  onClick?: (title: string) => void
  seasonName?: string
  hunterCardBgType: HunterCardBgType
  delay: number
}

const HunterInventoryCard = ({
  imgUrl,
  title,
  subtitle,
  amount,
  shouldShowCount,
  seasonName,
  hunterCardBgType,
  delay
}: ItemCardProps) => {
  const { t } = useTranslation()

  return (
    <ItemCardWrapper
      variants={cardEffect(delay)}
      initial='hidden'
      animate='delay'
    >
      <ThumbnailField
        variants={cardEffect()}
        whileHover='glow'
        background={HUNTER_CARD_BG_SET[hunterCardBgType]}
      >
        <ImageBox>
          <ImageUnit src={imgUrl} />
        </ImageBox>
        <LabelBox>
          {!!shouldShowCount && <AmountUnit>× {amount}</AmountUnit>}
          {seasonName && <AmountUnit>{t(seasonName)}</AmountUnit>}
        </LabelBox>
      </ThumbnailField>
      <ContentBox>
        <SubtitleUnit>{t(subtitle)}</SubtitleUnit>
        <TitleUnit>{t(title)}</TitleUnit>
      </ContentBox>
    </ItemCardWrapper>
  )
}

export default HunterInventoryCard
