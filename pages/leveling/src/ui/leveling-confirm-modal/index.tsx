import { Button } from '@ow-develop/ow-design-system'
import { ErrorOutlineIcon } from '@ow-develop/ow-icons/react/material'
import React, { ReactNode, useState } from 'react'

import { ConfirmActionBox, ConfirmInfoField, NotificationBox } from './style'
import LevelingConfirmItem from './leveling-confirm-item'

import ModalLayout from '~/common/modal/modal-layout'
import SvgIcon from '~/common/svg-icon'
import { useI18next } from '~/lib/i18n'

export interface Props {
  title: string
  notification: string
  onClick: () => Promise<void>
  children?: ReactNode
}

const LevelingConfirmModal = ({
  title,
  children,
  notification,
  onClick
}: Props) => {
  const { t } = useI18next()
  const [isLoading, setLoading] = useState(false)

  const handleClick = async () => {
    try {
      setLoading(true)
      await onClick()
    } finally {
      setLoading(false)
    }
  }

  return (
    <ModalLayout contentWidth='md' persistent={isLoading}>
      <ModalLayout.Header title={title} />
      <ConfirmInfoField>{children}</ConfirmInfoField>
      <ConfirmActionBox>
        <NotificationBox>
          <SvgIcon icon={<ErrorOutlineIcon />} color='icon-weak' />
          {t(notification)}
        </NotificationBox>
        <Button width='fill' onClick={handleClick} loading={isLoading}>
          {t('Continue')}
        </Button>
      </ConfirmActionBox>
    </ModalLayout>
  )
}

export default Object.assign(LevelingConfirmModal, {
  Item: LevelingConfirmItem
})
