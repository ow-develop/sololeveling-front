import Skeleton from '~/common/skeleton'
import {
  ContentBox,
  ItemCardWrapper,
  ThumbnailField
} from '../../../ui/hunter-inventory-card/style'
import React from 'react'

const HunterInventorySkeleton = () => {
  return (
    <ItemCardWrapper>
      <ThumbnailField>
        <Skeleton.Rect height={202} />
      </ThumbnailField>
      <ContentBox>
        <Skeleton.Rect
          height={20}
          style={{ marginBottom: 4 }}
          borderRadius={4}
        />
        <Skeleton.Rect height={20} borderRadius={4} />
      </ContentBox>
    </ItemCardWrapper>
  )
}

export default HunterInventorySkeleton
