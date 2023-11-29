import { CancelIcon, VerifiedIcon } from '@ow-develop/ow-icons/react/material'
import Link from 'next/link'
import React from 'react'
import { useTranslation } from 'react-i18next'

import SvgIcon from '~/common/svg-icon'
import {
  HeadingField,
  HeadingUnit,
  InfoField,
  TranscactionReceiptWrapper,
  ValueBox
} from '~/common/transaction-receipt/style'
import { ExternalPath } from '~/constants/route'
import { splitAddress } from '~/utils/formatText'

export interface TransactionReceiptProps {
  /**
   * 트랜잭션의 상태를 의미합니다.
   * @default 'none'
   */
  status?: 'none' | 'complete' | 'cancelled'
  /**
   * 트랜잭션 해시를 의미합니다.
   * etherscan 등 블록체인 조회 사이트 링크로 이어주는데 사용됩니다.
   */
  txHash?: string
}

export const TransactionReceipt = ({
  status = 'none',
  txHash
}: TransactionReceiptProps) => {
  const { t } = useTranslation()
  const hasStatus = status !== 'none'

  const statusSet = {
    complete: (
      <>
        <SvgIcon
          icon={<VerifiedIcon />}
          size={20}
          color='status-success-default'
        />
        {t('Complete')}
      </>
    ),
    cancelled: (
      <>
        <SvgIcon
          icon={<CancelIcon />}
          size={20}
          color='status-danger-default'
        />
        {t('Cancelled')}
      </>
    )
  }

  return (
    <TranscactionReceiptWrapper status={status}>
      <HeadingField>
        {hasStatus && <HeadingUnit>{t('Status')}</HeadingUnit>}
        <HeadingUnit>{t('Transaction ID')}</HeadingUnit>
      </HeadingField>

      <InfoField>
        {statusSet[status] && <ValueBox>{statusSet[status]}</ValueBox>}
        <ValueBox>
          {/*  TODO 메인넷 들어갈 때 메인넷 스캔으로 수정해야함 */}
          <Link href={ExternalPath.MUMBAI_POLYGON_TX_DETAIL + txHash}>
            <a target='_blank'>{splitAddress(txHash)}</a>
          </Link>
        </ValueBox>
      </InfoField>
    </TranscactionReceiptWrapper>
  )
}
