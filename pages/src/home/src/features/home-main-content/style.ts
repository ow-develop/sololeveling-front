import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint, ZIndex } from '~/constants/style'

export const HomeMainContentWrapper = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  max-width: 1200px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 24px;
  gap: 60px;

  ${({ theme }) => theme.breakpoints.up(Breakpoint.MINIMUM)} {
    padding: 0 16px;
  }
`
export const InfoField = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleUnit = styled.span`
  color: var(--text-default);
  ${Token.typography.title};
  text-align: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.subtitle}
  }
`
export const DescriptionBox = styled.div`
  display: flex;
  gap: 8px;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    display: block;
  }
`
export const DescriptionUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.display_4};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.headline_strong}
  }
`
export const ContentField = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  flex-direction: row;
  align-items: center;
  gap: 80px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    gap: 40px;
  }
`
export const ContentBox = styled.div<{ isEven: boolean; inView: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  width: calc(50% - 40px);
  margin-top: ${({ isEven }) => (isEven ? '300px' : '-150px')};
  transition: 0.8s all ease-in-out;
  top: ${({ inView }) => (inView ? '0px' : '40px')};
  opacity: ${({ inView }) => (inView ? 1 : 0)};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    width: calc(50% - 20px);
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    margin: 80px 80px 0;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 100%;
    margin: 0;
  }
`
export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`
export const ImageUnit = styled.img`
  object-fit: contain;
  max-width: 100%;
  max-height: 370px;
`
export const ItemTitleUnit = styled.span`
  color: var(--text-strong);
  ${Token.typography.title_strong}
  margin-bottom: 16px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.subtitle_strong}
  }
`
export const ItemDescriptionUnit = styled.span`
  color: var(--text-default);
  ${Token.typography.subtitle}
  margin-bottom: 8px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    text-align: center;
    ${Token.typography.body}
  }
`
export const ItemLinkBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
`
export const ItemLinkUnit = styled.span`
  color: var(--text-default);
  ${Token.typography.subtitle_strong};
  margin-right: 4px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    text-align: center;
    ${Token.typography.body_stronger};
  }
`
export const BackgroundField = styled.div`
  position: absolute;
  z-index: ${ZIndex.BACKGROUND};
`
export const BackgroundUnit = styled.img`
  max-width: 100%;
  height: auto;
`
