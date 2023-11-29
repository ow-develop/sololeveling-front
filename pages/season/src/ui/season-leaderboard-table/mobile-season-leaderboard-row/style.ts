import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const MobileSeasonLeaderboardRowWrpaper = styled.div<{
  highlight?: boolean
}>`
  padding: 16px;
  border-radius: 8px;
  background: var(--surface-default);

  ${({ highlight }) =>
    highlight &&
    css`
      background: var(--status-neutral-weak);
    `}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
  }
`

export const CellField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  ${Token.typography.body_stronger}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    gap: 8px;
  }
`

export const ExpandValueBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 8px 16px 0 128px;
`

export const ExpandValueUnit = styled.p`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
  color: var(--text-default);
  ${Token.typography.body_stronger}

  span {
    color: var(--text-weak);
    ${Token.typography.body_strong}
  }
`

export const AccordionField = styled.div<{ isExpand?: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 8px;
  padding: 8px 0 8px 144px;
  color: var(--text-strong);

  svg {
    transform: rotate(${({ isExpand }) => (isExpand ? '180deg' : '0')});
    transition: transform 0.3s ease;
  }

  ${Token.typography.body_stronger}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    padding: 8px 0 0 128px;
  }
`
