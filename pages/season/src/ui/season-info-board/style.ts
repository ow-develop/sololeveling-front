import { OptionalStyleRecord, Token } from '@ow-develop/ow-design-system'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { SeasonInfoBoardProps } from './index'

import { Breakpoint, ZIndex } from '~/constants/style'

export const SeasonInfoBoardWrapper = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  height: 212px;
  border-radius: 8px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    height: 210px;
    padding: 16px;
    justify-content: space-between;
  }
`

export const TitleField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: var(--text-on-accent);
  ${Token.typography.title_strong};
`

export const DescriptionBox = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${Token.typography.body_strong}
  color: var(--text-on-accent);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    align-items: flex-start;
    flex-direction: column;
  }
`

const GradientStyle: OptionalStyleRecord<SeasonInfoBoardProps['banner']> = {
  sky: css`
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0) 61.25%
      ),
      #335e9d;
  `,
  navy: css`
    background: linear-gradient(
        180deg,
        rgba(255, 255, 255, 0.4) 0%,
        rgba(255, 255, 255, 0) 61.25%
      ),
      #00265e;
  `,
  default: css`
    background: linear-gradient(
      180deg,
      rgba(255, 255, 255, 0.2) 0%,
      rgba(255, 255, 255, 0) 61.25%
    );
  `
}

export const BackgroundBox = styled.div<{
  banner?: SeasonInfoBoardProps['banner']
  mobileBanner?: SeasonInfoBoardProps['mobileBanner']
}>`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: ${ZIndex.BACKGROUND};

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    ${({ banner }) =>
      GradientStyle.hasOwnProperty(banner)
        ? GradientStyle[banner]
        : GradientStyle.default}
  }
`

export const BarField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 24px 0 50px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    padding: 0;
  }
`

export const BarBox = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  height: 20px;
  background: rgba(0, 0, 0, 0.2);
`

export const ActiveBarBox = styled(motion.div).attrs(() => ({
  transition: { duration: 3000 }
}))<{ width: number }>`
  position: absolute;
  width: ${({ width }) => width}%;
  height: 16px;
  background: var(
    ${({ width }) => (width === 100 ? '--white-50' : '--white-100')}
  );
`

export const ActiveIconBox = styled.div`
  position: absolute;
  top: -24px;
  right: 0;
  transform: translateX(50%);
`

export const LeftBarBox = styled.div`
  position: relative;
  flex: 1;
  height: 16px;
  background: var(--white-50);
`
export const RightBarBox = styled.div`
  position: relative;
  width: 101px;
  height: 16px;
  background: var(--white-20);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 90px;
  }
`
export const TextField = styled.div`
  display: flex;

  > div:first-child {
    flex: 1;
  }
  > div:last-child {
    width: 101px;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    > div:last-child {
      width: 90px;
    }
  }
`

export const TextBox = styled.div<{ disabled: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`

export const TextUnit = styled.div`
  ${Token.typography.subtitle_strong}
  color: var(--text-on-accent);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.body_stronger}
  }
`

export const SmallTextUnit = styled.span`
  ${Token.typography.body}
  color: var(--text-on-accent);
`
