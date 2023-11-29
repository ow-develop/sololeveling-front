import React from 'react'

import { ImgBox } from './style'

import RankEImg from '~/assets/image/rank/rank_e.webp'
import FullWidthImage from '~/common/image/full-width-image'
import { CommonLink } from '~/common/link/common-link'
import ModalLayout from '~/common/modal/modal-layout'
import { TransactionReceipt } from '~/common/transaction-receipt'
import { InternalPath } from '~/constants/route'
import useModal from '~/hooks/useModal'

interface Props {
  txHash?: string
  status: 'none' | 'complete' | 'cancelled'
}

const RankClaimModal = ({ txHash, status }: Props) => {
  const { closeModal } = useModal()

  return (
    <ModalLayout contentWidth='sm'>
      <ModalLayout.Header
        title='Rank Up'
        description='E-Hunter Badge has been successfully claimed.'
        onClose={closeModal}
      />

      <ImgBox>
        <FullWidthImage src={RankEImg.src} />
      </ImgBox>

      <TransactionReceipt txHash={txHash} status={status} />

      <CommonLink href={InternalPath.HUNTER} text='Go to Inventory' />
    </ModalLayout>
  )
}

export default RankClaimModal
