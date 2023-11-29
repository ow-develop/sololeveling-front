import { Button, Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { ZIndex } from '~/constants/style'

export const SelectDropdownWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 44px;
`

export const TriggerField = styled.div`
  width: 100%;
`

export const TriggerButtonUnit = styled(Button)<{ disabled: boolean }>`
  width: 100%;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid var(--border-default);
  opacity: ${({ disabled }) => disabled && 0.4};
  padding: 10px 14px;
  > span {
    ${Token.typography.textfield}
    color: var(--text-strong);
  }
`

export const DropdownField = styled.ul<{
  isOpen: boolean
}>`
  overflow: hidden;
  position: absolute;
  z-index: ${ZIndex.DROPDOWN};
  right: 0;
  width: 100%;
  background: var(--surface-default);
  border-radius: 8px;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? 'visible' : 'hidden')};
  transition: visibility, opacity, 0.3s ease;
  ${Token.shadow.lg}
  ${({ isOpen }) => !isOpen && 'pointer-events: none'};
`
export const ExpandIconBox = styled.div<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  transform-origin: center;
  > div > svg {
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0')});
  }
`
