import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const CommonLinkWrapper = styled.div`
  display: inline-flex;
  justify-content: center;
`

export const AnchorUnit = styled.a<{ color: string }>`
  position: relative;
  color: var(--${({ color }) => color});
  cursor: pointer;
  ${Token.typography.link_l}

  ::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: var(--${({ color }) => color});
  }
`
