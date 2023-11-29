import { useQuery } from '@tanstack/react-query'

import Config from '~/config'
import { HunterRank } from '~/constants/hunter'
import { QueryKey } from '~/constants/query'
import useAuth from '~/hooks/useAuth'
import { getContractExceptionText } from '~/lib/ethers-error-handler'
import { HunterRankType } from '~/types/common'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const useHunterRankQuery = (suspense?: boolean) => {
  const { address } = useAuth()
  const {
    signer,
    contract: { SeasonContract }
  } = useWeb3AuthContext()

  const getHasRank = async (address: string) => {
    const balanceList = await SeasonContract.getHunterRankTokenBalance(
      Config.CURRENT_SEASON_ID,
      address
    )

    const hunterRank = await SeasonContract.getHunterRank(address).catch(
      (err) => {
        console.error(getContractExceptionText(err))
        return null
      }
    )

    return {
      hasRank: balanceList.includes(1),
      rank: HunterRank[hunterRank] as HunterRankType
    }
  }

  const queryState = useQuery(
    [QueryKey.CONTRACT_GET_HUNTER_RANK, address, signer?._isSigner],
    () => getHasRank(address),
    {
      enabled: !!address && !!signer?._isSigner,
      retry: 1,
      onError(err) {
        console.error(getContractExceptionText(err))
      },
      suspense: suspense ?? true
    }
  )

  return {
    ...queryState,
    rank: queryState.data?.rank,
    hasRank: queryState.data?.hasRank
  }
}

export default useHunterRankQuery
