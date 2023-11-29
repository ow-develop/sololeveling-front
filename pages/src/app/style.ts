import { Token } from '@ow-develop/ow-design-system'
import styled, { createGlobalStyle } from 'styled-components'

import { Breakpoint, FOOTER_HEIGHT, HEADER_HEIGHT } from '~/constants/style'
import { darkVariables, lightVariables } from '~/styles/variables'
import { ThemeType } from '~/types/common'

export const GlobalStyle = createGlobalStyle<{ mode: ThemeType }>`
  body {
    background: ${({ mode }) => mode === 'dark' && '#00050d'}
`

export const ThemeContainer = styled.div<{ mode: ThemeType }>`
  ${({ mode }) => (mode === 'light' ? lightVariables : darkVariables)};

  background: var(--surface-background);

  .Toastify__toast-container {
    width: 100%;
    color: var(--text-default);
    ${Token.typography.body}
  }

  .Toastify__toast-container svg {
    fill: var(--icon-weak);
  }
`

export const AppWrapper = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Main = styled.main`
  position: relative;
  z-index: 3;
  display: flex;
  width: 100%;
  justify-content: center;
  min-height: ${`calc(100dvh - ${HEADER_HEIGHT + FOOTER_HEIGHT}px);`};
`

export const SideImageBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 0;
  right: 0;
  z-index: 1;
  height: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.XL)} {
    display: none;
  }
`

export const BottomImgBox = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 2;
  line-height: 0;
  font-size: 0;

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    > img {
      height: 300px;
    }
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    > img {
      height: 200px;
    }
  }
`
