import { QueryKey } from '~/constants/query'
import api from '~/lib/api'
import { ResponseTypes } from '~/types/api'
import { Monster, MonsterArise } from '~/types/collection'
import { Token } from '~/types/hunter'
import {
  FetchMonsterAriseDto,
  FetchMonsterReturnDto,
  FetchMonsterUpgradeDto
} from '~/api/dto/leveling'

export interface MonsterBalanceResponse {
  monster: Token[]
  shadowArmy: Token[]
}

export interface MonsterListResponse {
  monster: Monster[]
  shadowArmy: Monster[]
}

export interface AriseMonsterBalanceResponse {
  S: MonsterArise[]
  B: MonsterArise[]
  A: MonsterArise[]
}

export const fetchGetEssenceStoneBalance = async (address: string) => {
  const { data } = await api.get<ResponseTypes<Token[]>>(
    `${QueryKey.GET_ESSENCE_STONE_BALANCE}/${address}`
  )
  return data.data[0]
}

export const fetchGetAriseMonsterBalance = async () => {
  const { data } = await api.get<ResponseTypes<AriseMonsterBalanceResponse>>(
    QueryKey.GET_ARISE_MONSTER_BALANCE
  )

  return data.data
}

export const fetchGetMonsterBalance = async (address: string) => {
  const { data } = await api.get<ResponseTypes<MonsterBalanceResponse>>(
    `${QueryKey.GET_MONSTER_BALANCE}/${address}`
  )

  return data.data
}

export const fetchGetMonsterBalanceUpgrade = async (address: string) => {
  const { data } = await api.get<ResponseTypes<MonsterBalanceResponse>>(
    `${QueryKey.GET_MONSTER_BALANCE}/${address}`,
    {
      params: {
        isShadow: false
      }
    }
  )

  return data.data
}

export const fetchGetMonsterList = async () => {
  const { data } = await api.get<ResponseTypes<MonsterListResponse>>(
    QueryKey.GET_MONSTER_LIST
  )

  return data.data
}

export const fetchMonsterArise = async (body: FetchMonsterAriseDto) => {
  return await api.post(QueryKey.MONSTER_ARISE, body)
}

export const fetchMonsterUpgrade = async (body: FetchMonsterUpgradeDto) => {
  return await api.post(QueryKey.MONSTER_UPGRADE, body)
}

export const fetchMonsterReturn = async (body: FetchMonsterReturnDto) => {
  return await api.post(QueryKey.MONSTER_RETURN, body)
}
