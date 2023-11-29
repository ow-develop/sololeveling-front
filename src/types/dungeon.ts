import { Stone } from '~/constants/dungeon'
import { HunterRankType } from '~/types/common'
import { Gate } from '~/types/events'

export interface RewardPecentage {
  amount: number
}

export interface GatePercentage {
  rank?: string
  totalAmount?: number
  monster?: {
    S: RewardPecentage
    A: RewardPecentage
    B: RewardPecentage
    C: RewardPecentage
    D: RewardPecentage
    E: RewardPecentage
  }
  seasonPackAmount: RewardPecentage
}

export type SlotState =
  | 'ready'
  | 'progress'
  | 'complete'
  | 'disabled'
  | 'disabled_e'
  | 'disabled_c'
  | 'disabled_a'
  | 'disabled_s'
  | 'season_end'
  | 'need_clear'

export type SlotStateSet<T> = Partial<Record<SlotState, T>>

export interface GateWithBlock extends Gate {
  remainBlock: number
  required: number
}

export type StoneType = keyof typeof Stone

export interface GateKey {
  rank: HunterRankType
  title: string
  amount: number
  priceUSD: string
  imgUrl: string
  imgUrlCf: string
  descriptionKR: string
  descriptionEN: string
  descriptionJP: string
}

export interface RewardMonster {
  amount: number
  title: string
  imgUrl?: string
  imgUrlCf?: string
  profile?: string
  profileCf?: string
  type?: string
  rank?: string
  isShadow?: boolean
  monsterId?: number
}

export interface MonsterReward {
  monsterIds: number[]
  monsterAmounts: number[]
}

export interface SeasonPackReward {
  seasonPackIds: number[]
  seasonPackAmounts: number[]
}
