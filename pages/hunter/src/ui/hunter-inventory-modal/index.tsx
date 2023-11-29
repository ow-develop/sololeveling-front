import { ReactNode } from 'react'
import { ContentField, DimmedLayerUnit, ModalLayoutWrapper } from './style'
import usePreventBodyScroll from '~/hooks/usePreventBodyScroll'
import { HUNTER_DETAIL_CARD_BG_SET, HunterCardBgType } from '../../../style'

export interface ModalProps {
  children?: ReactNode
  onClose?: () => void
  isHunterModal: boolean
  hunterCardBgType: HunterCardBgType
}

const HunterInventoryModal = ({
  children,
  onClose,
  isHunterModal = false,
  hunterCardBgType
}: ModalProps) => {
  usePreventBodyScroll()

  return (
    <ModalLayoutWrapper>
      <DimmedLayerUnit onClick={onClose} />
      <ContentField
        isHunterModal={isHunterModal}
        background={HUNTER_DETAIL_CARD_BG_SET[hunterCardBgType]}
      >
        {children}
      </ContentField>
    </ModalLayoutWrapper>
  )
}
export default HunterInventoryModal
