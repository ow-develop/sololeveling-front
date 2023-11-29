import { Button } from '@ow-develop/ow-design-system'
import { CloseIcon } from '@ow-develop/ow-icons/react/material'
import { AnimateSharedLayout } from 'framer-motion'
import React, { useEffect, useMemo, useState } from 'react'

import {
  BackgroundBox,
  CloseBox,
  ContentBox,
  ContentField,
  ProgressSlotWrapper,
  SlotItemExpandedWrapper,
  SlotItemTextWrapper,
  SubTextUnit,
  TitleUnit
} from './style'
import useDungeonStore from '../../../hooks/useDungeonStore'
import useGateQuery from '../../../hooks/useGateQuery'
import useTimerQuery from '../../../hooks/useTimerQuery'
import GateProgressContent from '../../gate-progress-content'
import { useGateSlotContext } from '../context'
import { GateSlotItemWrapper } from '../style'

import ProgressImg from '~/assets/image/dungeon/gateslot_progress.webp'
import SvgIcon from '~/common/svg-icon'
import { MILLISECONDS_A_SECOND } from '~/constants/time'
import useCurrentBlockNumber from '~/hooks/queries/useCurrentBlockNumber'
import dayjs from '~/lib/dayjs'
import { useI18next } from '~/lib/i18n'
import Image from 'next/image'
import useModal from '~/hooks/useModal'

interface Props {
  gateId: number
  index: number
}

const EXPANDABLE_CARD = 'expandable-card'
const EXPANDABLE_BACKGROUND = 'expandable-background'

const ProgressSlot = ({ gateId, index }: Props) => {
  const { openLoadingModal } = useModal()
  const { isTransaction, setTransactionOff } = useDungeonStore()
  const { selectIndex, setSelectIndex } = useGateSlotContext()
  const [isExpand, setIsExpand] = useState(false)
  const [isExpired, setIsExpired] = useState(false)
  const { data, getGateDetail, refetch: refetchGateList } = useGateQuery()
  const { data: currentBlock, refetch: refetchCurrentBlockNumber } =
    useCurrentBlockNumber()
  const { data: now } = useTimerQuery()
  const { t } = useI18next()

  const gate = useMemo(() => getGateDetail(gateId), [data])
  const startAxisDate = useMemo(() => dayjs(), [])
  const remainBlock = gate?.endBlock - currentBlock

  const refetch = () => {
    refetchGateList()
    refetchCurrentBlockNumber()
  }

  const getRemainTime = (block: number) => {
    const timePerBlock = 2.5 * MILLISECONDS_A_SECOND
    const remainTime = timePerBlock * block
    const endTime = startAxisDate.add(remainTime)
    const duration = dayjs.duration(endTime.diff(now))

    const expired = endTime.diff(now) <= 10
    if (expired) {
      return {
        hour: '00',
        min: '00',
        sec: '00',
        expired: true
      }
    }

    const hour = `${duration.hours() < 10 ? '0' : ''}${duration.hours()}`
    const min = `${duration.minutes() < 10 ? '0' : ''}${duration.minutes()}`
    const sec = `${duration.seconds() < 10 ? '0' : ''}${duration.seconds()}`

    return {
      hour,
      min,
      sec,
      expired
    }
  }

  const time = getRemainTime(remainBlock)

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
    if (time.expired) {
      setIsExpired(true)
      refetch()
    } else {
      setIsExpired(false)
    }
  }, [time])

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
              key='progress-slot-expand-background'
              {...mountAnimation}
              exit={{ background: 'none' }}
            >
              <Image
                src={ProgressImg.src}
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </BackgroundBox>

            <ContentField
              key='progress-slot-expand-content'
              {...mountAnimation}
            >
              <GateProgressContent
                gate={gate}
                time={time}
                remainBlock={remainBlock}
              />
            </ContentField>
          </SlotItemExpandedWrapper>
        ) : (
          <ProgressSlotWrapper
            layoutId={EXPANDABLE_CARD}
            $select={selectIndex === index}
          >
            <BackgroundBox key='progress-slot-background' {...mountAnimation}>
              <Image
                src={ProgressImg.src}
                alt=''
                layout='fill'
                objectFit='cover'
              />
            </BackgroundBox>

            <ContentBox key='progress-slot-content' {...mountAnimation}>
              <SlotItemTextWrapper>
                <TitleUnit>{remainBlock?.toLocaleString()} Block</TitleUnit>
                <SubTextUnit>{`≈ ${time.hour} : ${time.min} : ${time.sec}`}</SubTextUnit>
              </SlotItemTextWrapper>

              <Button
                width='fill'
                size='sm'
                onClick={onClickExpand}
                disabled={isExpired}
              >
                {isExpired ? t(`Loading`) : t('Clear now')}
              </Button>
            </ContentBox>
          </ProgressSlotWrapper>
        )}
      </AnimateSharedLayout>
    </GateSlotItemWrapper>
  )
}

export default ProgressSlot
