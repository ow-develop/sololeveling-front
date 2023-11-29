import { TransactionApiDto } from '~/types/api'
import {
  HunterRankUp,
  MonsterArose,
  MonsterReturned,
  MonsterUpgraded
} from '~/types/events'
import { RankUpMonsterList } from '~/types/season'

export interface FetchMonsterAriseDto extends TransactionApiDto {
  monsterArose: MonsterArose
}

export interface FetchMonsterUpgradeDto extends TransactionApiDto {
  monsterUpgraded: MonsterUpgraded
}

export interface FetchRankUpDto extends TransactionApiDto {
  hunterRankUp: HunterRankUp
  isShadow: boolean
  rankUpMonsterList: RankUpMonsterList[]
}

export interface FetchMonsterReturnDto extends TransactionApiDto {
  monsterReturned: MonsterReturned
}
