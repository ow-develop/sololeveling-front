import { useSession } from 'next-auth/react'
import { useRecoilValue } from 'recoil'

import { userState } from '~/atoms/auth'
import { useMemo } from 'react'

const useAuth = () => {
  const { status, data } = useSession()
  const user = useRecoilValue(userState)

  const isLoggedIn = useMemo(() => status !== 'unauthenticated', [status])
  const userAccessToken = useMemo(
    () => data?.user.accessToken,
    [data?.user.accessToken]
  )
  const userAddress = useMemo(() => data?.user.address, [data?.user.address])

  return {
    isLoggedIn,
    sessionStatus: status,
    userAccessToken,
    ...user,
    address: userAddress
  }
}

export default useAuth
