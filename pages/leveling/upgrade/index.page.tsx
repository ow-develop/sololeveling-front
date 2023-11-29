import Link from 'next/link'

import UpgradeInformation from './src/features/upgrade-information'
import UpgradeInventory from './src/features/upgrade-inventory'
import LevelingContainer from '../src/container/leveling-container'
import LevelingNavigation from '../src/features/leveling-navigation'
import PreviousButton from '../../../src/common/previous-button'
import { LevelingContentLayout, LevelingMainLayout } from '../src/ui/style'

import AsyncBoundary from '~/common/async-boundary'
import { InternalPath } from '~/constants/route'
import SectionLayout from '~/layouts/section-layout'
import useBreakpoint from '~/hooks/useBreakpoint'
import LevelingInformationSkeleton from '../src/ui/leveling-information-skeleton'
import React from 'react'
import LevelingInventorySkeleton from '../src/ui/leveling-inventory-skleton'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

const UpgradePage = () => {
  const { belowMediumWidth } = useBreakpoint()
  const upgradeList = ['E-Rank', 'D-Rank', 'C-Rank', 'B-Rank', 'A-Rank']

  return (
    <LevelingContainer>
      <LevelingMainLayout>
        <Link href={InternalPath.LEVELING}>
          <a>
            <PreviousButton />
          </a>
        </Link>
        <SectionLayout
          title='Upgrade'
          description='Use 2 Monsters of the same rank and 10 Essence Stones to get a higher rank Monster.'
        >
          <LevelingNavigation tabList={upgradeList} />
          <LevelingContentLayout>
            <AsyncBoundary
              loadingComponent={
                <LevelingInformationSkeleton inputStone={true} />
              }
            >
              <UpgradeInformation />
            </AsyncBoundary>
            <AsyncBoundary loadingComponent={<LevelingInventorySkeleton />}>
              {!belowMediumWidth && <UpgradeInventory />}
            </AsyncBoundary>
          </LevelingContentLayout>
        </SectionLayout>
      </LevelingMainLayout>
    </LevelingContainer>
  )
}

export default UpgradePage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession({ req: ctx.req })

  if (!session) {
    return {
      redirect: {
        destination: InternalPath.SIGN_IN
      }
    }
  }

  return {
    props: {}
  }
}
