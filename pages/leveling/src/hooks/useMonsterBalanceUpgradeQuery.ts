import useAuth from '~/hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '~/constants/query'
import { fetchGetMonsterBalanceUpgrade } from '~/api/system'
import { MonsterCollection } from '~/types/collection'

const useMonsterBalanceUpgradeQuery = () => {
  const { address } = useAuth()

  const { data, ...queryState } = useQuery(
    [QueryKey.GET_MONSTER_BALANCE, address],
    () => fetchGetMonsterBalanceUpgrade(address),
    {
      enabled: !!address
    }
  )

  const monsterList = data?.monster ?? []

  const getMonsterBalanceByRank = (rank: string): MonsterCollection[] => {
    return monsterList.reduce((pre, cur) => {
      if (cur.rank === rank && cur.amount !== 0) {
        return [...pre, cur]
      }

      return pre
    }, [])
  }

  return {
    ...queryState,
    data,
    monsterList,
    getMonsterBalanceByRank
  }
}

export default useMonsterBalanceUpgradeQuery
