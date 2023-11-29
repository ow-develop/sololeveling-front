import React from 'react'
import Link from 'next/link'

import ReturnInformation from './src/features/return-information'
import ReturnInventory from './src/features/return-inventory'
import LevelingContainer from '../src/container/leveling-container'
import LevelingNavigation from '../src/features/leveling-navigation'
import PreviousButton from '../../../src/common/previous-button'
import { LevelingContentLayout, LevelingMainLayout } from '../src/ui/style'

import AsyncBoundary from '~/common/async-boundary'
import { InternalPath } from '~/constants/route'
import SectionLayout from '~/layouts/section-layout'
import useBreakpoint from '~/hooks/useBreakpoint'
import LevelingInventorySkeleton from '../src/ui/leveling-inventory-skleton'
import LevelingInformationSkeleton from '../src/ui/leveling-information-skeleton'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

const ReturnPage = () => {
  const { belowMediumWidth } = useBreakpoint()

  const returnList = [
    'E-Rank',
    'D-Rank',
    'C-Rank',
    'B-Rank',
    'A-Rank',
    'S-Rank',
    'Shadow-B',
    'Shadow-A',
    'Shadow-S'
  ]

  return (
    <LevelingContainer>
      <LevelingMainLayout>
        <Link href={InternalPath.LEVELING}>
          <a>
            <PreviousButton />
          </a>
        </Link>
        <SectionLayout
          title='Return'
          description='Return Monsters to earn Essence Stones.'
        >
          <LevelingNavigation tabList={returnList} />
          <LevelingContentLayout>
            <AsyncBoundary loadingComponent={<LevelingInformationSkeleton />}>
              <ReturnInformation />
            </AsyncBoundary>

            <AsyncBoundary loadingComponent={<LevelingInventorySkeleton />}>
              {!belowMediumWidth && <ReturnInventory />}
            </AsyncBoundary>
          </LevelingContentLayout>
        </SectionLayout>
      </LevelingMainLayout>
    </LevelingContainer>
  )
}

export default ReturnPage

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
