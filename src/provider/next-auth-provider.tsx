import React, { ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'
import { Session } from 'next-auth'

const NextAuthProvider = ({
  children,
  session
}: {
  children: ReactNode
  session: Session
}) => {
  return <SessionProvider session={session}>{children}</SessionProvider>
}

export default NextAuthProvider
