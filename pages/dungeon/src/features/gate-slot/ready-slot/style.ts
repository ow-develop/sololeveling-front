import { motion } from 'framer-motion'
import styled from 'styled-components'

import { SlotWrapper } from '../style'

import { Breakpoint, ZIndex } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'

const DELAY = 0.2

export const ReadySlotWrapper = styled(SlotWrapper)`
  color: var(--icon-on-accent);
`

export const BackgroundBox = styled(motion.div)<{ disabled?: boolean }>`
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ZIndex.BACKGROUND};
  width: 100%;
  height: 100%;
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
  initial: { borderRadius: '8px' },
  transition: { delay: DELAY }
}))`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ZIndex.DEFAULT};
  height: 100%;
  max-height: none;
  background: var(--surface-default);
  ${noneDraggable};
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

export const ContentBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
`
