import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'
import { Breakpoint, ZIndex } from '~/constants/style'

export const ModalLayoutWrapper = styled.div`
  overflow: hidden;
  z-index: ${ZIndex.MODAL};
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background: var(--overlay-dimmed);
`

export const DimmedLayerUnit = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}))`
  z-index: ${ZIndex.BACKGROUND};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`

export const ContentField = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}))<{ isHunterModal: boolean; background: string }>`
  display: flex;
  flex-direction: column;
  width: 1200px;
  height: 600px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: ${({ isHunterModal }) => (isHunterModal ? '100%' : '360px')};
    height: ${({ isHunterModal }) => (isHunterModal ? '100%' : 'auto')};
    border-radius: 0;
    overflow-y: auto;
  }
  ${({ background }) =>
    css`
      ${background}
    `}

  backdrop-filter: blur(4px);
  border-radius: 8px;
`
