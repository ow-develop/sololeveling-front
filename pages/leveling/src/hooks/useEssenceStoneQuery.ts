import { useQuery } from '@tanstack/react-query'

import { fetchGetEssenceStoneBalance } from '~/api/system'
import { QueryKey } from '~/constants/query'
import useAuth from '~/hooks/useAuth'

const useEssenceStoneQuery = () => {
  const { address } = useAuth()

  const queryState = useQuery(
    [QueryKey.GET_ESSENCE_STONE_BALANCE],
    () => fetchGetEssenceStoneBalance(address),
    {
      enabled: !!address,
      suspense: false
    }
  )

  const stoneBalance = queryState.data?.amount

  return { ...queryState, stoneBalance }
}

export default useEssenceStoneQuery
