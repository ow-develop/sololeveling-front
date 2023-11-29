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
import { HUNTER_CARD_BG_SET, HunterCardBgType } from '../../../style'
import { useTranslation } from 'react-i18next'

export interface ItemCardProps {
  imgUrl?: string
  title?: string
  subtitle?: string
  selected?: boolean
  shouldShowCount?: boolean
  amount: number
  onClick?: (title: string) => void
  inViewRef: (node?: Element) => void
  seasonName?: string
  hunterCardBgType: HunterCardBgType
}

const HunterInventoryCard = ({
  imgUrl,
  title,
  subtitle,
  selected,
  onClick,
  amount,
  shouldShowCount,
  inViewRef,
  seasonName,
  hunterCardBgType
}: ItemCardProps) => {
  const { t } = useTranslation()
  const handleClick = () => {
    onClick?.(title)
  }

  return (
    <ItemCardWrapper selected={selected} onClick={handleClick} ref={inViewRef}>
      <ThumbnailField background={HUNTER_CARD_BG_SET[hunterCardBgType]}>
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
