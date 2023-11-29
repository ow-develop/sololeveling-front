import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'

export const LevelingInputCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  width: 100%;
  height: 100%;
  max-width: 288px;
  min-height: 404px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    max-width: 180px;
    min-height: 0;
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

export const CardContentField = styled.div<{ disabled?: boolean }>`
  ${noneDraggable};
  ${ContentBreakpoint};

  display: flex;
  position: relative;
  width: 100%;
  height: 100%;
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
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
