import { ReactNode } from 'react'

import {
  animateTypeMap,
  ContentField,
  DimmedLayerUnit,
  ModalLayoutWrapper
} from './style'

import ModalHeader from './modal-header'
import useModal from '~/hooks/useModal'

export interface StoryModalProps {
  children?: ReactNode
  contentWidth?: 'sm' | 'md' | 'lg'
  persistent?: boolean
  onClose?: () => void
  fixedwidth?: boolean
  isBottom?: boolean
  animateType?: keyof typeof animateTypeMap
}

const StoryModalLayout = ({
  children,
  contentWidth = 'lg',
  persistent,
  onClose,
  fixedwidth = false,
  isBottom = false,
  animateType = 'fadeIn'
}: StoryModalProps) => {
  const { closeModal } = useModal()

  const animate = animateTypeMap[animateType]

  const handleClose = () => {
    if (persistent) return

    closeModal()
    onClose?.()
  }

  return (
    <ModalLayoutWrapper isBottom={isBottom}>
      <DimmedLayerUnit onClick={handleClose} {...animateTypeMap['fadeIn']} />

      <ContentField
        {...animate}
        key='modal'
        width={contentWidth}
        fixedwidth={fixedwidth ? fixedwidth : undefined}
      >
        {children}
      </ContentField>
    </ModalLayoutWrapper>
  )
}

export default Object.assign(StoryModalLayout, {
  Header: ModalHeader
})
