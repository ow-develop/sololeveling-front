import { atom } from 'recoil'

import { RankUpMonster, RankUpMonsterList } from '~/types/season'

export const rankInputListState = atom<RankUpMonster[]>({
  key: 'rankInputListState',
  default: [
    {
      key: 0,
      tokenId: 0,
      title: '',
      isShadow: false
    },
    {
      key: 1,
      tokenId: 0,
      title: '',
      isShadow: false
    },
    {
      key: 2,
      tokenId: 0,
      title: '',
      isShadow: false
    },
    {
      key: 3,
      tokenId: 0,
      title: '',
      isShadow: false
    },
    {
      key: 4,
      tokenId: 0,
      title: '',
      isShadow: false
    },
    {
      key: 5,
      tokenId: 0,
      title: '',
      isShadow: false
    }
  ]
})

export const activateModalIdxState = atom({
  key: 'activateModalIdxState',
  default: 0
})

export const rankUpMonsterState = atom<RankUpMonsterList[]>({
  key: 'rankUpMonsterState',
  default: []
})
