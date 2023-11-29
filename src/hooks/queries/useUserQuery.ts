import { useQuery } from '@tanstack/react-query'
import { useSession } from 'next-auth/react'
import { useEffect } from 'react'
import { useSetRecoilState } from 'recoil'

import { fetchUser } from '~/api/wallet'
import { userState } from '~/atoms/auth'
import { QueryKey } from '~/constants/query'
import useAccessTokenUpdated from '~/hooks/useAccessTokenUpdated'

const useUserQuery = () => {
  const { status } = useSession()
  const setUserState = useSetRecoilState(userState)
  const { accessTokenUpdated } = useAccessTokenUpdated()

  const queryState = useQuery(
    [QueryKey.GET_WALLET_INFO, status, accessTokenUpdated],
    fetchUser,
    {
      staleTime: Infinity,
      retry: 10,
      refetchOnMount: false,
      refetchOnWindowFocus: false,
      enabled: status === 'authenticated' && accessTokenUpdated,
      suspense: false
    }
  )

  const userRank = queryState.data?.rank ?? 'E'
  const isMaximumRank = userRank === 'S'
  const isAvailableFreeGateKey = queryState.data?.isAvailableFreeGateKey

  useEffect(() => {
    if (queryState.data) setUserState(queryState.data)
  }, [queryState.data])

  return { ...queryState, userRank, isMaximumRank, isAvailableFreeGateKey }
}

export default useUserQuery
