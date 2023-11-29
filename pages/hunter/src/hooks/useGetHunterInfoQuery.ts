import { QueryKey } from '~/constants/query'
import { fetchGetHunterInfo } from '~/api/hunter'
import { useQuery } from '@tanstack/react-query'

export function useGetHunterInfoQuery(address: string | string[]) {
  return useQuery([QueryKey.GET_HUNTER_INFO, [address]], () =>
    fetchGetHunterInfo(address)
  )
}
