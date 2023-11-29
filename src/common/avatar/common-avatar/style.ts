import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { noneDraggable } from '~/styles/mixin'

export const CommonAvatarWrapper = styled.div<{
  size: number
  dense: boolean
  click: boolean
}>`
  display: block;
  overflow: hidden;
  position: relative;
  width: ${({ size }) => `${size}px`};
  height: ${({ size }) => `${size}px`};
  border-radius: 50%;
  border: ${({ dense }) => !dense && '4px solid var(--icon-on-accent)'};
  background-color: transparent;
  transition: width, height, box-shadow, 0.3s ease;
  ${Token.shadow.lg};
  ${noneDraggable};

  img {
    transform: scale(1.2);
  }

  ${({ click }) =>
    click &&
    css`
      cursor: pointer;
      :hover {
        transform: scale(1.02);
        ${Token.shadow.xl};
      }
    `}
`
