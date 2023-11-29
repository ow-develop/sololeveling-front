import { Button, Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint, ZIndex } from '~/constants/style'

export const SlideWrapper = styled.div<{ height: number }>`
  position: relative;
  width: 100%;
  height: ${({ height }) => height}px;
  display: flex;
  justify-content: center;
  touch-action: pan-y;
`
export const SlideField = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`
export const CenterField = styled.div<{ hasItemImg: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  max-width: 1200px;
  z-index: ${ZIndex.BACKGROUND + 4};
  flex-direction: row;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    flex-direction: column;
    justify-content: ${({ hasItemImg }) =>
      !hasItemImg ? 'flex-end' : 'center'};
    max-width: 768px;
  }
`
export const ContentBox = styled.div<{ hasItemImg: boolean }>`
  display: flex;
  width: 50%;
  height: 100%;

  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    padding: ${({ hasItemImg }) => hasItemImg && '0 64px'};
    justify-content: ${({ hasItemImg }) =>
      !hasItemImg ? 'flex-end' : 'center'};
    height: 50%;
  }
`
export const ContentInnerBox = styled.div<{ hasItemImg: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  padding: 24px;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    align-items: center;
    padding:${({ hasItemImg }) => (!hasItemImg ? '24px 24px 92px 24px' : 0)};
  }
  
  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    gap: 8px;
    padding:${({ hasItemImg }) => (!hasItemImg ? '16px 16px 84px 16px' : 0)};
  }
 
  }
`
export const ItemImgBox = styled.div`
  width: 50%;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    height: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    display: flex;
    align-items: center;
  }
`
export const ItemImg = styled.img`
  background-size: cover;
  height: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    background-size: contain;
  }
`
export const Label = styled.div`
  display: flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: flex-start;
  gap: 10px;
  border-radius: 8px;
  background: var(--white-10, rgba(255, 255, 255, 0.1));
  color: var(--text-on-accent);
  ${Token.typography.subtitle}
`
export const MainTitle = styled.div`
  color: var(--text-on-accent);
  ${Token.typography.display_4}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.headline_strong}
    text-align: center;
  }
`
export const SubTitle = styled.div`
  color: var(--white-60);
  ${Token.typography.subtitle}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.body_strong}
    text-align: center;
  }
`
export const ButtonBox = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  align-self: stretch;
  margin-top: 8px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
    align-self: stretch;
  }
`
export const ButtonUnit = styled(Button)`
  width: 240px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
  }
`
export const BottomGradient = styled.div<{ isDark: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 280px;
  z-index: ${ZIndex.BACKGROUND + 2};

  ${({ isDark }) =>
    isDark
      ? css`
          background: linear-gradient(
            180deg,
            rgba(0, 5, 13, 0) 0%,
            #00050d 100%
          );
        `
      : css`
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0) 0%,
            #fff 100%
          );
        `}
`
export const LeftGradient = styled.div<{ isDark: boolean }>`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    rgba(0, 5, 13, 0.8) 0%,
    rgba(0, 5, 13, 0.2) 100%
  );
  z-index: ${ZIndex.BACKGROUND + 3};
`
export const Cover = styled.div`
  width: 100%;
  height: 100%;
  background: #000;
  opacity: 70%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${ZIndex.BACKGROUND + 2};
`
