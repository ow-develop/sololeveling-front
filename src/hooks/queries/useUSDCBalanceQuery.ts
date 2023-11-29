import useAuth from '~/hooks/useAuth'
import { convertUSDCToUSD } from '~/lib/ethers-util'
import { Signer } from 'ethers'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '~/constants/query'
import { MILLISECONDS_A_SECOND } from '~/constants/time'
import ERC20Contract from '~/contracts/erc20'
import Config from '~/config'

const useUSDCBalanceQuery = (suspense?: boolean) => {
  const { isLoggedIn } = useAuth()
  const { signer } = useWeb3AuthContext()

  const getUSDCBalance = async (signer: Signer) => {
    const USDCContract = new ERC20Contract(Config.TestUSDC).initialize(signer)
    const usdc = await USDCContract.balanceOf()

    return {
      USDC: Number(convertUSDCToUSD(usdc))
    }
  }

  return useQuery(
    [QueryKey.CONTRACT_GET_USDC_BALANCE, signer?._isSigner],
    () => getUSDCBalance(signer),
    {
      retry: 2,
      refetchInterval: MILLISECONDS_A_SECOND * 30,
      enabled: isLoggedIn && !!signer?._isSigner,
      suspense: suspense ?? true
    }
  )
}

export default useUSDCBalanceQuery
