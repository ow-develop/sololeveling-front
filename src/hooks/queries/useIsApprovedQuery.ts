import { useQuery } from '@tanstack/react-query'

import { ERC1155CollectionType } from '~/constants/contracts'
import { QueryKey } from '~/constants/query'
import ERC1155Contract from '~/contracts/erc1155'
import useAuth from '~/hooks/useAuth'
import { getContractExceptionText } from '~/lib/ethers-error-handler'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import { Signer } from 'ethers'

const isApprovedForAll = async (
  collectionType: ERC1155CollectionType,
  owner: string,
  operator: string,
  signer: Signer
) => {
  const collectionContract = await new ERC1155Contract(
    collectionType
  ).initialize(signer)

  return await collectionContract.isApprovedForAll(owner, operator)
}

const useIsApprovedQuery = (
  collectionType: ERC1155CollectionType,
  operator: string
) => {
  const { address } = useAuth()
  const { signer } = useWeb3AuthContext()

  const queryState = useQuery(
    [
      QueryKey.CONTRACT_IS_APPROVED_FOR_ALL,
      address,
      collectionType,
      signer?._isSigner
    ],
    () => isApprovedForAll(collectionType, address, operator, signer),
    {
      enabled: !!address && !!signer?._isSigner,
      retry: 1,
      onError(error) {
        console.error(getContractExceptionText(error))
      }
    }
  )

  return { ...queryState }
}

export default useIsApprovedQuery
