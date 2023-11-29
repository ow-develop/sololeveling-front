import type { NextPage } from 'next'

import HomeCollectionBanner from './src/home/src/features/home-collection-banner'
import HomeEventBanner from './src/home/src/features/home-event-banner'
import HomeGetStarted from './src/home/src/features/home-get-started'
import HomeMainBanner from './src/home/src/features/home-main-banner'
import HomeMainContent from './src/home/src/features/home-main-content'
import HomeReward from './src/home/src/features/home-reward'
import { HomeContentWrapper, HomeWrapper } from './src/home/style'

import AsyncBoundary from '~/common/async-boundary'
import React, { useEffect } from 'react'
import useUserQuery from '~/hooks/queries/useUserQuery'
import useAuth from '~/hooks/useAuth'
import useModal from '~/hooks/useModal'
import { useRecoilValue } from 'recoil'
import { eventModalState } from '~/atoms/common'

const LazyEventModal = React.lazy(() => import('~/common/modal/event-modal'))

const HomePage: NextPage = () => {
  const { isLoggedIn } = useAuth()
  const { isAvailableFreeGateKey } = useUserQuery()
  const { openModal } = useModal()
  const isClosed = useRecoilValue(eventModalState)

  useEffect(() => {
    if (isLoggedIn && isClosed && !!isAvailableFreeGateKey) {
      openModal(<LazyEventModal />)
    }
  }, [isLoggedIn, isAvailableFreeGateKey])

  return (
    <AsyncBoundary>
      <HomeWrapper>
        <HomeMainBanner />
        <HomeEventBanner />

        <HomeContentWrapper>
          <HomeMainContent />
          <HomeReward />
          <HomeCollectionBanner />
          <HomeGetStarted />
        </HomeContentWrapper>
      </HomeWrapper>
    </AsyncBoundary>
  )
}
export default HomePage
