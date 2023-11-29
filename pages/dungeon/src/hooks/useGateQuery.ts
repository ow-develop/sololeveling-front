import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '~/constants/query'
import useAuth from '~/hooks/useAuth'
import { getPrivateProvider } from '~/lib/ethers-util'
import { GateWithBlock } from '~/types/dungeon'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import { getContractExceptionText } from '~/lib/ethers-error-handler'
import useDungeonStore from './useDungeonStore'
import { MILLISECONDS_A_SECOND } from '~/constants/time'

const useGateQuery = () => {
  const { setTransactionOn } = useDungeonStore()
  const { isLoggedIn, address } = useAuth()
  const {
    signer,
    contract: { DungeonGateContract }
  } = useWeb3AuthContext()

  const getGateOfHunterSlot = async (
    address: string
  ): Promise<GateWithBlock[]> => {
    try {
      const privateProvider = getPrivateProvider()
      const currentBlockNumber = await privateProvider.getBlockNumber()
      const { gates, requiredStones } =
        await DungeonGateContract.getGateOfHunterSlot(address)

      return gates.map((gate, index) => ({
        ...gate,
        remainBlock: gate.endBlock - currentBlockNumber,
        required: requiredStones[index]
      }))
    } catch (err) {
      console.error(err)
      getContractExceptionText(err)
      return []
    }
  }

  const queryState = useQuery(
    [
      QueryKey.CONTRACT_GET_GATE_OF_HUNTER_SLOT,
      isLoggedIn,
      address,
      signer?._isSigner
    ],
    () => getGateOfHunterSlot(address),
    {
      enabled: isLoggedIn && !!address && !!signer?._isSigner,
      retry: 1,
      staleTime: MILLISECONDS_A_SECOND * 15,
      onSuccess() {
        setTransactionOn()
      }
    }
  )

  const getGateDetail = (gateId: number) =>
    queryState.data?.find((gate) => gate.id === gateId)

  return { ...queryState, getGateDetail }
}

export default useGateQuery
