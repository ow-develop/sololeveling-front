import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '~/constants/query'
import { MILLISECONDS_A_MINUTE } from '~/constants/time'
import { getPrivateProvider } from '~/lib/ethers-util'

const getCurrentBlockNumber = async () => {
  const provider = getPrivateProvider()
  return await provider.getBlockNumber()
}

const useCurrentBlockNumber = () => {
  const queryState = useQuery(
    [QueryKey.CONTRACT_GET_CURRENT_BLOCK_NUMBER],
    getCurrentBlockNumber,
    {
      refetchInterval: MILLISECONDS_A_MINUTE,
      suspense: false
    }
  )

  return { ...queryState }
}

export default useCurrentBlockNumber
