import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

const activeStyle = css`
  background-color: var(--button-hover);
`
export const SelectDropdownItemWrapper = styled.li<{
  checked?: boolean
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px 14px;
  height: 44px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  color: var(--text-strong);
  ${Token.typography.body_strong}

  ${({ checked }) => checked && activeStyle}

  :hover {
    ${activeStyle}
  }
`

export const DropTextBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`
