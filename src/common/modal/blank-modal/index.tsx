import React, { ReactNode } from 'react'

import {
  BlankModalWrapper,
  DimmedLayerUnit
} from '~/common/modal/blank-modal/style'
import useModal from '~/hooks/useModal'
import usePreventBodyScroll from '~/hooks/usePreventBodyScroll'

interface Props {
  children?: ReactNode
  onClose?: boolean
}

const BlankModal = ({ children }: Props) => {
  const { closeModal } = useModal()
  usePreventBodyScroll()

  return (
    <BlankModalWrapper>
      <DimmedLayerUnit onClick={closeModal} />
      {children}
    </BlankModalWrapper>
  )
}

export default BlankModal
