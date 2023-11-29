import { MotionProps } from 'framer-motion'

export const fadeIn: MotionProps = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  transition: { duration: 0.2, ease: 'easeOut' }
}

export const bottomUp: MotionProps = {
  variants: {
    hidden: {
      opacity: 0,
      y: 800
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.2, delay: 0.1, ease: 'easeInOut' }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: 'easeInOut'
      }
    }
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit'
}

export const scaleUp: MotionProps = {
  variants: {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { opacity: 1, scale: 1 },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  transition: { duration: 0.2, ease: 'easeOut' }
}
