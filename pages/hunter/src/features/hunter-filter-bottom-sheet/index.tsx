import { Button } from '@ow-develop/ow-design-system'
import React, { ReactNode } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from 'react-intersection-observer'

import {
  ActionButtonBox,
  ContentBox,
  ModalContentBox,
  ModalContentField
} from './style'

import BlankModal from '~/common/modal/blank-modal'
import ScrollGradient from '~/common/scroll-gradient'
import ModalHeader from '~/common/modal/modal-layout/modal-header'

interface Props {
  title?: string
  children?: ReactNode
  onClose?: () => void
  onClear?: () => void
}
const HunterFilterBottomSheet = ({
  title,
  children,
  onClose,
  onClear
}: Props) => {
  const { t } = useTranslation()
  const { ref: topRef, inView: topInView } = useInView()
  const { ref: bottomRef, inView: bottomInView } = useInView()

  return (
    <BlankModal>
      <ModalContentField>
        <ModalContentBox>
          <ModalHeader title={title} />
          <ScrollGradient top={topInView} bottom={bottomInView}>
            <ContentBox>
              <div ref={topRef} />
              {children}
              <div ref={bottomRef} />
            </ContentBox>
          </ScrollGradient>
        </ModalContentBox>

        <ActionButtonBox>
          <Button variant='secondary' size='sm' width='fill' onClick={onClear}>
            {t('Clear')}
          </Button>
          <Button variant='primary' size='sm' width='fill' onClick={onClose}>
            {t('Apply')}
          </Button>
        </ActionButtonBox>
      </ModalContentField>
    </BlankModal>
  )
}

export default HunterFilterBottomSheet
