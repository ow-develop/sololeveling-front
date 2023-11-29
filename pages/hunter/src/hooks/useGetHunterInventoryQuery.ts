import { QueryKey } from '~/constants/query'
import { fetchGetHunterInventory } from '~/api/hunter'
import { useInfiniteQuery } from '@tanstack/react-query'

export function useGetHunterInventoryQuery({
  address,
  sort,
  filter
}: {
  address: string | string[]
  sort: string
  filter: string[]
}) {
  const { data, ...rest } = useInfiniteQuery(
    [QueryKey.GET_HUNTER_INVENTORY, [address, sort, filter]],
    async ({ pageParam = 1 }) => {
      const data = await fetchGetHunterInventory({
        address,
        sort,
        page: pageParam,
        filter
      })
      return { ...data, nextCursor: pageParam + 1 }
    },
    {
      getNextPageParam: (lastPage) => {
        return lastPage.nextCursor
      },
      suspense: false
    }
  )

  const pages = data?.pages || []

  return { data: pages, ...rest }
}
