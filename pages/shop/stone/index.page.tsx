import Link from 'next/link'
import { useRouter } from 'next/router'
import PreviousButton from '../../../src/common/previous-button'
import useShopListQuery from '../src/hooks/useShopListQuery'

import AsyncBoundary from '~/common/async-boundary'
import { InternalPath } from '~/constants/route'
import { SectionWrapper } from '~/layouts/section-layout/style'
import ShopDetailSkeleton from '../shop-detail-skeleton'
import { CommonMainLayout } from '~/layouts/style'
import { useEffect } from 'react'
import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'
import { ShopDetailsCard } from '../src/ui/shop-details/shop-details-card'
import useShopTokenBalanceQuery from '../src/hooks/useShopTokenBalanceQuery'

const ItemDetailsInformation = () => {
  const { data: maticBalance } = useMaticBalanceQuery()
  const router = useRouter()
  const { stoneBalance } = useShopTokenBalanceQuery()
  const { data: itemList } = useShopListQuery()
  const data =
    itemList.result && itemList.result.find((data) => data.rank === null)

  useEffect(() => {
    if (!data) {
      router.push(InternalPath.SHOP)
    }
  }, [])

  return (
    <CommonMainLayout>
      <SectionWrapper>
        <Link href={InternalPath.SHOP}>
          <a>
            <PreviousButton />
          </a>
        </Link>

        <ShopDetailsCard
          {...data}
          maticBalance={maticBalance?.MATIC}
          balance={stoneBalance}
          type={'stone'}
        />
      </SectionWrapper>
    </CommonMainLayout>
  )
}

const ItemDetailsPage = () => {
  return (
    <AsyncBoundary loadingComponent={<ShopDetailSkeleton />}>
      <ItemDetailsInformation />
    </AsyncBoundary>
  )
}

export default ItemDetailsPage
