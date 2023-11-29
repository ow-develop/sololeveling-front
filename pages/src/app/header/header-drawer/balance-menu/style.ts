import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { noneDraggable } from '~/styles/mixin'

export const BalanceField = styled.div`
  flex: 1;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  ${noneDraggable};
`

export const BalanceBox = styled.p`
  display: flex;
  align-items: center;
  gap: 8px;
`

export const BalanceMenuName = styled.span`
  ${Token.typography.body_stronger};
  color: var(--text-default);
`

export const BalanceMenuValue = styled.span`
  ${Token.typography.body_stronger};
  color: var(--text-strong);
`

export const LanguageBox = styled.div<{ isActive?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-default);
  ${({ isActive }) =>
    isActive
      ? css`
          ${Token.typography.subtitle_strong}
        `
      : css`
          ${Token.typography.subtitle}
        `}
`

export const IconBox = styled.div`
  display: flex;
  align-items: center;
  path {
    stroke: var(--icon-default);
  }
`
