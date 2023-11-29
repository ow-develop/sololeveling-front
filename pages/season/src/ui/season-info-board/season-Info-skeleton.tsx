import React from 'react'
import Skeleton from '~/common/skeleton'
import { SeasonInfoBoardWrapper } from './style'
import styled from 'styled-components'
import { SkeletonStyles } from '~/common/skeleton/style'

const SeasonInfoSkeleton = () => {
  return (
    <Skeleton>
      <Wrapper></Wrapper>
    </Skeleton>
  )
}

export default SeasonInfoSkeleton

const Wrapper = styled(SeasonInfoBoardWrapper)`
  ${SkeletonStyles}
`
