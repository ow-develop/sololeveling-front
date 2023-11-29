import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { noneDraggable } from '~/styles/mixin'

export const AccentBadgeWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px 20px;
  width: fit-content;
  border-radius: 16px;
  transition: background-color, color, 0.3s ease;
  background-color: var(--accent-button-default);
  color: var(--text-on-accent);

  ${noneDraggable};
  ${Token.shadow.md};
  ${Token.typography.body_strong};

  ${({ disabled }) =>
    disabled &&
    css`
      background-color: var(--accent-button-disabled);
    `}
`
