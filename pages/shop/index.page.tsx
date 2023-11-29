import ShopList from './src/features/shop-list'

import AsyncBoundary from '~/common/async-boundary'
import SectionLayout from '~/layouts/section-layout'
import { CommonMainLayout } from '~/layouts/style'
import ShopListSkeleton from './src/ui/shop-list-skeleton'

const ShopPage = () => {
  return (
    <CommonMainLayout>
      <SectionLayout
        title='Shop'
        description='Hunter can purchase items that can be used in the Solo Leveling : Unlimited.'
      >
        <AsyncBoundary loadingComponent={<ShopListSkeleton />}>
          <ShopList />
        </AsyncBoundary>
      </SectionLayout>
    </CommonMainLayout>
  )
}

export default ShopPage
