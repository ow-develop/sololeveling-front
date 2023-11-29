import { atom } from 'recoil'

import { SelectInventoryItem } from '../../pages/leveling/src/ui/leveling-inventory/context'

export const selectSystemItemState = atom<SelectInventoryItem[]>({
  key: 'selectSystemItem',
  default: []
})

export const systemCountState = atom<number>({
  key: 'systemCount',
  default: 0
})

export const selectRankState = atom<string>({
  key: 'selectRank',
  default: ''
})
