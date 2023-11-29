import { fetchBuyGateKey } from '~/api/shop'
import useAuth from '~/hooks/useAuth'
import { convertToISOString, convertUSDToUSDC } from '~/lib/ethers-util'
import { HunterRankType } from '~/types/common'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import useShopListQuery from './useShopListQuery'
import ERC20Contract from '~/contracts/erc20'
import Config from '~/config'

export const useBuyKey = (keyRank: HunterRankType) => {
  const { address } = useAuth()
  const {
    signer,
    contract: { ShopContract }
  } = useWeb3AuthContext()
  const { priceByRank } = useShopListQuery()

  const buyKey = async (amount: number) => {
    const gateKeyPrice = convertUSDToUSDC(priceByRank(keyRank))
    const price = gateKeyPrice.mul(amount)

    const USDCContract = await new ERC20Contract(Config.TestUSDC).initialize(
      signer
    )

    const usdcApproveBalance = await USDCContract.allowance(Config.Shop)

    if (usdcApproveBalance.lt(price)) {
      await USDCContract.approve(Config.Shop)
    }

    const { txHash, blockNumber, keySold } = await ShopContract.buyKey(
      address,
      keyRank,
      amount
    )

    const signature = await ShopContract.getSignatureByTxHash(txHash)

    await fetchBuyGateKey({
      signature,
      txHash,
      blockNumber,
      blockDate: convertToISOString(keySold.timestamp),
      keySold
    })

    return { txHash }
  }
  return { buyKey }
}
