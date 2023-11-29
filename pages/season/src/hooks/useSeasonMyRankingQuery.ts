import { useQuery } from '@tanstack/react-query'

import { fetchGetSeasonMyRanking } from '~/api/season'
import Config from '~/config'
import { QueryKey } from '~/constants/query'
import useAuth from '~/hooks/useAuth'

const useSeasonMyRankingQuery = () => {
  const { isLoggedIn } = useAuth()

  const queryState = useQuery(
    [QueryKey.GET_MY_SEASON_RANKING, isLoggedIn],
    () => fetchGetSeasonMyRanking(Config.CURRENT_SEASON_ID),
    {
      enabled: isLoggedIn
    }
  )

  const isTop100 = queryState.data?.myRanking.order <= 100

  return { ...queryState, myRanking: queryState.data?.myRanking, isTop100 }
}

export default useSeasonMyRankingQuery
