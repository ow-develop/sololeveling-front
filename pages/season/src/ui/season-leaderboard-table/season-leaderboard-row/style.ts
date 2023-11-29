import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const SeasonLeaderboardRowWrpaper = styled.div<{ highlight?: boolean }>`
  padding: 16px;
  border-radius: 8px;
  background: var(--surface-default);

  ${({ highlight }) =>
    highlight &&
    css`
      background: var(--status-neutral-weak);
    `}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    padding: 16px;
  }
`

export const CellField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  height: 48px;
  ${Token.typography.body_stronger}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    gap: 8px;
  }
`
