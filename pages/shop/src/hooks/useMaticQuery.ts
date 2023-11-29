import { useQuery } from '@tanstack/react-query'

import { HunterRank } from '~/constants/hunter'
import ShopContract from '~/contracts/shop'
import {
  convertUSDCToUSD,
  convertWeiToMatic,
  getPrivateSigner
} from '~/lib/ethers-util'
import { HunterRankType } from '~/types/common'
import { findKeyByValue } from '~/utils/formatEnum'
import ERC20Contract from '~/contracts/erc20'
import Config from '~/config'

export const useMaticValue = (keyRank: HunterRankType) => {
  const fetchMaticValue = async () => {
    const signer = await getPrivateSigner()
    const shopContract = await new ShopContract().initialize(signer)
    const rankNum: number = findKeyByValue(keyRank, HunterRank)
    const latestPrice = await shopContract.getLatestKeyPrice(rankNum)

    return convertWeiToMatic(latestPrice)
  }

  const fetchUSDCBalance = async () => {
    const signer = await getPrivateSigner()
    const USDCContract = await new ERC20Contract(Config.TestUSDC).initialize(
      signer
    )

    return Number(convertUSDCToUSD(await USDCContract.balanceOf()))
  }

  const { data: matic } = useQuery(
    ['FETCH_MATIC_VALUE', keyRank],
    fetchMaticValue
  )

  return matic
}
