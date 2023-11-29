import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import { ERC1155CollectionType } from '~/constants/contracts'
import ERC1155Contract from '~/contracts/erc1155'

const useApproveCollection = () => {
  const { signer } = useWeb3AuthContext()

  const approveCollection = async (
    collectionType: ERC1155CollectionType,
    to: string
  ) => {
    const contract = await new ERC1155Contract(collectionType).initialize(
      signer
    )
    await contract.setApproveForAll(to)
  }

  return { approveCollection }
}

export default useApproveCollection
