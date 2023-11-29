import axios, { AxiosError } from 'axios'

import { ErrorResponse } from '~/types/api'
import Config from '~/config'
import { MILLISECONDS_A_SECOND } from '~/constants/time'

const api = axios.create({
  baseURL: Config.API_BASE_URL
})

api.defaults.timeout = MILLISECONDS_A_SECOND * 15

api.interceptors.request.use(
  async (config) => config,
  (error) => Promise.reject(error)
)

api.interceptors.response.use(
  function (response) {
    return response
  },
  function (error: AxiosError<ErrorResponse>) {
    return Promise.reject(error.response.data)
  }
)

export default api
