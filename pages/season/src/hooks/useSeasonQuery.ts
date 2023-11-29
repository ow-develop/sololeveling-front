import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '~/constants/query'
import { MILLISECONDS_A_HOUR, MILLISECONDS_A_MINUTE } from '~/constants/time'
import SeasonContract from '~/contracts/season'
import { getContractExceptionText } from '~/lib/ethers-error-handler'
import { getPrivateSigner } from '~/lib/ethers-util'

const useSeasonQuery = (seasonId: number) => {
  const getSeasonById = async (seasonId: number) => {
    const signer = getPrivateSigner()
    const seasonContract = new SeasonContract().initialize(signer)
    return await seasonContract.getSeasonById(seasonId)
  }

  return useQuery(
    [QueryKey.CONTRACT_GET_SEASON_BY_ID, seasonId],
    () => getSeasonById(seasonId),
    {
      retry: 1,
      cacheTime: 0,
      suspense: false,
      staleTime: 10 * MILLISECONDS_A_HOUR,
      refetchInterval: MILLISECONDS_A_MINUTE,
      onError(error) {
        console.error(getContractExceptionText(error))
      }
    }
  )
}

export default useSeasonQuery
