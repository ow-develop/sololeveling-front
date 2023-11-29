import { Button } from '@ow-develop/ow-design-system'
import React, { ReactNode, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

import {
  ActionButtonBox,
  InventoryBox,
  ModalContentBox,
  ModalContentField
} from './style'

import BlankModal from '~/common/modal/blank-modal'
import ScrollGradient from '~/common/scroll-gradient'
import useModal from '~/hooks/useModal'
import useBreakpoint from '~/hooks/useBreakpoint'
import ModalHeader from '~/common/modal/modal-layout/modal-header'

interface Props {
  title?: string
  children?: ReactNode
  onClear?: () => void
}
const BottomSheetModal = ({ title, children, onClear }: Props) => {
  const { t } = useTranslation()
  const { closeModal } = useModal()
  const { belowMediumWidth } = useBreakpoint()

  const { ref: topRef, inView: topInView } = useInView()
  const { ref: bottomRef, inView: bottomInView } = useInView()

  const handleClear = () => {
    onClear?.()
  }

  const handleContinue = () => {
    closeModal()
  }

  const handleClose = () => {
    closeModal()
  }

  useEffect(() => {
    if (!belowMediumWidth) {
      closeModal()
    }
  }, [belowMediumWidth])

  return (
    <BlankModal>
      <ModalContentField>
        <ModalContentBox>
          <ModalHeader title={''} />
          <ScrollGradient top={topInView} bottom={bottomInView}>
            <InventoryBox>
              <div ref={topRef} />
              {children}
              <div ref={bottomRef} />
            </InventoryBox>
          </ScrollGradient>
        </ModalContentBox>

        <ActionButtonBox>
          <Button
            variant='secondary'
            size='sm'
            width='fill'
            onClick={handleClear}
          >
            {t('Clear')}
          </Button>
          <Button size='sm' width='fill' onClick={handleContinue}>
            {t('Continue')}
          </Button>
        </ActionButtonBox>
      </ModalContentField>
    </BlankModal>
  )
}

export default BottomSheetModal
