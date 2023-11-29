import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '~/constants/query'
import useAuth from '~/hooks/useAuth'
import { MonsterCollection } from '~/types/collection'
import { fetchGetMonsterBalance } from '~/api/system'

const useMonsterBalanceQuery = () => {
  const { address } = useAuth()

  const { data, ...queryState } = useQuery(
    [QueryKey.GET_MONSTER_BALANCE, address],
    () => fetchGetMonsterBalance(address),
    {
      enabled: !!address,
      refetchOnMount: true
    }
  )

  const normalMonsterList = data?.monster ?? []
  const shadowMonsterList = data?.shadowArmy ?? []

  const getMonsterBalanceByRank = (rank: string): MonsterCollection[] => {
    return normalMonsterList.reduce((pre, cur) => {
      if (cur.rank === rank && cur.amount !== 0) {
        return [...pre, cur]
      }

      return pre
    }, [])
  }

  const getShadowBalanceByRank = (rank: string): MonsterCollection[] => {
    return shadowMonsterList.reduce((pre, cur) => {
      if (cur.rank === rank && cur.amount !== 0) {
        return [...pre, cur]
      }

      return pre
    }, [])
  }

  return {
    ...queryState,
    data,
    normalMonsterList,
    shadowMonsterList,
    getMonsterBalanceByRank,
    getShadowBalanceByRank
  }
}

export default useMonsterBalanceQuery
