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
  usePreventBodyScroll()

  return (
    <BlankModalWrapper>
      <DimmedLayerUnit />
      {children}
    </BlankModalWrapper>
  )
}

export default BlankModal
