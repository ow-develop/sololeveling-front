import { Description } from '~/types/common'
import { StoneType } from '~/types/dungeon'

export interface Achievement extends Partial<Description> {
  tokenId: number
  season: string
  title: string
  imgUrl: string
  imgUrlCf: string
  achieveDate: Date
}

export interface SeasonScore {
  questOriginalScore: number
  questConvertedScore: number
  activityOriginalScore: number
  activityConvertedScore: number
  collectionOriginalScore: number
  collectionConvertedScore: number
  totalScore: number
}

export interface EssenceStone extends Partial<Description> {
  rank: StoneType
  title: string
  amount: number
  imgUrl: string
  imgUrlCf: string
}

export interface Token extends Partial<Description> {
  tokenId: number
  title: string
  amount: number
  imgUrl: string
  imgUrlCf: string
  metadataUrl: string
  rank: string
  score: number
  season: number
  gifUrl: string
  gifUrlCf: string
}

export interface HunterFilterItem {
  value: HunterCollectionType
  name: string
}

export enum HunterSortType {
  Collection = 'Collection',
  Rank = 'Rank',
  Recent = 'Recent'
}

export enum HunterSortViewType {
  CollectionOrder = 'CollectionOrder',
  RankOrder = 'RankOrder',
  RecentOrder = 'RecentOrder'
}

export enum HunterCollectionType {
  ShadowMonarch = 'ShadowMonarch',
  LegendaryScene = 'LegendaryScene',
  Top100 = 'Top100',
  SeasonScore = 'SeasonScore',
  ShadowArmy = 'ShadowArmy',
  Monster = 'Monster',
  SeasonPack = 'SeasonPack',
  EssenceStone = 'EssenceStone',
  GateKey = 'GateKey',
  HunterRank = 'HunterRank'
}
