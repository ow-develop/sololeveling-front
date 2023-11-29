import HunterInventoryList from './src/features/hunter-inventory-list'
import HunterProfile from './src/features/hunter-profile'
import { CommonMainLayout } from '~/layouts/style'
import AsyncBoundary from '~/common/async-boundary'
import { useRouter } from 'next/router'
import HunterProfileSkeleton from './src/features/hunter-profile/hunter-profile-skeleton'

const HunterPage = () => {
  const { query, push } = useRouter()

  return (
    <CommonMainLayout>
      <AsyncBoundary loadingComponent={<HunterProfileSkeleton />}>
        <HunterProfile address={query.address} />
      </AsyncBoundary>
      <HunterInventoryList address={query.address} />
    </CommonMainLayout>
  )
}

export default HunterPage
