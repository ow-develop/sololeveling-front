import { ReactNode } from 'react'
import styled from 'styled-components'

import { useDashboardContext } from '../context'

export interface Props {
  children?: ReactNode
}

const DashboardItem = ({ children }: Props) => {
  const {
    gap: { column },
    grid
  } = useDashboardContext()

  return (
    <DashboardItemWrapper column={column} grid={grid}>
      {children}
    </DashboardItemWrapper>
  )
}

export default DashboardItem

const DashboardItemWrapper = styled.div<{ column: number; grid: number }>`
  display: flex;
  justify-content: space-between;
  padding: 16px;
  color: var(--text-strong);
  border-radius: 8px;
  border: 1px solid var(--border-default);

  :nth-child(odd):last-child {
    grid-column: span 2;
  }
`
