import React from 'react'
import Skeleton from '~/common/skeleton'
import { ShopListWrapper } from '../../features/shop-list/style'

const ShopListSkeleton = () => {
  return (
    <Skeleton>
      <ShopListWrapper>
        {Array(6)
          .fill(null)
          .map((_, index) => {
            return <Skeleton.Rect key={index} height={190} />
          })}
      </ShopListWrapper>
    </Skeleton>
  )
}

export default ShopListSkeleton
