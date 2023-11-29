import { useMutation } from '@tanstack/react-query'

import { fetchEditProfileImage } from '~/api/hunter'
import useUserQuery from '~/hooks/queries/useUserQuery'

export const useProfileImgMutation = () => {
  const { refetch: refetchUserInfo } = useUserQuery()

  return useMutation((imgUrl: string) => fetchEditProfileImage(imgUrl), {
    onSuccess: async () => {
      await refetchUserInfo()
    }
  })
}
