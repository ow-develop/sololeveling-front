import { useQuery } from '@tanstack/react-query'

import { fetchHunterProfileTokenBalance } from '~/api/hunter'
import { QueryKey } from '~/constants/query'
import useAuth from '~/hooks/useAuth'

export function useGetHunterProfileTokenBalanceQuery() {
  const { address } = useAuth()
  const { data, ...restData } = useQuery(
    [QueryKey.GET_HUNTER_PROFILE_TOKEN_BALANCE, address],
    () => fetchHunterProfileTokenBalance(address),
    {
      enabled: !!address,
      suspense: false,
      refetchOnMount: false
    }
  )
  const shadowMonarch = data?.shadowMonarch ?? []
  const shadowArmy = data?.shadowArmy ?? []
  const normalMonster = data?.monster ?? []
  const monsterCollectionList = [
    ...shadowMonarch,
    ...shadowArmy,
    ...normalMonster
  ]
  return { monsterCollectionList, ...restData }
}
