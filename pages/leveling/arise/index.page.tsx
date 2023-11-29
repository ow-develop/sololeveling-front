import React from 'react'
import LevelingContainer from '../src/container/leveling-container'
import Link from 'next/link'
import { InternalPath } from '~/constants/route'
import PreviousButton from '../../../src/common/previous-button'
import { LevelingContentLayout, LevelingMainLayout } from '../src/ui/style'
import SectionLayout from '~/layouts/section-layout'
import LevelingNavigation from '../src/features/leveling-navigation'
import AsyncBoundary from '~/common/async-boundary'
import AriseInformation from './src/features/arise-information'
import AriseInventory from './src/features/arise-inventory'
import LevelingInventorySkeleton from '../src/ui/leveling-inventory-skleton'
import useBreakpoint from '~/hooks/useBreakpoint'
import LevelingInformationSkeleton from '../src/ui/leveling-information-skeleton'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'

const ArisePage = () => {
  const { belowMediumWidth } = useBreakpoint()
  const ariseList = ['S-Rank', 'Shadow-B', 'Shadow-A']

  return (
    <LevelingContainer>
      <LevelingMainLayout>
        <Link href={InternalPath.LEVELING}>
          <a>
            <PreviousButton />
          </a>
        </Link>
        <SectionLayout
          title='Arise'
          description='Arise Shadow Army from Monster by using Essence Stones.'
        >
          <LevelingNavigation tabList={ariseList} />
          <LevelingContentLayout>
            <AsyncBoundary
              loadingComponent={
                <LevelingInformationSkeleton inputStone={true} />
              }
            >
              <AriseInformation />
            </AsyncBoundary>
            <AsyncBoundary loadingComponent={<LevelingInventorySkeleton />}>
              {!belowMediumWidth && <AriseInventory />}
            </AsyncBoundary>
          </LevelingContentLayout>
        </SectionLayout>
      </LevelingMainLayout>
    </LevelingContainer>
  )
}

export default ArisePage

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
