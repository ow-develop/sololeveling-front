import { Button, Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { noneDraggable } from '~/styles/mixin'

export const CommonDropdownWrapper = styled.div`
  position: relative;

  > ul {
    display: flex;
    flex-direction: column;
    left: 50%;
    transform: translateX(-50%);
  }

  ${noneDraggable}
`

export const TriggerButtonUnit = styled(Button)`
  padding-left: 0;
  padding-right: 0;
`

export const DropdownItemUnit = styled.div`
  padding: 14px;
  ${Token.typography.textfield}
  color: var(--text-strong);
  transition: background-color 0.3s ease;
  cursor: pointer;

  :hover {
    background-color: var(--button-hover);
  }
`

export const ExpandIconBox = styled.div<{ isOpen?: boolean }>`
  display: flex;
  align-items: center;
  transform-origin: center;

  > svg {
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0')});
  }
`
