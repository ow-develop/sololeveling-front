import React, { ReactNode, useEffect } from 'react'
import { useSession } from 'next-auth/react'
import api from '~/lib/api'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import { isDayExpired } from '~/lib/dayjs'
import { useQuery } from '@tanstack/react-query'
import { MILLISECONDS_A_SECOND } from '~/constants/time'

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data, status } = useSession()
  const { logout } = useWeb3AuthContext()

  useQuery(
    ['SESSION_EXPIRED', data?.expires],
    () => isDayExpired(data?.expires),
    {
      refetchInterval: MILLISECONDS_A_SECOND * 30,
      refetchOnWindowFocus: true,
      refetchOnMount: true,
      refetchIntervalInBackground: true,
      enabled: !!data?.expires,
      staleTime: MILLISECONDS_A_SECOND * 2,
      suspense: false,
      onSuccess(expired) {
        if (expired) {
          logout()
        }
      }
    }
  )

  useEffect(() => {
    api.defaults.headers.common['Authorization'] =
      status === 'authenticated' ? `Bearer ${data?.user.accessToken}` : ''
  }, [status, data?.user])

  return <>{children}</>
}

export default AuthProvider
