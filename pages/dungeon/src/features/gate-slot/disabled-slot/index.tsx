import React from 'react'
import { useRecoilValue } from 'recoil'

import { BackgroundUnit, DisabledSlotWrapper, TextUnit } from './style'

import DisabledAImg from '~/assets/image/dungeon/disabled_rank_a.webp'
import DisabledCImg from '~/assets/image/dungeon/disabled_rank_c.webp'
import DisabledEImg from '~/assets/image/dungeon/disabled_rank_e.webp'
import DisabledSImg from '~/assets/image/dungeon/disabled_rank_s.webp'
import { themeState } from '~/atoms/common'
import { useI18next } from '~/lib/i18n'
import { SlotState, SlotStateSet } from '~/types/dungeon'

interface Props {
  status: SlotState
}

const imageMap: SlotStateSet<string> = {
  disabled_e: DisabledEImg.src,
  disabled_c: DisabledCImg.src,
  disabled_a: DisabledAImg.src,
  disabled_s: DisabledSImg.src
}

const textMap: SlotStateSet<string> = {
  disabled_e: `First gate slot can be opened after rank up.`,
  disabled_c: `Second gate slot can be opened after rank up.`,
  disabled_a: `Third gate slot can be opened after rank up.`,
  disabled_s: `Final gate slot can be opened after rank up.`
}

const DisabledSlot = ({ status }: Props) => {
  const { t } = useI18next()
  const theme = useRecoilValue(themeState)

  return (
    <DisabledSlotWrapper $dark={theme === 'dark'}>
      <BackgroundUnit src={imageMap[status]} />

      <TextUnit>{t(textMap[status])}</TextUnit>
    </DisabledSlotWrapper>
  )
}

export default DisabledSlot
