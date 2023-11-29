import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const TabWrapper = styled.div<{
  isSelected: boolean
}>`
  width: 100%;
  display: flex;
  align-items: center;
  height: 52px;
  padding-left: 12px;
  ${Token.typography.title};
  color: var(--text-strong);
  background: ${({ isSelected }) => isSelected && 'var(--status-neutral-weak)'};
  &:hover {
    cursor: pointer;
  }
  ${({ isSelected }) =>
    isSelected &&
    css`
      ${Token.typography.title_strong};
      background: var(--surface-default);
      border-radius: 8px;
    `}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: flex;
    justify-content: center;
    height: 46px;
    margin-bottom: 48px;
    padding-left: 0px;
    ${({ isSelected }) =>
      isSelected &&
      css`
        ${Token.typography.title_strong};
        border-bottom: 2px solid var(--icon-strong);
        background: transparent;
        border-radius: 0px;
      `}
  }
`
