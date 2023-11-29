import { useMutation } from '@tanstack/react-query'

import { fetchEditProfileName } from '~/api/hunter'
import useUserQuery from '~/hooks/queries/useUserQuery'

export default function useSaveNameMutation() {
  const { refetch: refetchUserInfo } = useUserQuery()
  return useMutation(fetchEditProfileName, {
    onSuccess: () => {
      refetchUserInfo()
    }
  })
}
