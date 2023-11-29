import {
  RankAIcon,
  RankBIcon,
  RankCIcon,
  RankDIcon,
  RankEIcon,
  RankSIcon
} from '@ow-develop/ow-icons/react/solo'

import { HunterRankType } from '~/types/common'

export enum HunterRank {
  E,
  D,
  C,
  B,
  A,
  S
}

export const RankIconSet: Record<HunterRankType, typeof RankEIcon> = {
  E: RankEIcon,
  D: RankDIcon,
  C: RankCIcon,
  B: RankBIcon,
  A: RankAIcon,
  S: RankSIcon
}

export interface UseMonster {
  monsterIds: number[]
  monsterAmounts: number[]
}
