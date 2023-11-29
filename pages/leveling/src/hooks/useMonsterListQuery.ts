import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '~/constants/query'
import { Monster } from '~/types/collection'
import { fetchGetMonsterList } from '~/api/system'
import useAuth from '~/hooks/useAuth'

const useMonsterListQuery = () => {
  const { address } = useAuth()
  const { data, ...queryState } = useQuery(
    [QueryKey.GET_MONSTER_LIST],
    () => fetchGetMonsterList(),
    {
      enabled: !!address
    }
  )

  const normalMonsterList = data?.monster ?? []
  const shadowMonsterList = data?.shadowArmy ?? []

  const getMonsterByRank = (isShadow: boolean, rank: string): Monster[] => {
    const result: Monster[] = []

    if (isShadow) {
      for (const monster of shadowMonsterList) {
        if (monster.rank === rank) {
          result.push(monster)
        }
      }
    } else {
      for (const monster of normalMonsterList) {
        if (monster.rank === rank) {
          result.push(monster)
        }
      }
    }

    return result
  }

  return {
    ...queryState,
    data,
    normalMonsterList,
    shadowMonsterList,
    getMonsterByRank
  }
}

export default useMonsterListQuery
