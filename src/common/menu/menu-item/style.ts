import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

export const MenuItemWrapper = styled.div<{ active: boolean }>`
  width: 100%;
  padding: 8px 0;
  color: var(--text-default);
  transition: background-color 0.3s ease;

  ${Token.typography.subtitle};
  ${({ active }) =>
    active &&
    css`
      cursor: pointer;
    `}
`

export const MenuTriggerField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`

export const MenuTitleBox = styled.div<{ active?: boolean }>`
  ${Token.typography.body_strong};
  color: var(--text-default);

  ${({ active }) =>
    active &&
    css`
      ${Token.typography.body_stronger};
    `}
`

export const MenuEndBox = styled.div``
