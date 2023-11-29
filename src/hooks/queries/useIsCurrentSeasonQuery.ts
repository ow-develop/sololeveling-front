import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '~/constants/query'
import { MILLISECONDS_A_HOUR, MILLISECONDS_A_MINUTE } from '~/constants/time'
import SeasonContract from '~/contracts/season'
import { getPrivateSigner } from '~/lib/ethers-util'

const useIsCurrentSeasonQuery = (suspense?: boolean) => {
  const getIsCurrentSeason = async () => {
    const signer = getPrivateSigner()
    const seasonContract = new SeasonContract().initialize(signer)
    return await seasonContract.isCurrentSeasonById()
  }

  return useQuery(
    [QueryKey.CONTRACT_IS_CURRENT_SEASON_BY_ID],
    getIsCurrentSeason,
    {
      retry: 1,
      staleTime: MILLISECONDS_A_HOUR,
      cacheTime: MILLISECONDS_A_MINUTE,
      refetchInterval: MILLISECONDS_A_MINUTE,
      suspense: suspense ?? true
    }
  )
}

export default useIsCurrentSeasonQuery
