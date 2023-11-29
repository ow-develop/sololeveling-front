import { ReactNode } from 'react'

import ModalLayout from '~/common/modal/modal-layout'
import receiptBlockItem from '~/common/modal/receipt-modal/receipt-block-item'
import receiptListItem from '~/common/modal/receipt-modal/receipt-list-item'
import { ReceiptContentField } from '~/common/modal/receipt-modal/style'
import { TransactionReceipt } from '~/common/transaction-receipt'

export interface Props {
  title?: string
  description?: string
  status?: 'none' | 'complete' | 'cancelled'
  txHash?: string
  button?: ReactNode
  children?: ReactNode
  onClose?: () => void
}

const ReceiptModal = ({
  status = 'complete',
  title,
  description,
  txHash,
  button,
  onClose,
  children
}: Props) => {
  return (
    <ModalLayout contentWidth='sm' onClose={onClose}>
      <ModalLayout.Header
        title={title}
        description={description}
        onClose={onClose}
      />
      <ReceiptContentField>{children}</ReceiptContentField>
      <TransactionReceipt txHash={txHash} status={status} />
      {button}
    </ModalLayout>
  )
}

export default Object.assign(ReceiptModal, {
  Block: receiptBlockItem,
  List: receiptListItem
})
