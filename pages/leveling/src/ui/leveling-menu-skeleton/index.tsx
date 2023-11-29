import React from 'react'
import Skeleton from '~/common/skeleton'
import { LevelingMenuWrapper } from '../../features/leveling-menu/style'

const LevelingMenuSkeleton = () => {
  return (
    <Skeleton>
      <LevelingMenuWrapper>
        {Array(4).map((_, index) => {
          return <Skeleton.Rect key={index} height={200} />
        })}
      </LevelingMenuWrapper>
    </Skeleton>
  )
}

export default LevelingMenuSkeleton
