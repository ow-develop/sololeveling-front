import React from 'react'
import Skeleton from '~/common/skeleton'
import {
  TableBodyField,
  TableHeaderCellUnit,
  TableHeaderRowUnit,
  TableHeadField
} from '../../ui/season-leaderboard-table/style'
import styled from 'styled-components'
import { SkeletonStyles } from '~/common/skeleton/style'
import { headersMap } from './data'
import useBreakpoint from '~/hooks/useBreakpoint'

const SeasonLeaderboardSkeleton = () => {
  const { belowSmallWidth, belowLargeWidth } = useBreakpoint()
  const getHeadersSize = () => {
    switch (true) {
      case belowSmallWidth:
        return 'small'
      case belowLargeWidth:
        return 'medium'
      default:
        return 'large'
    }
  }
  return (
    <Skeleton>
      <TableHeadField>
        <TableHeaderRowUnit>
          {headersMap[getHeadersSize()].map((item) => {
            return <Cell key={item.key} width={item.width} align={item.align} />
          })}
        </TableHeaderRowUnit>
      </TableHeadField>

      <TableBodyField>
        {Array(5)
          .fill(null)
          .map((_, index) => {
            return (
              <Skeleton.Item
                key={index}
                style={{ width: '100%', height: '84px' }}
              />
            )
          })}
      </TableBodyField>
    </Skeleton>
  )
}

export default SeasonLeaderboardSkeleton

const Cell = styled(TableHeaderCellUnit)`
  ${SkeletonStyles};
  height: 24px;
`
