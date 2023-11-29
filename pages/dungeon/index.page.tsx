import { GetServerSidePropsContext, NextPage } from 'next'
import GateSlotSkeleton from './src/features/gate-slot/gate-slot-skeleton'
import SectionLayout from '~/layouts/section-layout'
import { CommonMainLayout } from '~/layouts/style'
import AsyncBoundary from '~/common/async-boundary'
import DungeonGate from './src/features/dungeon-gate'
import { getSession } from 'next-auth/react'
import { InternalPath } from '~/constants/route'

const DungeonPage: NextPage = () => {
  return (
    <CommonMainLayout>
      <SectionLayout
        title='Dungeon'
        description='Enter gate and clear to earn Monsters.'
      >
        <SectionLayout.Content title='Gate Slot'>
          <AsyncBoundary loadingComponent={<GateSlotSkeleton />}>
            <DungeonGate />
          </AsyncBoundary>
        </SectionLayout.Content>
      </SectionLayout>
    </CommonMainLayout>
  )
}

export default DungeonPage

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
