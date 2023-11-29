import { useQuery } from '@tanstack/react-query'

import { fetchGetSeasonRanking } from '~/api/season'
import Config from '~/config'
import { QueryKey } from '~/constants/query'

const useSeasonRankingQuery = () => {
  const queryState = useQuery(
    [QueryKey.GET_SEASON_RANKING],
    () => fetchGetSeasonRanking(Config.CURRENT_SEASON_ID),
    {
      refetchOnMount: true
    }
  )

  const rankingList = queryState.data?.rankingList ?? []

  return { ...queryState, rankingList }
}

export default useSeasonRankingQuery
