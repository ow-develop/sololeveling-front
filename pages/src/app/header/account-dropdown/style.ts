import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'
import { noneDraggable } from '~/styles/mixin'

export const AccountDropdownContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px;
  gap: 24px;
`
export const NavMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  ${noneDraggable};
`

export const NavMenuItem = styled.div`
  width: 100%;
  padding: 4px 0;
  cursor: pointer;
`

export const NavMenuText = styled.p`
  ${Token.typography.body_stronger};
  color: var(--text-strong);
`

export const BalanceWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`

export const BalanceItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 0;
`

export const BalanceName = styled.div`
  ${Token.typography.body};
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-strong);
`

export const BalanceValue = styled.div`
  ${Token.typography.body_stronger};
  color: var(--text-strong);
`

const Styled = {
  Content: AccountDropdownContent,
  NavField: NavMenuWrapper,
  NavItem: NavMenuItem
}

export default Styled
