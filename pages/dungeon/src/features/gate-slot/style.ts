import { Token } from '@ow-develop/ow-design-system'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'

const MAX_HEIGHT_M = 500
const MAX_HEIGHT_S = 320

export const GateSlotWrapper = styled.div<{ disabled?: boolean }>`
  position: relative;
  display: grid;
  grid-template-columns: repeat(4, minmax(150px, 1fr));
  gap: 16px;
  width: 100%;
  box-sizing: border-box;

  ${noneDraggable}

  ${({ disabled }) =>
    disabled &&
    css`
      pointer-events: none;
      opacity: 0.5;
    `}
}

${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
  grid-template-columns: repeat(2, minmax(100px, 1fr));
  grid-template-rows: repeat(2, max(${MAX_HEIGHT_M}px));
}

${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
  grid-template-rows: repeat(2, max(${MAX_HEIGHT_S}px));
}
`

export const SlotWrapper = styled(motion.div)<{ $select?: boolean }>`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: column;
  z-index: ${({ $select }) => ($select ? 1 : 0)};
  width: 100%;
  height: 100%;
  max-height: 576px;
  aspect-ratio: 1 / 2;
  gap: 24px;
  padding: 16px;
  cursor: default;
  border-radius: 8px;
  background: var(--surface-default);
  ${Token.shadow.md};
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
