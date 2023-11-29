import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { noneDraggable } from '~/styles/mixin'

export const ImageInputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 120px;
  height: 120px;
  border-radius: 100%;
  overflow: hidden;

  ${Token.shadow.md};
`

export const HoverActionUnit = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  background-color: rgba(25, 25, 25, 0.2);
  cursor: pointer;
  transition: opacity 0.1s ease;
  z-index: 1;

  ${noneDraggable};

  :hover {
    opacity: 1;
    visibility: visible;
  }
`
