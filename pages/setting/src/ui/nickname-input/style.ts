import { Input, Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Props } from './index'

export const InputWrapper = styled.div<{ width: Props['width'] }>`
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: ${({ width }) => (width === 'fill' ? '100%;' : 'fit-content')};
`
export const InputField = styled.div<{
  width: Props['width']
  fixedWidth: Props['fixedWidth']
}>`
  display: flex;
  align-items: center;
  padding: 10px 14px;
  gap: 8px;
  width: ${({ width, fixedWidth }) =>
    width === 'fixed' ? `${fixedWidth}px` : '100%'};
  border-bottom: 2px solid var(--border-default, #4c5561);
`

export const InputUnit = styled.input`
  width: 100%;
  border: none;
  color: var(--text-weak);
  background-color: transparent;
  transition: background-color 0.3s ease;
  ${Token.typography.textfield};

  :focus {
    outline: none;
  }

  ::placeholder {
    color: var(--text-weakest);
  }

  :disabled {
    background-color: var(--status-neutral-weak);
  }
`

export const HelperTextField = styled.div<{ isErrorStatus: boolean }>`
  display: flex;
  align-items: center;
  ${Token.typography.body};
  gap: 16px;
  color: ${({ isErrorStatus }) =>
    isErrorStatus
      ? 'var(--status-danger-default)'
      : 'var(--status-success-default)'};
`
