import React from 'react'

import {
  BackgroundBox,
  BackgroundUnit,
  SeasonEndSlotWrapper,
  TextUnit
} from './style'

import SeasonEndImg from '~/assets/image/dungeon/gateslot_season_end.webp'
import { useI18next } from '~/lib/i18n'

const SeasonEndSlot = () => {
  const { t } = useI18next()

  return (
    <SeasonEndSlotWrapper>
      <BackgroundBox>
        <BackgroundUnit src={SeasonEndImg.src} />
      </BackgroundBox>

      <TextUnit>{t('The season has been completed.')}</TextUnit>
    </SeasonEndSlotWrapper>
  )
}

export default SeasonEndSlot
