import { Description, HunterRankType, Property } from '~/types/common'
import { NextMonster } from '~/types/system'

export interface DefaultMonster {
  idx: number
  tokenId: number
  title: string
  amount: number
  imgUrl: string
  imgUrlCf: string
  metadataUrl?: string
  rank: HunterRankType
  score: number
  season?: number
  gifUrl?: string
  gifUrlCf?: string
  profile?: string
  profileCf?: string
}

export interface DefaultCollection {
  tokenId: number
  title: string
  imgUrl: string
  imgUrlCf: string
  gifUrl?: string
  gifUrlCf?: string
  profile?: string
  profileCf?: string
  score: number
  collectionType?: string
}

export interface PfpCollection extends DefaultCollection {
  address: string
  metadataUrl: string
  property: Property[]
}

export interface MonsterCollection
  extends DefaultCollection,
    Partial<Description> {
  rank: HunterRankType
  isShadow: boolean
  amount: number
}

export type MonsterType = 'Monster' | 'ShadowArmy'

export interface Monster extends Partial<Description> {
  monsterId: number
  type: MonsterType
  title: string
  rank: HunterRankType
  imgUrl: string
  imgUrlCf: string
  profileCf?: string
  profile?: string
}

export interface MonsterArise extends DefaultMonster, Partial<Description> {
  nextMonster: NextMonster
}

export interface SeasonPack {
  seasonPackId: number
  type: string
  title: string
  season: number
  imgUrl?: string
  imgUrlCf?: string
}

export enum Collection {
  ShadowMonarch = 'ShadowMonarch',
  ShadowArmy = 'ShadowArmy',
  Monster = 'Monster',
  LegendaryScene = 'LegendaryScene',
  SeasonPack = 'SeasonPack'
}
