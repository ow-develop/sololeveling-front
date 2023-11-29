import useAuth from '~/hooks/useAuth'
import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '~/constants/query'
import { fetchGetShopTokenBalance } from '~/api/shop'
import { HunterRankType } from '~/types/common'
import { HunterRank } from '~/constants/hunter'

const useShopTokenBalanceQuery = () => {
  const { address } = useAuth()
  const queryState = useQuery([QueryKey.GET_SHOP_TOKEN_BALANCE, address], () =>
    fetchGetShopTokenBalance(address)
  )

  const { data, ...rest } = queryState

  const gateKeyBalance = (rank: HunterRankType) => {
    const index = HunterRank[rank]
    return data?.gateKey?.[index].amount ?? 0
  }

  const stoneBalance = data?.essenceStone?.[0].amount || 0

  return {
    ...rest,
    gateKeyBalance,
    stoneBalance
  }
}

export default useShopTokenBalanceQuery
