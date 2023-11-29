export interface GetHunterInventoryDto {
  items: HunterInventoryItemDto[]
  collectionBalance: CollectionBalanceDto
  total: number
}
export interface CollectionBalanceDto {
  ShadowMonarch: number
  LegendaryScene: number
  Top100: number
  SeasonScore: number
  ShadowArmy: number
  Monster: number
  SeasonPack: number
  EssenceStone: number
  GateKey: number
  HunterRank: number
}
export enum SeasonType {
  Preseason = 0,
  Season1 = 1
}
export interface HunterInventoryItemDto {
  idx: number
  season?: number | null
  tokenId: number
  tokenStandard: string
  collectionAddress: string
  collectionType: string
  rank?: string | null
  image?: string | null
  imageCf?: string | null
  gif?: string | null
  gifCf?: string | null
  title: string
  amount: number
  updateDate: string
}
export interface HunterInfoType {
  address: string
  name: string
  description?: string | null
  rank?: string | null
  profileImg?: string | null
  profileImgCf?: string | null
  activityScore: number
  collectionScore: number
  seasonScore: number
}
export enum CheckHunterNameReason {
  Forbidden = 'Forbidden',
  Duplicate = 'Duplicate'
}
export interface checkHunterNameDto {
  isAvailableName: boolean
  reason: CheckHunterNameReason
}
