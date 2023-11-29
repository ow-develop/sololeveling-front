import { BigNumber, ethers } from 'ethers'
import Config from '~/config'

export const convertFromToken = (token: string | number | BigNumber) => {
  return ethers.utils.formatEther(token.toString())
}

export const convertBigNumber = (value: BigNumber | number) => {
  return Number(value.toString())
}

export const convertToISOString = (blockTimestamp: BigNumber | number) => {
  return new Date(convertBigNumber(blockTimestamp) * 1000).toISOString()
}

export const getPrivateProvider = () => {
  return new ethers.providers.JsonRpcProvider(
    {
      url: Config.SERVER_RPC_URL,
      throttleLimit: 2
    },
    {
      name: 'Mumbai',
      chainId: +Config.chainConfig.chainId
    }
  )
}

export const getPrivateSigner = () => {
  const provider = getPrivateProvider()

  return new ethers.Wallet(Config.PRIVATE_WALLET_KEY, provider)
}

export const convertWeiToMatic = (value: BigNumber): string => {
  return ethers.utils.formatEther(value)
}

export const convertMaticToWei = (value: string): BigNumber => {
  return ethers.utils.parseEther(value)
}

export const convertUSDToUSDC = (value: number) => {
  return ethers.utils.parseUnits(value.toString(), 6)
}

export const convertUSDCToUSD = (value: BigNumber) => {
  return ethers.utils.formatUnits(value, 6)
}
