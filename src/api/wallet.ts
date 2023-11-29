import { QueryKey } from '~/constants/query'
import api from '~/lib/api'
import { LoginResponse, ResponseTypes } from '~/types/api'
import { User } from '~/types/wallet'

export const login = async (
  address: string,
  message: string,
  signature: string
) => {
  const {
    data: { data: userInfo }
  } = await api.post<ResponseTypes<LoginResponse>>(QueryKey.SIGN_IN, {
    address,
    message,
    signature
  })

  return userInfo
}

export const fetchUser = async () => {
  const {
    data: { data: userInfo }
  } = await api.get<ResponseTypes<User>>(QueryKey.GET_WALLET_INFO)
  return userInfo
}
