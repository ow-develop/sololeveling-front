import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const SeasonLeaderboardTableWrapper = styled.div`
  width: 100%;
`

export const TableHeadField = styled.div<{ expand?: boolean }>`
  ${({ expand }) =>
    expand &&
    css`
      padding-right: 28px;
    `}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    display: none;
  }
`

export const TableHeaderRowUnit = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 16px;
  height: 46px;
  padding: 11px 16px;
  color: var(--text-default);
  ${Token.typography.subtitle_strong};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    gap: 8px;
  }
`

export const TableHeaderCellUnit = styled.div<{
  width?: number
  align?: 'flex-start' | 'flex-end' | 'center'
}>`
  display: flex;
  justify-content: ${({ align }) => align || 'flex-start'};
  align-items: center;
  gap: 6px;
  text-align: center;
  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          flex: 1;
        `};
`

export const TableBodyField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const TableCellUnit = styled.div<{
  width?: number
  align?: 'flex-start' | 'flex-end' | 'center'
}>`
  display: flex;
  justify-content: ${({ align }) => align || 'flex-start'};
  align-items: center;
  gap: 6px;
  color: var(--text-strong);
  ${Token.typography.body_stronger};

  ${({ width }) =>
    width
      ? css`
          width: ${width}px;
        `
      : css`
          flex: 1;
        `};

  > * {
    flex: 1;
  }
`

export const ExpandValueBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  padding: 16px 36px 16px 136px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    padding: 16px 28px 16px 128px;
  }
`

export const ExpandValueUnit = styled.p`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-default);
  ${Token.typography.body_stronger};

  span {
    color: var(--text-weak);
    ${Token.typography.body_strong};
  }
`

export const AccordionBox = styled.div<{ isExpand?: boolean }>`
  display: flex;
  justify-content: space-between;
  gap: 8px;

  svg {
    transform: rotate(${({ isExpand }) => (isExpand ? '180deg' : '0')});
    transition: transform 0.3s ease;
  }

  ${Token.typography.body_stronger};
`
