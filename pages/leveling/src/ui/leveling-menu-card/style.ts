import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'
import { CardStyle } from '~/styles/global-style'
import { noneDraggable } from '~/styles/mixin'

export const LevelingMenuCardWrapper = styled.div<{ disabled: boolean }>`
  ${CardStyle};
  display: flex;
  position: relative;
  align-items: center;
  overflow: hidden;
  height: 200px;
  color: var(--text-on-accent);
  background: linear-gradient(
    270deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.05) 100%
  );
  cursor: pointer;
  ${noneDraggable};

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.4;
      cursor: default;
      pointer-events: none;
    `}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    height: 160px;
  }
`

export const CardImageBox = styled.div<{ padding: number }>`
  display: flex;
  position: absolute;
  justify-content: center;
  align-items: center;
  right: 0;
  width: 50%;
  height: 100%;

  ${({ padding }) =>
    padding &&
    css`
      padding: ${padding}px;
    `}
`

export const CardContentField = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  padding: 24px;
  gap: 8px;
  z-index: 1;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    padding: 16px;
  }
`

export const CardTitleUnit = styled.div`
  ${noneDraggable};
  ${Token.typography.headline_strong};
  color: var(--text-strong);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.subtitle_strong};
  }
`

export const CardSubtitleUnit = styled.div`
  width: 50%;
  ${Token.typography.subtitle};
  color: var(--text-default);
  ${noneDraggable};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.body_strong};
  }
`
