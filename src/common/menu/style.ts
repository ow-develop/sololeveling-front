import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { noneDraggable } from '~/styles/mixin'

export const MenuWrapper = styled.div`
  width: 100%;
  ${noneDraggable};
`

export const MenuTitleField = styled.p`
  ${Token.typography.body_stronger};
  color: var(--text-strong);
  padding: 12px 0;
`
