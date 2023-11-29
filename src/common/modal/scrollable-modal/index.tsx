import React, { ReactNode } from 'react'
import { useInView } from 'react-intersection-observer'

import ModalLayout from '~/common/modal/modal-layout'
import { ScrollContentBox } from '~/common/modal/scrollable-modal/style'
import ScrollGradient from '~/common/scroll-gradient'

interface Props {
  title?: string
  children?: ReactNode
  action?: ReactNode
  topInView?: boolean
  bottomInView?: boolean
  fixedWidth?: boolean
  contentWidth?: 'sm' | 'md' | 'lg'
}

const ScrollableModal = ({
  title,
  action,
  children,
  topInView,
  bottomInView,
  fixedWidth,
  contentWidth
}: Props) => {
  return (
    <ModalLayout contentWidth={contentWidth} fixedwidth={fixedWidth}>
      <ModalLayout.Header title={title} />
      <ScrollGradient top={topInView} bottom={bottomInView}>
        <ScrollContentBox>{children}</ScrollContentBox>
      </ScrollGradient>
      {action}
    </ModalLayout>
  )
}

export default ScrollableModal
