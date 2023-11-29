import { useRouter } from 'next/router'
import { useSession } from 'next-auth/react'
import { ReactNode, useEffect } from 'react'

interface Props {
  redirect: string
  children?: ReactNode
}

const RedirectContainer = ({ redirect, children }: Props) => {
  const { status } = useSession()
  const { push } = useRouter()

  useEffect(() => {
    if (status === 'unauthenticated') {
      push(redirect)
    }
  }, [status])

  return <>{children}</>
}

export default RedirectContainer
