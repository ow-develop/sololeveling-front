import { useMutation } from '@tanstack/react-query'

import { fetchWithDraw } from '~/api/hunter'
import { SuccessType } from '~/constants/message'
import { InternalPath } from '~/constants/route'
import useToastAction from '~/hooks/useToastAction'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

export default function useWithdrawMutation() {
  const { showSuccessToast } = useToastAction()
  const { logout } = useWeb3AuthContext()

  return useMutation(fetchWithDraw, {
    onSuccess: () => {
      logout()
      showSuccessToast(SuccessType.DELETE_USER)
    }
  })
}
