import React, { ReactNode, useMemo } from 'react'
import styled from 'styled-components'

import DashboardContext, { DashboardContextType } from './context'
import DashboardItem from './dashboard-item'

import DashboardInfo from '~/common/dashboard/dashboard-info'

export interface DashboardProps extends DashboardContextType {
  children?: ReactNode
}

const CommonDashboard = ({
  children,
  gap = {
    row: 8,
    column: 16
  },
  grid = 2,
  height = 'hug'
}: DashboardProps) => {
  const value = useMemo(
    () => ({
      gap,
      grid
    }),
    [gap, grid]
  )

  return (
    <DashboardContext.Provider value={value}>
      <CommonDashboardWrapper
        row={gap.row}
        column={gap.column}
        grid={grid}
        height={height}
      >
        {children}
      </CommonDashboardWrapper>
    </DashboardContext.Provider>
  )
}

export default Object.assign(CommonDashboard, {
  Item: DashboardItem,
  Info: DashboardInfo
})

const CommonDashboardWrapper = styled.div<{
  row: number
  column: number
  grid: number
  height: number | 'hug'
}>`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(${({ grid }) => grid}, 1fr);
  grid-auto-rows: ${({ height }) => (height !== 'hug' ? `${height}px` : `1fr`)};
  gap: ${({ row, column }) => `${row}px ${column}px`};
`
