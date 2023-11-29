import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'
import { Breakpoint } from '~/constants/style'
import { ellipsis } from '~/styles/mixin'

export const InventoryFilterWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
  }
`
export const FilterField = styled.div`
  width: 282px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
  }
`
export const FilterTitle = styled.div`
  display: flex;
  padding: 10px 0;
  align-items: flex-start;
  align-self: stretch;
  color: var(--text-strong);
  ${Token.typography.subtitle_strong};
`
export const CheckUnit = styled.div<{ disabled: boolean }>`
  width: 282px;
  display: flex;
  justify-content: space-between;
  padding: 10px 0 10px 0;
  color: var(--text-strong);
  ${ellipsis};
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
      cursor: not-allowed;
    `}
`
export const CountItemUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.body_stronger};
`
export const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
`
