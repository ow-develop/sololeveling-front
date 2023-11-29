import React from 'react'
import Skeleton from '~/common/skeleton'
import { LevelingInventoryWrapper } from '../leveling-inventory/style'
import useBreakpoint from '~/hooks/useBreakpoint'

const LevelingInventorySkeleton = () => {
  const { belowLargeWidth } = useBreakpoint()

  return (
    <LevelingInventoryWrapper column={belowLargeWidth ? 1 : 2}>
      {Array(4)
        .fill(null)
        .map((_, index) => {
          return <Skeleton.Rect key={index} height={112} />
        })}
    </LevelingInventoryWrapper>
  )
}

export default LevelingInventorySkeleton
