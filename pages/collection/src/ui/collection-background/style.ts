import styled from 'styled-components'
import { Breakpoint, ZIndex } from '~/constants/style'

export const CollectionBgWrapper = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
`

export const BgSky = styled.img`
  position: fixed;
  z-index: ${ZIndex.DEFAULT}
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  object-fit: cover;
`

export const BgRock = styled.img`
  position: fixed;
  z-index: ${ZIndex.DEFAULT + 1};
  width: 67%;
  left: -26%;
  bottom: -18px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.XL)} {
    width: 101%;
    left: -50.7%;
  }
`

export const BgCastle = styled.img`
  position: fixed;
  z-index: ${ZIndex.DEFAULT} + 1;
  width: 34.7%;
  right: -2%;
  bottom: -18px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.XL)} {
    width: 52%;
    right: -12.2%;
  }
`
