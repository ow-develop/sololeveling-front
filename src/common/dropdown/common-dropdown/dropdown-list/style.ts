import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const DropdownListWrapper = styled.ul<{
  isOpen: boolean
  width?: string
}>`
  z-index: 10;
  overflow: hidden;
  position: absolute;
  right: 0;
  width: ${({ width }) => width || '100%'};
  top: ${({ isOpen }) => (isOpen ? 'calc(100% + 8px)' : 'calc(100% - 8px)')};
  background: #fff;
  border-radius: 8px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility, opacity, 0.3s ease;
  ${Token.shadow.lg}
  ${({ isOpen }) => !isOpen && 'pointer-events: none'};
`
