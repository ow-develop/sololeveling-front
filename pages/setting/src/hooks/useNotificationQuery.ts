import { useMutation } from '@tanstack/react-query'
import { useCallback } from 'react'

import { fetchEditMarketingOptIn } from '~/api/hunter'
import useUserQuery from '~/hooks/queries/useUserQuery'

export function useNotificationQuery() {
  const { data: userInfo, refetch: refetchUserInfo } = useUserQuery()
  const { mutate: postMarketingOptIn, isLoading } = useMutation(
    (marketingOptIn: boolean) => fetchEditMarketingOptIn(marketingOptIn),
    {
      onSuccess: () => {
        refetchUserInfo()
      }
    }
  )

  const toggleMarketingOpt = useCallback(() => {
    postMarketingOptIn(!userInfo?.marketingOptIn)
  }, [userInfo])

  return {
    isMarketingOptApprove: userInfo?.marketingOptIn,
    toggleMarketingOpt,
    isLoading
  }
}
