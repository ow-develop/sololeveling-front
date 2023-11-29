import { StyleRecord } from '@ow-develop/ow-design-system/dist/types/common/types'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { StoryModalProps } from './index'
import { Breakpoint, ZIndex } from '~/constants/style'

const contentWidthSet: StyleRecord<StoryModalProps['contentWidth']> = {
  lg: css`
    width: 640px;
  `,
  md: css`
    width: 560px;
  `,
  sm: css`
    width: 360px;
  `
}

export const ModalLayoutWrapper = styled.div<{ isBottom?: boolean }>`
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

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${({ isBottom }) =>
      isBottom &&
      css`
        top: auto;
        bottom: 0;
      `}
  }
`

export const DimmedLayerUnit = styled(motion.div)`
  z-index: ${ZIndex.BACKGROUND};
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background: var(--overlay-dimmed);
`

export const ContentField = styled(motion.div)<{
  width: StoryModalProps['contentWidth']
  fixedwidth?: boolean
}>`
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  background: var(--surface-default);
  border-radius: 8px;
  ${({ width }) => contentWidthSet[width]};
  max-height: 100%;
  overflow-y: auto;
  ${({ theme, fixedwidth }) => `${theme.breakpoints.down(Breakpoint.M)} {
    ${
      !fixedwidth &&
      css`
        width: 100%;
        height: 100%;
        border-radius: 0;
      `
    }
  }}`}
`

// 애니메이션

const fadeIn = {
  variants: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 }
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit',
  transition: { duration: 0.2, delay: 0.1, ease: 'easeInOut' }
}

const dropIn = {
  variants: {
    hidden: {
      y: '-100vh',
      opacity: 0
    },
    visible: {
      y: '0',
      opacity: 1,
      transition: {
        duration: 0.1,
        type: 'spring',
        damping: 25,
        stiffness: 500
      }
    },
    exit: {
      y: '100vh',
      opacity: 0
    }
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit'
}

const flip = {
  variants: {
    hidden: {
      transform: 'scale(0) rotateX(-360deg)',
      opacity: 0,
      transition: {
        delay: 0.3
      }
    },
    visible: {
      transform: ' scale(1) rotateX(0deg)',
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      transform: 'scale(0) rotateX(360deg)',
      opacity: 0,
      transition: {
        duration: 0.5
      }
    }
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit'
}

const newspaper = {
  variants: {
    hidden: {
      transform: 'scale(0) rotate(720deg)',
      opacity: 0,
      transition: {
        delay: 0.3
      }
    },
    visible: {
      transform: ' scale(1) rotate(0deg)',
      opacity: 1,
      transition: {
        duration: 0.5
      }
    },
    exit: {
      transform: 'scale(0) rotate(-720deg)',
      opacity: 0,
      transition: {
        duration: 0.3
      }
    }
  },
  initial: 'hidden',
  animate: 'visible',
  exit: 'exit'
}

export const scaleUp = {
  variants: {
    hidden: { opacity: 0, scale: 0.9 },
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
  transition: { duration: 0.2, delay: 0.1, ease: 'easeInOut' }
}

export const bottomUp = {
  variants: {
    hidden: {
      opacity: 0,
      y: 800
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        type: 'spring',
        damping: 30,
        stiffness: 500
      }
    },
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
  transition: { duration: 0.2, delay: 0.1, ease: 'easeInOut' }
}

export const topDown = {
  variants: {
    hidden: {
      opacity: 0,
      y: -20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.2,
        type: 'spring',
        damping: 30,
        stiffness: 500
      }
    },
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
  transition: { duration: 0.2, delay: 0.1, ease: 'easeInOut' }
}

export const animateTypeMap = {
  fadeIn,
  dropIn,
  flip,
  newspaper,
  topDown,
  scaleUp,
  bottomUp
}
