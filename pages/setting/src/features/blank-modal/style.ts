import { motion } from 'framer-motion'
import styled from 'styled-components'

import { ZIndex } from '~/constants/style'

export const BlankModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: fixed;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: ${ZIndex.MODAL};
`

export const DimmedLayerUnit = styled(motion.div).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 }
}))`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: ${ZIndex.BACKGROUND};
  background-color: var(--overlay-dimmed);
  background: var(--surface-default);
`

export const CloseBox = styled.div`
  width: 100%;
`
