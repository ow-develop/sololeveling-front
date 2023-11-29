import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '~/constants/query'
import SeasonSettlementContract from '~/contracts/season-settlement'
import useAuth from '~/hooks/useAuth'
import { Signer } from 'ethers'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const getIsSeasonRewardClaimed = async (address: string, signer: Signer) => {
  const contract = await new SeasonSettlementContract().initialize(signer)

  return await contract.isSeasonRewardClaimed(address)
}

const useIsSeasonRewardClaimedQuery = () => {
  const { address } = useAuth()
  const { signer } = useWeb3AuthContext()
  const queryState = useQuery(
    [QueryKey.CONTRACT_IS_SEASON_REWARD_CLAIMED, address, signer?._isSigner],
    () => getIsSeasonRewardClaimed(address, signer),
    {
      enabled: !!address && !!signer?._isSigner
    }
  )

  return { ...queryState }
}

export default useIsSeasonRewardClaimedQuery
