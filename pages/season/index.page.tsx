import React from 'react'

import SeasonInfo from './src/features/season-info'
import SeasonLeaderboard from './src/features/season-leaderboard'
import SeasonReward from './src/features/season-reward'

import AsyncBoundary from '~/common/async-boundary'
import SectionLayout from '~/layouts/section-layout'
import { CommonMainLayout } from '~/layouts/style'
import SeasonInfoSkeleton from './src/ui/season-info-board/season-Info-skeleton'
import SeasonRewardSkeleton from './src/features/season-reward/season-reward-skeleton'
import SeasonLeaderboardSkeleton from './src/features/season-leaderboard/season-leaderboard-skeleton'

const SeasonPage = () => {
  return (
    <CommonMainLayout>
      <SectionLayout
        title='Season'
        description='Season information include season reward and leaderboard.'
      >
        <AsyncBoundary loadingComponent={<SeasonInfoSkeleton />}>
          <SeasonInfo />
        </AsyncBoundary>

        <SectionLayout.Content title='Reward'>
          <AsyncBoundary loadingComponent={<SeasonRewardSkeleton />}>
            <SeasonReward />
          </AsyncBoundary>
        </SectionLayout.Content>

        <SectionLayout.Content title='Leaderboard'>
          <AsyncBoundary loadingComponent={<SeasonLeaderboardSkeleton />}>
            <SeasonLeaderboard />
          </AsyncBoundary>
        </SectionLayout.Content>
      </SectionLayout>
    </CommonMainLayout>
  )
}

export default SeasonPage
