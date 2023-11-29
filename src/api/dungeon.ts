import { QueryKey } from '~/constants/query'
import api from '~/lib/api'
import { FetchClearGateDto, FetchCreateGateDto } from '~/api/dto/dungeon'
import { ResponseTypes } from '~/types/api'

export const fetchCreateGate = async (body: FetchCreateGateDto) => {
  return await api.post<ResponseTypes<null>>(QueryKey.CREATE_GATE, body)
}

export const fetchClearGate = (body: FetchClearGateDto) => {
  return api.post<ResponseTypes<null>>(QueryKey.CLEAR_GATE, body)
}
