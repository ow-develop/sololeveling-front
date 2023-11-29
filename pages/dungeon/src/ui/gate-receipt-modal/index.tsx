import { Button } from '@ow-develop/ow-design-system'
import { useRouter } from 'next/router'
import React from 'react'
import { useInView } from 'react-intersection-observer'

import { ListBox } from './style'

import ReceiptModal from '~/common/modal/receipt-modal'
import ScrollGradient from '~/common/scroll-gradient'
import { InternalPath } from '~/constants/route'
import { useI18next } from '~/lib/i18n'
import { RewardMonster } from '~/types/dungeon'

export interface GateReceiptModalProps {
  list: RewardMonster[]
  status: 'none' | 'complete' | 'cancelled'
  txHash?: string
  usedStone?: number
  onClose?: () => void
}

export const GateReceiptModal = ({
  status,
  txHash,
  list,
  usedStone,
  onClose
}: GateReceiptModalProps) => {
  const { push } = useRouter()
  const { t, i18nextTranslate } = useI18next()
  const { ref: bottomRef, inView: bottomInView } = useInView()

  const description = usedStone
    ? i18nextTranslate(
        `{{value}} of Essence Stone has been burned to clear the gate.`,
        {
          value: usedStone
        }
      )
    : 'Gate has been successfully cleared.'

  const onClick = () => {
    push(InternalPath.HUNTER)
  }

  return (
    <ReceiptModal
      title='Gate clear'
      description={description}
      onClose={onClose}
      txHash={txHash}
      status={status}
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
