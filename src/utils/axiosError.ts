import { AxiosError } from 'axios'

export interface ErrorResponseTypes {
  error: string
  message: string | string[]
  statusCode: number
}

export const errorResponseHandler = (error: AxiosError<ErrorResponseTypes>) => {
  if (!error) return
  const { data } = error.response
  return data
}
