import { QueryKey } from '~/constants/query'
import api from '~/lib/api'
import { ResponseTypes } from '~/types/api'
import { MonsterCollection, PfpCollection } from '~/types/collection'
import {
  checkHunterNameDto,
  GetHunterInventoryDto,
  HunterInfoType
} from '~/api/dto/hunter'
import { HunterRankType } from '~/types/common'

export interface MonsterCollectionResponse {
  shadowMonarch: PfpCollection[] | []
  monster: MonsterCollection[] | []
  shadowArmy: MonsterCollection[] | []
}

export interface HunterInfoResponse {
  address: string
  name: string
  description: string | null
  rank: HunterRankType | null
  profileImg: string | null
  profileImgCf: string | null
  activityScore: number
  collectionScore: number
  seasonScore: number
}

export const fetchCheckHunterName = async (name: string) => {
  const { data } = await api.get<ResponseTypes<checkHunterNameDto>>(
    QueryKey.CHECK_HUNTER_NAME + `/${name}`
  )
  return data.data
}

export const fetchEditProfileName = async (name: string) => {
  const url = QueryKey.EDIT_PROFILE_NAME
  return await api.post<ResponseTypes<null>>(url, { name: name })
}

export const fetchEditProfileImage = async (imgUrl: string) => {
  const url = QueryKey.EDIT_PROFILE_IMAGE
  return await api.post<ResponseTypes<null>>(url, { imgUrl })
}

export const fetchHunterProfileTokenBalance = async (address: string) => {
  const { data } = await api.get<ResponseTypes<MonsterCollectionResponse>>(
    QueryKey.GET_HUNTER_PROFILE_TOKEN_BALANCE + `/${address}`
  )
  return data.data
}

export const fetchEditMarketingOptIn = async (marketingOptIn: boolean) => {
  const url = QueryKey.EDIT_MARKETING_OPTIN
  return await api.post<ResponseTypes<null>>(url, { marketingOptIn })
}

export const fetchWithDraw = async () => {
  const url = QueryKey.WITHDRAW
  return await api.post<ResponseTypes<null>>(url)
}

export const getHunterInfo = async (walletAddress: string) => {
  const { data } = await api.get<ResponseTypes<HunterInfoResponse>>(
    QueryKey.GET_HUNTER_INFO,
    {
      params: {
        address: walletAddress
      }
    }
  )

  return data.data
}

export const fetchGetHunterInventory = async ({
  address,
  sort,
  page,
  filter
}: {
  address: string | string[]
  sort: string
  page: number
  filter: string[]
}) => {
  const param = `/${address}?sort=${sort}&page=${page}&filter=${filter}`
  const url = QueryKey.GET_HUNTER_INVENTORY + param
  const { data } = await api.get<ResponseTypes<GetHunterInventoryDto>>(url)
  return data.data
}

export const fetchUpdateHunterInventory = async (
  address: string | string[],
  sort: string,
  page: number,
  filter: string[]
) => {
  const param = `/${address}/update?sort=${sort}&page=${page}&filter=${filter}`
  const url = QueryKey.UPDATE_HUNTER_INVENTORY + param
  const { data } = await api.get<ResponseTypes<GetHunterInventoryDto>>(url)
  return data.data
}

export const fetchGetHunterInfo = async (address: string | string[]) => {
  const param = `/${address}`
  const url = QueryKey.GET_HUNTER_INFO + param
  const { data } = await api.get<ResponseTypes<HunterInfoType>>(url)
  return data.data
}
