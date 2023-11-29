import { StyleRecord } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Props } from '.'

import { CardStyle } from '~/styles/global-style'

const variantStyle: StyleRecord<Props['variant']> = {
  none: css``,
  card: css`
    ${CardStyle};
  `
}

export const FullImageWrapper = styled.div<{
  variant: Props['variant']
  size: Props['size']
}>`
  width: 100%;
  height: 100%;
  overflow: hidden;

  ${({ size }) =>
    size &&
    css`
      max-width: ${size}px;
      max-height: ${size}px;
    `};
  ${({ variant }) => variantStyle[variant]}
`

export const ImageUnit = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  isolation: isolate;
`
