import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '~/constants/query'
import { MILLISECONDS_A_HOUR } from '~/constants/time'
import useAuth from '~/hooks/useAuth'
import { getContractExceptionText } from '~/lib/ethers-error-handler'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const useHunterSlotQuery = () => {
  const { isLoggedIn, address } = useAuth()
  const {
    signer,
    contract: { DungeonGateContract }
  } = useWeb3AuthContext()

  const getHunterSlot = async (address: string) => {
    return await DungeonGateContract.getHunterSlot(address)
  }

  return useQuery(
    [QueryKey.CONTRACT_GET_HUNTER_SLOT, address, signer?._isSigner],
    () => getHunterSlot(address),
    {
      enabled: isLoggedIn && !!address && !!signer?._isSigner,
      retry: 1,
      staleTime: 10 * MILLISECONDS_A_HOUR,
      onError(err) {
        console.error(getContractExceptionText(err))
      }
    }
  )
}

export default useHunterSlotQuery
