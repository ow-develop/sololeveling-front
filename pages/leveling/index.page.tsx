import type { NextPage } from 'next'

import SystemMenu from './src/features/leveling-menu'

import AsyncBoundary from '~/common/async-boundary'
import SectionLayout from '~/layouts/section-layout'
import { CommonMainLayout } from '~/layouts/style'
import LevelingMenuSkeleton from './src/ui/leveling-menu-skeleton'

const SystemPage: NextPage = () => {
  return (
    <CommonMainLayout>
      <SectionLayout
        title='Leveling'
        description='Hunter can upgrade, return monster and get hunter rank up by leveling.'
      >
        <AsyncBoundary loadingComponent={<LevelingMenuSkeleton />}>
          <SystemMenu />
        </AsyncBoundary>
      </SectionLayout>
    </CommonMainLayout>
  )
}

export default SystemPage
