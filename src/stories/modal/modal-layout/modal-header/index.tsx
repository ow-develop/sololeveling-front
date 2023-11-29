import { ArrowBackIcon, CloseIcon } from '@ow-develop/ow-icons/react/material'
import React from 'react'

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

export interface ModalHeaderProps {
  title: string
  onPrev?: () => void
  description?: string
  onClose?: () => void
}

const ModalHeader = ({
  title,
  onPrev,
  description,
  onClose
}: ModalHeaderProps) => {
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

        <TitleUnit>{title}</TitleUnit>

        <CloseButtonUnit
          width='hug'
          variant='text'
          size='sm'
          onClick={handleClose}
        >
          <SvgIcon icon={<CloseIcon />} color='icon-weaker' />
        </CloseButtonUnit>
      </HeadingField>

      {description && <DescriptionBox>{description}</DescriptionBox>}
    </ModalHeaderWrapper>
  )
}

export default ModalHeader
