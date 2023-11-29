import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { noneDraggable } from '~/styles/mixin'

export const AccountProfileWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  cursor: pointer;
  ${noneDraggable};
`

export const ProfileInfoBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export const NameUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-strong);
`

export const HunterNameUnit = styled.div`
  text-overflow: ellipsis;
  overflow: hidden;
  max-width: 170px;
  ${Token.typography.body_stronger};
`

export const AddressUnit = styled.div`
  color: var(--text-weak);
  ${Token.typography.button_m};
`
