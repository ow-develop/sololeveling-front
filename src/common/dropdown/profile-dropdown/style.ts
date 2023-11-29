import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { noneDraggable } from '~/styles/mixin'

export const CommonDropdownWrapper = styled.div`
  position: relative;
  > ul {
    display: flex;
    flex-direction: column;
    gap: 8px;

    ${Token.shadow.lg};
    padding: 8px;
  }

  ${noneDraggable}
`

export const DropdownTriggerUnit = styled.div`
  display: flex;
  cursor: pointer;
`
