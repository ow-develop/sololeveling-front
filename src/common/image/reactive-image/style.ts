import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { ReactiveImageProps } from './'

export const ReactiveImageBox = styled.div<{
  shadow: ReactiveImageProps['shadow']
  rounded: number
}>`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    box-shadow: ${({ shadow }) => Token.shadow[shadow]};
    border-radius: ${({ rounded }) => `${rounded}px`};
  }
`
