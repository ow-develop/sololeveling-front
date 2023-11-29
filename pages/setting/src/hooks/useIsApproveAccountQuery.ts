import { useQuery } from '@tanstack/react-query'

import { QueryKey } from '~/constants/query'
import ApproveControllerContract from '~/contracts/approve-controller'
import useAuth from '~/hooks/useAuth'
import { Signer } from 'ethers'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const getIsRevokedApprove = async (address: string, signer: Signer) => {
  const contract = await new ApproveControllerContract().initialize(signer)
  return await contract.isRevokedAccount(address)
}

export const useIsApproveAccountQuery = () => {
  const { address } = useAuth()
  const { signer } = useWeb3AuthContext()
  const { data: isRevokedApprove, refetch: refetchApproveAccount } = useQuery(
    [QueryKey.CONTRACT_IS_REVOKED_ACCOUNT, signer?._isSigner],
    () => getIsRevokedApprove(address, signer),
    {
      enabled: !!address && !!signer?._isSigner
    }
  )

  const toggleAccountApproval = async () => {
    const contract = await new ApproveControllerContract().initialize(signer)
    if (isRevokedApprove) {
      await contract.approve()
    } else {
      await contract.revoke()
    }
    refetchApproveAccount()
  }

  return {
    isApproveAccount: !isRevokedApprove,
    toggleAccountApproval
  }
}
