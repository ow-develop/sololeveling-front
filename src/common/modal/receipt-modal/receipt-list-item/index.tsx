import React from 'react'
import { useTranslation } from 'react-i18next'

import FullWidthImage from '~/common/image/full-width-image'
import {
  ContentTitleUnit,
  ContentTypeUnit,
  ListAmountUnit,
  ListContentBox,
  ListImageBox,
  ListInfoField,
  Marking,
  ReceiptListItemWrapper
} from '~/common/modal/receipt-modal/receipt-list-item/style'
import { HunterRank } from '~/constants/hunter'

export interface Props {
  type: string
  title: string
  imgUrl?: string
  profile?: string
  amount: number
  isShadow?: boolean
  rank?: string
}

const ReceiptListItem = ({
  imgUrl,
  profile,
  title,
  type,
  rank,
  amount,
  isShadow
}: Props) => {
  const { t } = useTranslation()

  return (
    <ReceiptListItemWrapper>
      <ListInfoField>
        <ListImageBox>
          <FullWidthImage src={profile || imgUrl} />
          {t(type)}

          {Object.values(HunterRank).includes(rank) && (
            <Marking isShadow={isShadow}>{t(rank)}</Marking>
          )}
        </ListImageBox>

        <ListContentBox>
          <ContentTypeUnit>{t(type)}</ContentTypeUnit>
          <ContentTitleUnit>{t(title)}</ContentTitleUnit>
        </ListContentBox>
      </ListInfoField>

      <ListAmountUnit>{amount}</ListAmountUnit>
    </ReceiptListItemWrapper>
  )
}

export default ReceiptListItem
