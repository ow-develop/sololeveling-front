import { Description } from '~/types/common'

export type GateKeyApiResponse = {
  result: GateKeyInfo[]
  isAvailableFreeGateKey?: boolean
  remainingTimeOfFreeGateKey?: number
}

export interface GateKeyInfo extends Partial<Description> {
  itemList?: []
  gateKeyId: number
  type: string
  title: string
  rank: string
  priceUSD: number
  imgUrl: string
  imgUrlCf?: string
  isAvailableFreeGateKey?: boolean
  remainingTimeOfFreeGateKey?: number
}

export type ShopListApiResponse = {
  gateKey: ShopToken[]
  essenceStone: ShopToken[]
}

export interface ShopToken {
  idx: number
  collectionType: string
  tokenId: number
  title: string
  amount: number
  imgUrl: string
  imgUrlCf: string
  descriptionKR: string
  descriptionEN: string
  descriptionJP: string
  metadataUrl: string
  rank: string
  score: number
  season: number
  gifUrl: string
  gifUrlCf: string
  profile: string
  profileCf: string
}
