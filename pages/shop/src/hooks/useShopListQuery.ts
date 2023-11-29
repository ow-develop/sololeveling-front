import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '~/constants/query'
import { fetchGetGateKeyList } from '~/api/shop'
import { GateKeyInfo } from '~/types/shop'
import { HunterRankType } from '~/types/common'
import { HunterRank } from '~/constants/hunter'
import useAuth from '~/hooks/useAuth'

const useShopListQuery = () => {
  const { address } = useAuth()
  const queryState = useQuery([QueryKey.GET_SHOP_TOKEN_LIST, address], () =>
    fetchGetGateKeyList(address)
  )

  const itemList: GateKeyInfo[] = queryState.data?.result
  const isAvailableFreeGateKey = queryState.data?.isAvailableFreeGateKey
  const remainingTimeOfFreeGateKey = queryState.data?.remainingTimeOfFreeGateKey

  const priceByRank = (rank: HunterRankType) => {
    const index = HunterRank[rank]

    return itemList?.[index].priceUSD ?? 0
  }

  const priceStone = itemList?.[6].priceUSD ?? 0.1

  return {
    ...queryState,
    itemList,
    priceByRank,
    priceStone,
    isAvailableFreeGateKey,
    remainingTimeOfFreeGateKey
  }
}

export default useShopListQuery
