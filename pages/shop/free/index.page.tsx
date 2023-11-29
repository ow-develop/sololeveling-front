import Link from 'next/link'
import { useRouter } from 'next/router'

import useGateKeyQuery from '../../dungeon/src/hooks/useGateKeyQuery'
import PreviousButton from '../../../src/common/previous-button'
import useShopListQuery from '../src/hooks/useShopListQuery'

import AsyncBoundary from '~/common/async-boundary'
import { InternalPath } from '~/constants/route'
import { SectionWrapper } from '~/layouts/section-layout/style'
import ShopDetailSkeleton from '../shop-detail-skeleton'
import { CommonMainLayout } from '~/layouts/style'
import { useEffect } from 'react'
import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'
import { FreeDetailsCard } from '../src/ui/shop-details/free-details-card'

const ItemDetailsInformation = () => {
  const { data: maticBalance } = useMaticBalanceQuery()
  const { keyBalanceByRank } = useGateKeyQuery()
  const router = useRouter()
  const { data: itemList } = useShopListQuery()
  const data =
    itemList.result && itemList.result.find((data) => data.rank === 'E')

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

        <FreeDetailsCard
          {...data}
          keyRank={'E'}
          maticBalance={maticBalance?.MATIC}
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
