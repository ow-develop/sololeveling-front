import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

export const HeaderNavigatorWrapper = styled.div`
  display: flex;
  gap: 32px;
`
export const NavLinkUnit = styled.span<{ selected: boolean }>`
  display: flex;
  align-items: center;
  height: 100%;
  color: var(--text-strong);
  cursor: pointer;

  ${Token.typography.body_strong};
  ${({ selected }) =>
    selected &&
    css`
      color: var(--text-strong);
      ${Token.typography.body_stronger};
    `}
`
