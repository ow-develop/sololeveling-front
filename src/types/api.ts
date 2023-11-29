import { User } from './wallet'

export interface ErrorResponse {
  error: string
  message: string[]
  statusCode: number
}
export interface ResponseTypes<T> {
  data: T
  message: string
  statusCode: number
}

export interface LoginResponse {
  wallet: User
  accessToken: string
}

export interface TransactionApiDto {
  signature: string
  txHash: string
  blockNumber: number
  blockDate: string
}
