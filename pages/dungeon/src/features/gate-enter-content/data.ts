import { HunterRankType } from '~/types/common'

export const gateInfoList: {
  rankName: HunterRankType
  block: number
  needKeyCount: number
  monsterAmount: number
  seasonPackAmount: number
}[] = [
  {
    rankName: 'E',
    block: 24,
    needKeyCount: 1,
    monsterAmount: 3,
    seasonPackAmount: 1
  },
  {
    rankName: 'D',
    block: 720,
    needKeyCount: 1,
    monsterAmount: 6,
    seasonPackAmount: 2
  },
  {
    rankName: 'C',
    block: 1440,
    needKeyCount: 1,
    monsterAmount: 10,
    seasonPackAmount: 3
  },
  {
    rankName: 'B',
    block: 2880,
    needKeyCount: 1,
    monsterAmount: 15,
    seasonPackAmount: 4
  },
  {
    rankName: 'A',
    block: 5760,
    needKeyCount: 1,
    monsterAmount: 21,
    seasonPackAmount: 5
  },
  {
    rankName: 'S',
    block: 11520,
    needKeyCount: 1,
    monsterAmount: 28,
    seasonPackAmount: 6
  }
]
