import { Button } from '@ow-develop/ow-design-system'
import { useRouter } from 'next/router'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import { ListBox } from '../../../../../dungeon/src/ui/gate-receipt-modal/style'

import ReceiptModal from '~/common/modal/receipt-modal'
import ScrollGradient from '~/common/scroll-gradient'
import { InternalPath } from '~/constants/route'
import { useI18next } from '~/lib/i18n'
import { RewardMonster } from '~/types/dungeon'

export interface Props {
  list?: RewardMonster[]
  txHash?: string
  description?: string
  onClose?: () => void
}

export const UpgradeReceiptModal = ({
  list,
  txHash,
  description,
  onClose
}: Props) => {
  const { push } = useRouter()
  const { t, i18nextTranslate } = useI18next()
  const { ref: bottomRef, inView: bottomInView } = useInView()

  const onClick = () => {
    push(InternalPath.HUNTER)
  }

  return (
    <ReceiptModal
      title='Upgrade'
      description={description}
      onClose={onClose}
      txHash={txHash}
      button={
        <Button width='fill' variant='secondary' size='sm' onClick={onClick}>
          {t('Go to Inventory')}
        </Button>
      }
    >
      <ScrollGradient height={352} bottom={bottomInView}>
        <ListBox>
          {list.map((monster, index) => {
            return (
              <ReceiptModal.List
                key={index}
                imgUrl={monster.imgUrlCf || monster.imgUrl}
                profile={monster.profileCf || monster.profile}
                type={monster.type}
                rank={monster.rank}
                title={monster.title}
                amount={monster.amount}
                isShadow={monster.isShadow}
              />
            )
          })}
          <div ref={bottomRef} />
        </ListBox>
      </ScrollGradient>
    </ReceiptModal>
  )
}
