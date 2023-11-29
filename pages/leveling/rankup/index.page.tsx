import type { NextPage } from 'next'
import { GetServerSidePropsContext } from 'next'
import Link from 'next/link'

import RankUpInformation from './src/features/rank-information'
import RankUpInventory from './src/features/rank-inventory'
import LevelingContainer from '../src/container/leveling-container'
import PreviousButton from '../../../src/common/previous-button'
import { LevelingMainLayout } from '../src/ui/style'

import AsyncBoundary from '~/common/async-boundary'
import { InternalPath } from '~/constants/route'
import SectionLayout from '~/layouts/section-layout'
import useBreakpoint from '~/hooks/useBreakpoint'
import LevelingInformationSkeleton from '../src/ui/leveling-information-skeleton'
import LevelingInventorySkeleton from '../src/ui/leveling-inventory-skleton'
import React from 'react'
import { getSession } from 'next-auth/react'

const RankUpPage: NextPage = () => {
  const { belowMediumWidth } = useBreakpoint()

  return (
    <LevelingContainer>
      <LevelingMainLayout>
        <Link href={InternalPath.LEVELING}>
          <a>
            <PreviousButton />
          </a>
        </Link>

        <SectionLayout
          title='Rank Up'
          description='Use 10 Monsters to become a higher rank Hunter.'
        >
          <AsyncBoundary loadingComponent={<LevelingInformationSkeleton />}>
            <RankUpInformation />
          </AsyncBoundary>

          <AsyncBoundary loadingComponent={<LevelingInventorySkeleton />}>
            {!belowMediumWidth && <RankUpInventory />}
          </AsyncBoundary>
        </SectionLayout>
      </LevelingMainLayout>
    </LevelingContainer>
  )
}

export default RankUpPage

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
