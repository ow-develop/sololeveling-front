import { useQuery } from '@tanstack/react-query'

import { fetchGetGateKeyBalance } from '~/api/collection'
import { HunterRank } from '~/constants/hunter'
import { QueryKey } from '~/constants/query'
import useAuth from '~/hooks/useAuth'
import { HunterRankType } from '~/types/common'

import { convertWeiToMatic } from '~/lib/ethers-util'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const useGateKeyQuery = () => {
  const { address } = useAuth()
  const {
    contract: { ShopContract }
  } = useWeb3AuthContext()
  const queryState = useQuery(
    [QueryKey.GET_GATE_KEY_BY_BALANCE, address],
    () => fetchGetGateKeyBalance(address),
    {
      enabled: !!address
    }
  )

  const getGateKeyPrice = async (rankNum?: number) => {
    const keyPrice = await ShopContract.getLatestKeyPrice(rankNum)
    return convertWeiToMatic(keyPrice)
  }

  const keyBalanceByRank = (rank: HunterRankType) => {
    const index = HunterRank[rank]

    return queryState.data?.[index].amount ?? 0
  }

  return { ...queryState, keyBalanceByRank, getGateKeyPrice }
}

export default useGateKeyQuery
