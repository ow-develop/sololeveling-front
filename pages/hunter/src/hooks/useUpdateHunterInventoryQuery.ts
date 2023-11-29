import { QueryKey } from '~/constants/query'
import { fetchUpdateHunterInventory } from '~/api/hunter'
import { useQuery } from '@tanstack/react-query'

export function useUpdateHunterInventoryQuery({
  address,
  sort,
  page,
  filter
}: {
  address: string | string[]
  sort: string
  page: number
  filter: string[]
}) {
  return useQuery(
    [QueryKey.UPDATE_HUNTER_INVENTORY, [address, sort, page, filter]],
    () => fetchUpdateHunterInventory(address, sort, page, filter),
    { refetchOnWindowFocus: false, enabled: false, suspense: false }
  )
}
