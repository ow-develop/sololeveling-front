import { HunterRank } from '~/constants/hunter'
import { MonsterReward, SeasonPackReward } from '~/types/dungeon'

/*
 *  DungeonGate
 */
export interface Gate {
  id: number
  seasonId: number
  startBlock: number
  endBlock: number
  cleared: boolean
  gateRank: HunterRank
  hunter: string
}

/*
 *  ERC1155
 */
export interface ApprovalForAll {
  account: string
  operator: string
  approved: boolean
}

export interface TransferSingle {
  operator: string
  from: string
  to: string
  id: number
  value: number
}

export interface TransferBatch {
  operator: string
  from: string
  to: string
  ids: number[]
  values: number[]
}

/*
 *  Season
 */
export interface ERankClaimed {
  seasonId: number
  hunter?: string
  timestamp: number
}

/*
 *  DungeonGate
 */
export interface GateCreated {
  seasonId: number
  gateRank: HunterRank
  hunter: string
  gateId: number
  startBlock: number
  endBlock: number
}

export interface GateCleared {
  gateId: number
  gateRank: HunterRank
  gateSignatures: string[]
  hunter: string
  seasonId: number
  usedStone: number
  timestamp: number
  monsterReward: MonsterReward
  seasonPackReward: SeasonPackReward
}

/*
 *  System
 */

export interface MonsterArose {
  hunter: string
  nextMonsterRank: HunterRank
  monsterId: number
  requestAmount: number
  aroseCount: number
  usedStone: number
  isSuccess: boolean
  nextMonsterId: number
  timestamp: number
}

export interface MonsterUpgraded {
  hunter: string
  upgradedRank: number
  upgradedAmount: number
  usedMonster: {
    monsterIds: number[]
    monsterAmounts: number[]
  }
  usedStone: number
  resultMonsterIds: number[]
  timestamp: number
}

export interface HunterRankUp {
  seasonId: number
  hunter: string
  rankType: HunterRank
  timestamp: number
}

export interface MonsterReturned {
  hunter: string
  monsterRank: HunterRank
  isShadow: boolean
  essenceStone: number
  monsterIds: number[]
  monsterAmounts: number[]
  timestamp: number
}

export interface KeySold {
  buyer: string
  to: string
  keyRank: number
  amount: number
  price: string
  timestamp: number
}

export interface KeyMinted {
  to: string
  keyRank: number
  amount: number
  timestamp: number
}

export interface StoneSold {
  buyer: string
  to: string
  amount: number
  price: string
  timestamp: number
}

export interface SeasonRewardClaimed {
  seasonId: number
  hunter: string
  mintedSeasonScore: number
  isSRankRewardTokenMinted: boolean
  SRankRewardTokenId: number
  timestamp: number
}
