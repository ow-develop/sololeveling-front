import { Button } from '@ow-develop/ow-design-system'
import { ErrorOutlineIcon } from '@ow-develop/ow-icons/react/material'
import { ReactNode, useState } from 'react'

import {
  ConfirmActionBox,
  NotificationBox
} from '../../../../src/ui/leveling-confirm-modal/style'

import ModalLayout from '~/common/modal/modal-layout'
import receiptListItem from '~/common/modal/receipt-modal/receipt-list-item'
import { ListBox } from '~/common/modal/receipt-modal/receipt-list-item/style'
import { ReceiptContentField } from '~/common/modal/receipt-modal/style'
import SvgIcon from '~/common/svg-icon'
import { useI18next } from '~/lib/i18n'

export interface Props {
  onClick: () => Promise<void>
  children?: ReactNode
}

const ReturnConfirmModal = ({ onClick, children }: Props) => {
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
    <ModalLayout contentWidth='sm' persistent={isLoading}>
      <ModalLayout.Header title='Return' />
      <ReceiptContentField>
        <ListBox>{children}</ListBox>
      </ReceiptContentField>
      <ConfirmActionBox>
        <NotificationBox>
          <SvgIcon icon={<ErrorOutlineIcon />} color='icon-weak' />
          {t('Items will be burned after return.')}
        </NotificationBox>
        <Button width='fill' onClick={handleClick} loading={isLoading}>
          {t('Continue')}
        </Button>
      </ConfirmActionBox>
    </ModalLayout>
  )
}

export default Object.assign(ReturnConfirmModal, {
  List: receiptListItem
})
