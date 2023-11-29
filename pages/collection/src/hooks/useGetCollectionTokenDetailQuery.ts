import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '~/constants/query'
import { fetchGetCollectionTokenDetail } from '~/api/collection'
import { CollectionTokenDetailDto } from '~/api/dto/collection'

export function useGetCollectionTokenDetailQuery({
  collectionAddress,
  tokenId
}: CollectionTokenDetailDto) {
  return useQuery(
    [QueryKey.GET_COLLECTION_TOKEN_DETAIL, [collectionAddress, tokenId]],
    () => fetchGetCollectionTokenDetail({ collectionAddress, tokenId })
  )
}
