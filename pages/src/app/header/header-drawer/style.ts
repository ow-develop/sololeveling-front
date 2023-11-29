import { motion } from 'framer-motion'
import styled from 'styled-components'
import { hideScroll } from '~/styles/mixin'
import { HEADER_HEIGHT } from '~/constants/style'

export const HeaderDrawerWrapper = styled(motion.div).attrs(() => ({
  initial: 'closed',
  animate: 'open',
  exit: 'closed',
  transition: { type: 'spring', damping: 70, duration: 0.05, stiffness: 500 },
  variants: {
    open: { opacity: 1, translateX: '0' },
    closed: {
      opacity: 0,
      translateX: '70%',
      overflowY: 'scroll'
    }
  }
}))`
  overflow-y: scroll;
  display: flex;
  position: absolute;
  flex-direction: column;
  gap: 24px;
  padding: 16px;
  width: 100%;
  height: calc(100dvh - ${HEADER_HEIGHT}px);
  background-color: var(--surface-background);
  ${hideScroll}

  > button {
    width: 100%;
  }
`

export const HeaderButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  button {
    width: 100%;
  }
`
