import React from 'react'
import Skeleton from '~/common/skeleton'

import styled from 'styled-components'
import { DungeonGateWrapper, LastUpdateUnit } from '../../dungeon-gate/style'
import { GateSlotWrapper, SlotWrapper } from '../style'
import { SkeletonStyles } from '~/common/skeleton/style'

const GateSlotSkeleton = () => {
  return (
    <DungeonGateWrapper>
      <Skeleton>
        <GateSlotSkeletonRightItem />
        <GateSlotWrapper>
          <GateSlotSkeletonItem />
          <GateSlotSkeletonItem />
          <GateSlotSkeletonItem />
          <GateSlotSkeletonItem />
        </GateSlotWrapper>
      </Skeleton>
    </DungeonGateWrapper>
  )
}

export default GateSlotSkeleton

export const GateSlotSkeletonItem = styled(SlotWrapper)`
  ${SkeletonStyles};
`

export const GateSlotSkeletonRightItem = styled(LastUpdateUnit)`
  ${SkeletonStyles};
  margin-left: auto;
  width: 100px;
  height: 24px;
  border-radius: 8px;
`
