import { Token } from '@ow-develop/ow-design-system'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { Breakpoint, ZIndex } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'

const DELAY = 0.2
const MAX_HEIGHT_M = 500
const MAX_HEIGHT_S = 320

export const GateSlotWrapper = styled(motion.div)<{ disabled?: boolean }>`
  position: relative;
  display: flex;
  gap: 16px;
  width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;


  ${noneDraggable}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
}
//
// ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
//   grid-template-columns: repeat(2, minmax(100px, 1fr));
//   grid-template-rows: repeat(2, max(${MAX_HEIGHT_M}px));
// }
//
// ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
//   grid-template-rows: repeat(2, max(${MAX_HEIGHT_S}px));
// }
`

export const SlotWrapper = styled(motion.div)<{ $select?: boolean }>`
  flex: 1;
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: ${({ $select }) => ($select ? 1 : 0)};
  //width: 100%;
  height: 100%;
  max-height: 576px;
  aspect-ratio: 1 / 2;
  gap: 24px;
  padding: 16px;
  cursor: default;
  border-radius: 8px;
  background: var(--surface-default);
  ${Token.shadow.lg};
  ${noneDraggable};

  button {
    color: var(--text-on-accent);
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    max-height: ${MAX_HEIGHT_M}px;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    max-height: ${MAX_HEIGHT_S}px;
  }
`

export const GateSlotItemWrapper = styled(motion.div)``

export const ReadySlotWrapper = styled(SlotWrapper)`
  color: var(--icon-on-accent);
  height: 600px;
`

export const Background = styled(motion.img)`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ZIndex.BACKGROUND};
  width: 776px;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 8px;
  display: block;
  vertical-align: middle;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
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
