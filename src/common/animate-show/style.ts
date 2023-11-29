import { motion, MotionProps } from 'framer-motion'
import styled from 'styled-components'

import { AnimateShowProps } from './index'

const animateMap: Partial<Record<AnimateShowProps['type'], MotionProps>> = {
  heightExpand: {
    initial: 'collapsed',
    animate: 'open',
    exit: 'collapsed',
    transition: { type: 'spring', duration: 0.2, damping: 70, stiffness: 500 },
    variants: {
      open: { opacity: 1, height: 'auto' },
      collapsed: { opacity: 0, height: 0, overflow: 'hidden' }
    }
  }
}

export const AnimateShowWrapper = styled(motion.div).attrs<{
  animateType: AnimateShowProps['type']
}>((props) => {
  return animateMap[props.animateType]
})<{
  animateType: AnimateShowProps['type']
}>``
