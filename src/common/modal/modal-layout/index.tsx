import { ReactNode } from 'react'

import { ContentField, DimmedLayerUnit, ModalLayoutWrapper } from './style'

import ModalHeader from '~/common/modal/modal-layout/modal-header'
import useModal from '~/hooks/useModal'
import usePreventBodyScroll from '~/hooks/usePreventBodyScroll'
import { fadeIn, scaleUp } from '~/styles/motions'

export interface ModalProps {
  children?: ReactNode
  contentWidth?: 'sm' | 'md' | 'lg'
  persistent?: boolean
  onClose?: () => void
  fixedwidth?: boolean
  isBottom?: boolean
}

const ModalLayout = ({
  children,
  contentWidth = 'lg',
  persistent,
  onClose,
  fixedwidth = false,
  isBottom = false
}: ModalProps) => {
  const { closeModal } = useModal()
  usePreventBodyScroll()

  const handleClose = () => {
    if (persistent) return

    closeModal()
    onClose?.()
  }

  return (
    <ModalLayoutWrapper isBottom={isBottom}>
      <DimmedLayerUnit onClick={handleClose} {...fadeIn} />

      <ContentField
        key='modal'
        width={contentWidth}
        fixedwidth={fixedwidth ? fixedwidth : undefined}
        {...scaleUp}
      >
        {children}
      </ContentField>
    </ModalLayoutWrapper>
  )
}

export default Object.assign(ModalLayout, {
  Header: ModalHeader
})
