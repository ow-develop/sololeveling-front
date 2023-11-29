import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '~/constants/query'
import { fetchGetAriseMonsterBalance } from '~/api/system'
import { MonsterArise } from '~/types/collection'
import useAuth from '~/hooks/useAuth'

const useGetAriseMonsterBalanceQuery = () => {
  const { address } = useAuth()
  const { data, ...queryState } = useQuery(
    [QueryKey.GET_ARISE_MONSTER_BALANCE],
    () => fetchGetAriseMonsterBalance(),
    {
      enabled: !!address
    }
  )
  const MSList = data?.S ?? []
  const SBList = data?.B ?? []
  const SAList = data?.A ?? []

  const getMonsterSBalance = (rank: string): MonsterArise[] => {
    return MSList.reduce((pre, cur) => {
      if (cur.rank === rank && cur.amount !== 0) {
        return [...pre, cur]
      }

      return pre
    }, [])
  }

  const getShadowBBalance = (rank: string): MonsterArise[] => {
    return SBList.reduce((pre, cur) => {
      if (cur.rank === rank && cur.amount !== 0) {
        return [...pre, cur]
      }

      return pre
    }, [])
  }

  const getShadowABalance = (rank: string): MonsterArise[] => {
    return SAList.reduce((pre, cur) => {
      if (cur.rank === rank && cur.amount !== 0) {
        return [...pre, cur]
      }

      return pre
    }, [])
  }

  const nextMonsters = {
    S: MSList.map((monster) => monster.nextMonster),
    B: SBList.map((monster) => monster.nextMonster),
    A: SAList.map((monster) => monster.nextMonster)
  }

  return {
    ...queryState,
    data,
    getMonsterSBalance,
    getShadowBBalance,
    getShadowABalance,
    nextMonsters
  }
}

export default useGetAriseMonsterBalanceQuery
