import Config from '~/config'
import { QueryKey } from '~/constants/query'
import api from '~/lib/api'
import { ResponseTypes } from '~/types/api'
import {
  MonsterCollection,
  PfpCollection,
  SeasonPack
} from '~/types/collection'
import { CollectionTokenDetailDto } from '~/api/dto/collection'
import { Token } from '~/types/hunter'
import { TokenStandardType } from '~/constants/contracts'

export interface CollectionResponse {
  shadowMonarch: PfpCollection[]
  normalMonster: MonsterCollection[]
  shadowMonster: MonsterCollection[]
}

export interface CollectionTokenDetailResponse {
  idx: number
  collectionType: string
  collectionAddress: string
  tokenStandard?: TokenStandardType
  title: string
  score: number | null
  rank: string | null
  season: number | null
  ownerAddress: string | null
  descriptionKR: string | null
  descriptionEN: string | null
  descriptionJP: string | null
  metadataUrl: string | null
  image: string | null
  imageCf: string | null
  gif: string | null
  gifCf: string | null
  traits: Trait[]
  owners: number
  owned: number
  maxSupply: number | null
  totalSupply: number
  burned: number
  essenceStoneReward: number | null
}

export interface Trait {
  traitType: string
  traitValue: string
}

export const getHunterCollectionList = async (walletAddress: string) => {
  const { data } = await api.get<ResponseTypes<CollectionResponse>>(
    QueryKey.GET_HUNTER_COLLECTION_LIST,
    {
      params: {
        address: walletAddress
      }
    }
  )
  return data.data
}

export const fetchGetGateKeyBalance = async (address: string) => {
  const { data } = await api.get<ResponseTypes<Token[]>>(
    `${QueryKey.GET_GATE_KEY_BY_BALANCE}/${address}`
  )

  return data.data
}

export const getSeasonPackList = async () => {
  const { data } = await api.get<ResponseTypes<{ result: SeasonPack[] }>>(
    QueryKey.GET_SEASON_PACK_LIST + `/${Config.CURRENT_SEASON_ID}`
  )

  return data.data.result
}

export const fetchGetCollectionTokenDetail = async ({
  collectionAddress,
  tokenId
}: CollectionTokenDetailDto) => {
  const param = `/${collectionAddress}/${tokenId}`
  const { data } = await api.get<ResponseTypes<CollectionTokenDetailResponse>>(
    QueryKey.GET_COLLECTION_TOKEN_DETAIL + param
  )
  return data.data
}
