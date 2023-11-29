import useAuth from '~/hooks/useAuth'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import { convertToISOString, convertUSDToUSDC } from '~/lib/ethers-util'
import { fetchBuyStone } from '~/api/shop'
import useShopListQuery from './useShopListQuery'
import ERC20Contract from '~/contracts/erc20'
import Config from '~/config'

export const useBuyStone = () => {
  const { address } = useAuth()
  const {
    signer,
    contract: { ShopContract }
  } = useWeb3AuthContext()
  const { priceStone } = useShopListQuery()

  const buyStone = async (amount: number) => {
    const stonePrice = convertUSDToUSDC(priceStone)
    const price = stonePrice.mul(amount)

    const USDCContract = await new ERC20Contract(Config.TestUSDC).initialize(
      signer
    )
    const usdcApproveBalance = await USDCContract.allowance(Config.Shop)

    if (usdcApproveBalance.lt(price)) {
      await USDCContract.approve(Config.Shop)
    }

    const { txHash, blockNumber, stoneSold } = await ShopContract.buyStone(
      address,
      amount
    )

    const signature = await ShopContract.getSignatureByTxHash(txHash)
    await fetchBuyStone({
      signature,
      txHash,
      blockNumber,
      blockDate: convertToISOString(stoneSold.timestamp),
      stoneSold
    })

    return { txHash }
  }
  return { buyStone }
}
