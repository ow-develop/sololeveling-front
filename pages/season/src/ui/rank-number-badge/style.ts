import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

export const RankNumberBadgeWrapper = styled.div<{ dark: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  ${Token.typography.subtitle_strong};

  ${({ dark }) =>
    dark
      ? css`
          background: none;
          color: var(--text-default);
        `
      : css`
          background: linear-gradient(
            180deg,
            #003684 0%,
            rgba(0, 54, 132, 0) 100%
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          text-fill-color: transparent;
        `}
`
