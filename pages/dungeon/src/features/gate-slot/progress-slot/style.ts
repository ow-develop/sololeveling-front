import { Token } from '@ow-develop/ow-design-system'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { SlotWrapper } from '../style'

import { Breakpoint, ZIndex } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'

const DELAY = 0.2
export const ProgressSlotWrapper = styled(SlotWrapper)``

export const BackgroundBox = styled(motion.div).attrs(() => ({
  exit: { background: 'none' }
}))<{ disabled?: boolean }>`
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ZIndex.BACKGROUND};
  width: 100%;
  height: 100%;
  background: #2b2b2b;
  border-radius: 8px;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 46.88%, #000 100%);
  }
`

export const SlotItemExpandedWrapper = styled(SlotWrapper).attrs(() => ({
  initial: { borderRadius: '8px', layout: true },
  transition: { delay: DELAY }
}))`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ZIndex.DEFAULT};
  width: 100%;
  height: 100%;
  max-height: none;

  ${noneDraggable}
`

export const CloseBox = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: 0.4 }
}))`
  position: absolute;
  top: 24px;
  right: 24px;
  z-index: ${ZIndex.DEFAULT};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 36px;
  height: 36px;
  background: none;
  transition: background 0.3s ease;
  border-radius: 8px;
  cursor: pointer;

  :hover {
    background: rgba(0, 0, 0, 0.4);
  }
`

const coverStyle = {
  disable: css`
    background: linear-gradient(360deg, #000b1a 0%, rgba(0, 11, 26, 0) 51.35%),
      #e2e8f0;
    opacity: 0.6;
  `,
  enable: css`
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 46.88%, #000 100%);
  `
}

export const BackgroundUnit = styled(motion.img).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: DELAY }
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const ContentField = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    height: 100%;
  }
`

export const SlotItemTextWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const TitleUnit = styled.p`
  color: var(--text-on-accent);
  ${Token.typography.headline_strong};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.title_strong};
  }
`

export const TextUnit = styled.p`
  padding: 0 22%;
  word-break: keep-all;
  text-align: center;
  color: var(--text-on-accent);
  ${Token.typography.button_l};
`

export const SubTextUnit = styled.p`
  color: var(--white-70);
  ${Token.typography.subtitle};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.body_strong};
  }
`

export const ContentBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`
