import Link from 'next/link'
import { useRouter } from 'next/router'
import PreviousButton from '../../../src/common/previous-button'
import useShopListQuery from '../src/hooks/useShopListQuery'
import { ShopDetailsCard } from '../src/ui/shop-details/shop-details-card'

import AsyncBoundary from '~/common/async-boundary'
import { InternalPath } from '~/constants/route'
import { SectionWrapper } from '~/layouts/section-layout/style'
import { HunterRankType } from '~/types/common'
import ShopDetailSkeleton from '../shop-detail-skeleton'
import { CommonMainLayout } from '~/layouts/style'
import { useEffect } from 'react'
import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'
import useShopTokenBalanceQuery from '../src/hooks/useShopTokenBalanceQuery'

const ItemDetailsInformation = () => {
  const { data: maticBalance } = useMaticBalanceQuery()
  const { gateKeyBalance } = useShopTokenBalanceQuery()
  const router = useRouter()
  const { rank } = router.query
  const { data: itemList } = useShopListQuery()
  const data =
    itemList.result && itemList.result.find((data) => data.rank === rank)

  const findRankValue = data?.rank as HunterRankType
  const keyBalance = gateKeyBalance(findRankValue)

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
          keyRank={findRankValue}
          maticBalance={maticBalance?.MATIC}
          balance={keyBalance}
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
