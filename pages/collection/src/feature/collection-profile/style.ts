import styled from 'styled-components'
import { Breakpoint, HEADER_HEIGHT, ZIndex } from '~/constants/style'
import { Token } from '@ow-develop/ow-design-system'

export const ProfileField = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    flex-direction: column-reverse;
  }
`

export const ProfileInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 88px;
  margin-bottom: 40px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    margin-top: 98px;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    margin-top: 112px;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    margin-top: 165px;
    align-items: center;
  }
`

export const NameUnit = styled.div`
  margin-bottom: 4px;
  color: var(--text-strong);
  ${Token.typography.display_4};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.title_strong};
  }
`

export const ClipBoard = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  margin-bottom: 20px;

  color: var(--text-default);
  ${Token.typography.subtitle};
`

export const BgCollectionGlow = styled.img`
  position: absolute;
  width: 100%;
  height: 176px;
  top: -${HEADER_HEIGHT}px;
  left: 0;
  object-fit: cover;
  z-index: ${ZIndex.BACKGROUND};
`

export const ProfileImgBox = styled.div`
  position: absolute;
  z-index: 1;
  left: calc(50% - 100px);
  top: 10px;
  width: 200px;
  height: 200px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 150px;
    height: 150px;
    left: calc(50% - 75px);
  }
`

export const ProfileFrame = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`

export const ProfileImg = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
`
