import type { User } from 'next-auth'
import { JWT } from 'next-auth/jwt'

import { LoginResponse } from '~/types/api'

declare module 'next-auth' {
  interface User extends LoginResponse {
    address: string
    email: string
    marketingOptIn: boolean
  }

  interface Session {
    user: User & { address: string }
    token: JWT & { accessToken: string }
  }
}
