import { QueryKey } from '~/constants/query'
import api from '~/lib/api'
import { ResponseTypes } from '~/types/api'
import { GateKeyApiResponse, ShopListApiResponse } from '~/types/shop'
import {
  FetchBuyGateKeyDto,
  FetchBuyStoneDto,
  FetchClaimGateKeyDto
} from '~/api/dto/shop'

export const fetchGetGateKeyList = async (address: string) => {
  const { data } = await api.get<ResponseTypes<GateKeyApiResponse>>(
    QueryKey.GET_SHOP_TOKEN_LIST,
    {
      params: {
        address
      }
    }
  )

  return data.data
}

export const fetchGetShopTokenBalance = async (address: string) => {
  const { data } = await api.get<ResponseTypes<ShopListApiResponse>>(
    `${QueryKey.GET_SHOP_TOKEN_BALANCE}/${address}`,
    {
      params: {
        address
      }
    }
  )

  return data.data
}

export const fetchBuyGateKey = async (body: FetchBuyGateKeyDto) => {
  return await api.post(QueryKey.BUY_GATE_KEY, body)
}

export const fetchBuyStone = async (body: FetchBuyStoneDto) => {
  return await api.post(QueryKey.BUY_STONE, body)
}

export const fetchGetClaimGateKeySignature = async () => {
  const {
    data: {
      data: { signature }
    }
  } = await api.get<ResponseTypes<any>>(QueryKey.GET_CLAIM_GATE_KEY_SIGNATURE)
  return signature
}

export const fetchClaimGateKey = async (body: FetchClaimGateKeyDto) => {
  return await api.post(QueryKey.CLAIM_GATE_KEY, body)
}
