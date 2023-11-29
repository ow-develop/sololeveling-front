import { atom } from 'recoil'

import { HunterRankType } from '~/types/common'
import { SlotState } from '~/types/dungeon'

export const dungeonState = atom<{
  selectedGateId?: number
  selectedRank?: HunterRankType
  statusList?: SlotState[]
  isTransaction: boolean
}>({
  key: 'dungeon',
  default: {
    selectedGateId: null,
    selectedRank: null,
    statusList: [],
    isTransaction: false
  }
})
