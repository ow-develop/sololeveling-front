import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const mediumProfileStyle = css`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  border: 2px solid var(--text-on-accent);
`
const smallProfileStyle = css`
  width: 48px;
  height: 48px;
  border-radius: 8px;
  border: 2px solid var(--text-on-accent);
`
const largeProfileStyle = css`
  width: 120px;
  height: 120px;
  border-radius: 16px;
  border: 4px solid var(--text-on-accent);
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${mediumProfileStyle}
  }
`

export const CommonProfileWrapper = styled.div<{ size: 'lg' | 'md' | 'sm' }>`
  ${Token.shadow.lg}
  transition: width 0.3s ease, height 0.3s ease;
  ${({ size }) => {
    switch (size) {
      case 'lg':
        return largeProfileStyle
      case 'md':
        return mediumProfileStyle
      case 'sm':
        return smallProfileStyle
    }
  }}
`

export const CommonProfileImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: inherit;
  object-fit: cover;
`
