import { Token } from '@ow-develop/ow-design-system'
import { motion } from 'framer-motion'
import styled from 'styled-components'

import { insideScroll } from '~/styles/mixin'
import { Breakpoint, INNER_HEIGHT } from '~/constants/style'

export const ModalContentField = styled(motion.div).attrs(() => ({
  initial: 'closed',
  animate: 'open',
  exit: 'closed',
  variants: {
    closed: { translateY: '100%' },
    open: { translateY: 0 }
  },
  transition: { duration: 0.3 }
}))`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
  padding: 16px;
  position: relative;
  width: 100%;
  height: 100dvh;
`

export const ModalContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const TitleUnit = styled.div`
  width: 100%;
  text-align: center;
  ${Token.typography.subtitle_strong};
  color: var(--text-strong);
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  min-height: 150px;
  flex: 1;
  overflow-y: auto;
  ${insideScroll};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    height: calc(100dvh - ${INNER_HEIGHT}px);
  }
`

export const ActionButtonBox = styled.div`
  display: flex;
  gap: 16px;
  width: 100%;
`
