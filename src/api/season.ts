import { QueryKey } from '~/constants/query'
import api from '~/lib/api'
import { ResponseTypes } from '~/types/api'
import { DefaultMonster } from '~/types/collection'
import { Ranking } from '~/types/season'
import { FetchRankUpDto } from '~/api/dto/leveling'

export interface RankUpBalanceResponse {
  rank: string
  monster: DefaultMonster[]
}

export interface SeasonRankingResponse {
  leftBlock: number
  rankingList: Ranking[]
  total: number
}

export interface SeasonMyRankingResponse {
  leftBlock: number
  myRanking: Omit<Ranking, 'name' | 'address' | 'profileImg' | 'profileImgCf'>
}

export const fetchGetRankUpBalance = async () => {
  const { data } = await api.get<ResponseTypes<RankUpBalanceResponse>>(
    QueryKey.GET_MONSTER_BALANCE_BY_HUNTER_RANK
  )

  return data.data
}

export const fetchRankUp = async (body: FetchRankUpDto) => {
  return await api.post(QueryKey.RANK_UP, body)
}

export const fetchGetSeasonRanking = async (seasonId: number) => {
  const { data } = await api.get<ResponseTypes<SeasonRankingResponse>>(
    `${QueryKey.GET_SEASON_RANKING}/${seasonId}`,
    {
      params: {
        seasonId,
        page: 1
      }
    }
  )

  return data.data
}

export const fetchGetSeasonMyRanking = async (seasonId: number) => {
  const { data } = await api.get<ResponseTypes<SeasonMyRankingResponse>>(
    `${QueryKey.GET_MY_SEASON_RANKING}/${seasonId}`,
    {
      params: {
        seasonId,
        page: 1
      }
    }
  )

  return data.data
}
