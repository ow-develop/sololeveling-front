import useAuth from '~/hooks/useAuth'
import { convertWeiToMatic } from '~/lib/ethers-util'
import { Signer } from 'ethers'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '~/constants/query'
import { MILLISECONDS_A_SECOND } from '~/constants/time'

export const getMaticBalance = async (signer: Signer) => {
  const matic = await signer.getBalance()

  return {
    MATIC: Number(convertWeiToMatic(matic))
  }
}

const useMaticBalanceQuery = (suspense?: boolean) => {
  const { isLoggedIn } = useAuth()
  const { signer } = useWeb3AuthContext()

  const queryState = useQuery(
    [QueryKey.CONTRACT_GET_MATIC_BALANCE, signer?._isSigner],
    () => getMaticBalance(signer),
    {
      retry: 2,
      refetchInterval: MILLISECONDS_A_SECOND * 30,
      enabled: isLoggedIn && !!signer?._isSigner,
      suspense: suspense ?? true
    }
  )

  return { ...queryState }
}

export default useMaticBalanceQuery
