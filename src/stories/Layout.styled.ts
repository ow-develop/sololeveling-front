import styled from 'styled-components'
import { Breakpoint } from '~/constants/style'

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
  min-height: 100dvh;
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
