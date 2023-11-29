import { Tooltip, useDownCustom } from '@ow-develop/ow-design-system'
import { InfoOutlineIcon } from '@ow-develop/ow-icons/react/material'
import React, { useMemo } from 'react'

import { headersMap } from './data'
import useSeasonMyRankingQuery from '../../hooks/useSeasonMyRankingQuery'
import useSeasonRankingQuery from '../../hooks/useSeasonRankingQuery'
import { RankNumberBadge } from '../../ui/rank-number-badge'
import RankerProfile from '../../ui/ranker-profile'
import SeasonLeaderboardTable from '../../ui/season-leaderboard-table'
import { LeaderboardTableRow } from '../../ui/season-leaderboard-table/type'

import { AccountProfile } from '~/common/profile/account-profile'
import SvgIcon from '~/common/svg-icon'
import { Breakpoint } from '~/constants/style'
import useAuth from '~/hooks/useAuth'
import { useI18next } from '~/lib/i18n'
import { getProfileImg } from '~/lib/image'
import { convertZero } from '~/utils/formatNumber'

const SeasonLeaderboard = () => {
  const { address, name, rank } = useAuth()
  const { myRanking } = useSeasonMyRankingQuery()
  const { rankingList } = useSeasonRankingQuery()
  const { t } = useI18next()

  const isLargeBreakpoint = useDownCustom(Breakpoint.L)
  const isSmallBreakpoint = useDownCustom(Breakpoint.S)

  const getHeadersSize = () => {
    switch (true) {
      case isSmallBreakpoint:
        return 'small'
      case isLargeBreakpoint:
        return 'medium'
      default:
        return 'large'
    }
  }

  const headers = headersMap[getHeadersSize()].map((header) => {
    if (header.key === 'seasonScore') {
      return {
        ...header,
        header: (
          <>
            <Tooltip
              text={t(
                'Season score consist of 0% quest scores, 60% hunter activity scores and 40% collection scores for the season.'
              )}
            >
              <SvgIcon
                icon={<InfoOutlineIcon />}
                size={18}
                color='icon-default'
              />
            </Tooltip>
            {t('Season score')}
          </>
        )
      }
    }

    return {
      ...header
    }
  })

  const rows: LeaderboardTableRow[] = useMemo(() => {
    if (rankingList) {
      return rankingList.map((item) => {
        return {
          id: item.address,
          hunterName: (
            <RankerProfile
              imageUrl={getProfileImg(item)}
              imageSize={48}
              name={item.name}
              address={item.address}
            />
          ),
          rank: <RankNumberBadge rank={item.order} />,
          seasonScore: convertZero(item.totalConvertedScore),
          collectionScore: convertZero(item.collectionConvertedScore),
          activityScore: convertZero(item.activityConvertedScore),
          questScore: convertZero(item.questConvertedScore)
        }
      })
    }
    return []
  }, [rankingList])

  const user = myRanking
    ? [
        {
          id: address,
          hunterName: (
            <AccountProfile
              rank={rank ?? 'E'}
              imageSize={48}
              name={name}
              address={address}
            />
          ),
          rank: <RankNumberBadge rank={myRanking.order} />,
          seasonScore: convertZero(myRanking.totalConvertedScore),
          collectionScore: convertZero(myRanking.collectionConvertedScore),
          activityScore: convertZero(myRanking.activityConvertedScore),
          questScore: convertZero(myRanking.questConvertedScore)
        }
      ]
    : undefined

  return <SeasonLeaderboardTable headers={headers} user={user} rows={rows} />
}

export default SeasonLeaderboard
