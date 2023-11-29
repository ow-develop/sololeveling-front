import { useQuery } from '@tanstack/react-query'

import { getSeasonPackList } from '~/api/collection'
import { QueryKey } from '~/constants/query'

const useSeasonPackQuery = () => {
  const { data } = useQuery(
    [QueryKey.GET_SEASON_PACK_LIST],
    getSeasonPackList,
    {
      suspense: false
    }
  )

  const getSeasonPackById = (tokenId: number) => {
    if (!data) return
    return data.find((seasonPack) => seasonPack.seasonPackId === tokenId)
  }

  return { seasonPackList: data ?? [], getSeasonPackById }
}

export default useSeasonPackQuery
