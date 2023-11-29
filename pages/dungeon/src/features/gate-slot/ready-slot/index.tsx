import { Button } from '@ow-develop/ow-design-system'
import { CloseIcon } from '@ow-develop/ow-icons/react/material'
import { AnimateSharedLayout } from 'framer-motion'
import React, { useEffect, useState } from 'react'

import {
  BackgroundBox,
  CloseBox,
  ContentBox,
  ContentField,
  ReadySlotWrapper,
  SlotItemExpandedWrapper
} from './style'
import useDungeonStore from '../../../hooks/useDungeonStore'
import { useGateSlotContext } from '../context'
import { GateSlotItemWrapper } from '../style'

import ReadyImg from '~/assets/image/dungeon/gateslot_ready.webp'
import SvgIcon from '~/common/svg-icon'
import { useI18next } from '~/lib/i18n'
import Image from 'next/image'
import GateEnterContent from '../../gate-enter-content'

interface Props {
  index: number
}

const EXPANDABLE_CARD = 'expandable-card'
const EXPANDABLE_BACKGROUND = 'expandable-background'

const ReadySlot = ({ index }: Props) => {
  const { isTransaction, setTransactionOff } = useDungeonStore()
  const { selectIndex, setSelectIndex } = useGateSlotContext()
  const [isExpand, setIsExpand] = useState(false)
  const { t } = useI18next()

  const onClickExpand = () => {
    setSelectIndex(index)
    setIsExpand(true)
  }

  const closeSlot = () => {
    setIsExpand(false)
  }

  const mountAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.5, duration: 0.2 }
  }

  useEffect(() => {
    if (isTransaction) {
      setIsExpand(false)
      setTransactionOff()
    }
  }, [isTransaction])

  return (
    <GateSlotItemWrapper>
      <AnimateSharedLayout>
        {isExpand ? (
          <SlotItemExpandedWrapper layoutId={EXPANDABLE_CARD}>
            <CloseBox onClick={closeSlot}>
              <SvgIcon icon={<CloseIcon />} size={20} color='icon-weaker' />
            </CloseBox>

            <BackgroundBox
              key='ready-slot-expand-background'
              {...mountAnimation}
              exit={{ background: 'none' }}
            >
              <Image
                src={ReadyImg.src}
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </BackgroundBox>

            <ContentField {...mountAnimation}>
              <GateEnterContent />
            </ContentField>
          </SlotItemExpandedWrapper>
        ) : (
          <ReadySlotWrapper
            layoutId={EXPANDABLE_CARD}
            $select={selectIndex === index}
          >
            <BackgroundBox key='ready-slot-background' {...mountAnimation}>
              <Image
                src={ReadyImg.src}
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </BackgroundBox>

            <ContentBox {...mountAnimation}>
              <Button width='fill' size='sm' onClick={onClickExpand}>
                {t('Gate Enter')}
              </Button>
            </ContentBox>
          </ReadySlotWrapper>
        )}
      </AnimateSharedLayout>
    </GateSlotItemWrapper>
  )
}

export default ReadySlot
