import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { TransactionReceiptProps } from '~/common/transaction-receipt/index'

export const TranscactionReceiptWrapper = styled.div<{
  status: TransactionReceiptProps['status']
}>`
  overflow: hidden;
  border: 1px solid var(--border-default);
  border-radius: 8px;

  ${({ status }) =>
    status === 'none' &&
    css`
      > div {
        justify-content: center;
      }
    `}
`

export const HeadingField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px;
  border-bottom: 1px solid var(--border-default);
`

export const HeadingUnit = styled.b`
  color: var(--text-default);
  ${Token.typography.body}
`

export const InfoField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 24px;
  background: var(--surface-floated);
`

export const ValueBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-default);
  ${Token.typography.body_stronger}
`
