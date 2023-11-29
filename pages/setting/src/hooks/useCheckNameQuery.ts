import { useQuery } from '@tanstack/react-query'
import { fetchCheckHunterName } from '~/api/hunter'
import { QueryKey } from '~/constants/query'

export default function useCheckNameQuery(name: string) {
  return useQuery([QueryKey.CHECK_HUNTER_NAME, name], {
    queryFn: () => fetchCheckHunterName(name),
    enabled: false,
    retry: 0,
    suspense: false
  })
}
