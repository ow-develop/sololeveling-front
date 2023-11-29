import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'
import { CardStyle } from '~/styles/global-style'
import { noneDraggable } from '~/styles/mixin'

export const LevelingInputCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  max-width: 288px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    max-width: 180px;
  }
`

const ContentBreakpoint = css`
  max-width: 288px;
  max-height: 288px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 180px;
    height: 180px;
  }
`

export const CardContentField = styled.div<{
  disabled?: boolean
  shadowRank?: string
}>`
  ${noneDraggable};
  ${ContentBreakpoint};

  display: flex;
  position: relative;
  width: 100%;
  height: 100%;

  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(1);
      opacity: 0.5;
    `}

  video {
    width: 100%;
  }
`

export const CardActiveBox = styled.div`
  display: flex;
  overflow: hidden;
  opacity: 0.5;
`

export const UnselectUnit = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  border: 1px solid var(--border-default);
  border-radius: 8px;

  color: var(--text-weaker);
  word-break: keep-all;
  text-align: center;
  ${Token.typography.body_strong};
  ${ContentBreakpoint};
  ${noneDraggable};
`

export const UnselectButtonUnit = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  background: var(--surface-floated);
  border-radius: 8px;

  color: var(--status-info-strong);
  word-break: keep-all;
  text-align: center;
  ${Token.typography.body_strong};
  ${ContentBreakpoint};
  ${noneDraggable};
`

export const SelectActionUnit = styled.div<{ transparent?: boolean }>`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 16px;
  cursor: pointer;

  ${Token.typography.body_strong};
  color: var(--status-info-strong);
  text-align: center;
  word-break: keep-all;

  ${({ transparent }) =>
    transparent &&
    css`
      color: var(--status-info-strong);
    `}

  :hover {
    ${Token.shadow.lg};
  }
`

export const TitleUnit = styled.div`
  display: flex;
  color: var(--text-strong);
  text-align: center;
  align-items: center;
  height: 36px;
  ${Token.typography.subtitle_strong};
  ${noneDraggable};
`

export const AmountBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  ${noneDraggable};
`

export const AmountUnit = styled.div`
  display: flex;
  height: 44px;
  flex-direction: column;
  justify-content: center;
  color: var(--text-strong);
  ${Token.typography.headline_strong};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.title_strong};
  }
`

export const IncrementBox = styled.button<{
  align: 'left' | 'right'
}>`
  ${CardStyle};
  display: flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  top: 0;
  background-color: var(--surface-floated);
  border: 1px solid var(--border-default);
  border-radius: 50%;
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
    opacity: 0.6;
  }

  :hover {
    ${Token.shadow.lg};
  }
`

export const BalanceUnit = styled.div`
  height: 20px;
  color: var(--text-weaker);
  ${Token.typography.body};
`

export const TestUnit = styled.div``
