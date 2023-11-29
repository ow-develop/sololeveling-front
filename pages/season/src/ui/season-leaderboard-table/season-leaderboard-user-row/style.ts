import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const NeedLoginField = styled.div<{ dark: boolean }>`
  display: flex;
  align-items: center;
  background: ${({ dark }) =>
    dark ? 'var(--surface-floated)' : 'var(--status-info-weak)'};
  height: 76px;
  gap: 16px;
  padding: 16px;
  border-radius: 8px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    height: auto;
    flex-direction: column;
  }
`

export const RankUnit = styled.span<{ dark: boolean }>`
  text-align: center;
  ${Token.typography.subtitle_strong}
  ${({ dark }) =>
    dark
      ? css``
      : css`
          background: linear-gradient(
            180deg,
            var(--status-info-default) 0%,
            rgba(0, 54, 132, 0) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        `}
`
export const DescriptionUnit = styled.span`
  color: var(--text-default);
  ${Token.typography.body_stronger}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    text-align: center;
  }
`
