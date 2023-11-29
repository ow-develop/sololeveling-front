import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'

export const TitleUnit = styled.div`
  display: flex;
  color: var(--text-strong);
  text-align: center;
  align-items: center;
  height: 36px;
  ${Token.typography.subtitle_strong};
  ${noneDraggable};
`

export const AmountWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  gap: 8px;
`

export const AmountBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 16px;
  width: 100%;
  ${noneDraggable};
`

export const AmountInputUnit = styled.input<{
  disabled?: boolean
  error?: boolean
}>`
  width: 168px;
  height: 40px;
  padding: 6px 14px;
  border: 0;
  border-bottom: 2px solid var(--border-default);
  background-color: transparent;
  text-align: center;
  box-sizing: border-box;
  ${Token.typography.headline_strong};
  color: var(--text-strong);
  outline: 0;

  /* Chrome, Safari, Edge, Opera */
  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:focus {
    color: var(--text-strong);
    border-color: var(--border-strong);
  }

  ${({ disabled }) =>
    disabled &&
    css`
      ${noneDraggable};
      color: var(--text-weakest);
      border-color: var(--border-default);
    `}

  ${({ error }) =>
    error &&
    css`
      border-color: var(--status-danger-default);
    `}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 120px;
    ${Token.typography.title_strong};
  }
`

export const IncrementBox = styled.button<{
  align: 'left' | 'right'
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 44px;
  height: 44px;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  background-color: var(--button-default);
  ${Token.shadow.xs};
  cursor: pointer;

  ${({ align }) =>
    align === 'left'
      ? css`
          left: 0;
        `
      : css`
          right: 0;
        `};

  :disabled {
    cursor: default;
  }

  :hover {
    ${Token.shadow.lg};
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 40px;
    height: 40px;
  }
`

export const DescriptionBox = styled.div`
  width: 240px;
  text-align: right;
`
export const BalanceUnit = styled.div`
  ${Token.typography.subtitle};
  color: var(--text-strong);
`

export const WarningUnit = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 2px;
  ${Token.typography.body};
  color: var(--status-danger-default);
`
