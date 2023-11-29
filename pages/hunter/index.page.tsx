import React from 'react'
import { CommonMainLayout } from '~/layouts/style'
import AsyncBoundary from '~/common/async-boundary'
import HunterProfileSkeleton from './src/features/hunter-profile/hunter-profile-skeleton'
import HunterProfile from './src/features/hunter-profile'
import HunterInventoryList from './src/features/hunter-inventory-list'
import useAuth from '~/hooks/useAuth'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import { InternalPath } from '~/constants/route'

const HunterPage = () => {
  const { address } = useAuth()

  return (
    <CommonMainLayout>
      <AsyncBoundary loadingComponent={<HunterProfileSkeleton />}>
        <HunterProfile address={address} />
      </AsyncBoundary>
      <HunterInventoryList address={address} />
    </CommonMainLayout>
  )
}

export default HunterPage

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
