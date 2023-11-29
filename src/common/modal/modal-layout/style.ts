import { StyleRecord } from '@ow-develop/ow-design-system/dist/types/common/types'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { ModalProps } from '~/common/modal/modal-layout/index'
import { Breakpoint, ZIndex } from '~/constants/style'

const contentWidthSet: StyleRecord<ModalProps['contentWidth']> = {
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
  width: ModalProps['contentWidth']
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
