import { ArrowBackIcon, CloseIcon } from '@ow-develop/ow-icons/react/material'
import React, { memo } from 'react'

import {
  CloseButtonUnit,
  DescriptionBox,
  HeadingField,
  ModalHeaderWrapper,
  TitleBox,
  TitleUnit
} from './style'

import SvgIcon from '~/common/svg-icon'
import useModal from '~/hooks/useModal'
import { Translate, useI18next } from '~/lib/i18n'

export interface ModalHeaderProps {
  title: Translate
  onPrev?: () => void
  description?: Translate
  onClose?: () => void
}

const ModalHeader = ({
  title,
  onPrev,
  description,
  onClose
}: ModalHeaderProps) => {
  const { t } = useI18next()
  const { closeModal } = useModal()

  const handleClose = () => {
    closeModal()
    onClose?.()
  }

  return (
    <ModalHeaderWrapper>
      <HeadingField>
        <TitleBox>
          {onPrev && (
            <SvgIcon
              onClick={onPrev}
              size={20}
              icon={<ArrowBackIcon />}
              color='icon-default'
            />
          )}
        </TitleBox>

        <TitleUnit>{t(title)}</TitleUnit>

        <CloseButtonUnit
          width='hug'
          variant='text'
          size='sm'
          onClick={handleClose}
        >
          <SvgIcon icon={<CloseIcon />} color='icon-weaker' />
        </CloseButtonUnit>
      </HeadingField>
      {description && <DescriptionBox>{t(description)}</DescriptionBox>}
    </ModalHeaderWrapper>
  )
}

export default memo(ModalHeader)
