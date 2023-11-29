import NextAuth, { Awaitable, User } from 'next-auth'
import Credentials from 'next-auth/providers/credentials'

import { login } from '~/api/wallet'
import Config from '~/config'

export default NextAuth({
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: Config.SESSION_TIME
  },
  providers: [
    Credentials({
      id: 'Credential',
      name: 'Credential',
      credentials: {
        address: {},
        message: {},
        signature: {}
      },
      async authorize(credentials) {
        const { address, message, signature } = credentials

        try {
          return (await login(address, message, signature)) as Awaitable<User>
        } catch (err) {
          console.error(err)
        }

        return null
      }
    })
  ],
  debug: process.env.NODE_ENV === 'development',
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.accessToken
        token.address = user.wallet.address
      }
      return token
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken as string
      session.user.address = token.address as string

      return session
    }
  }
})
