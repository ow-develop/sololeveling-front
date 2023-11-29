import styled, { css } from 'styled-components'
import { noneDraggable } from '~/styles/mixin'
import { Token } from '@ow-develop/ow-design-system'

export const NavMenuWrapper = styled.div`
  width: 100%;
  ${noneDraggable};
`

export const NavMenuItem = styled.div`
  width: 100%;
  padding: 12px 0;
  color: var(--text-default);
  transition: background-color 0.3s ease;
`

export const NavMenuText = styled.div<{ active?: boolean }>`
  ${Token.typography.body_strong};
  color: var(--text-default);

  ${({ active }) =>
    active &&
    css`
      ${Token.typography.body_stronger};
    `}
`
