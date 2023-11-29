import { Button } from '@ow-develop/ow-design-system'
import React, { useMemo } from 'react'

import { BackgroundUnit, CompleteSlotWrapper, TextUnit } from './style'
import useClearGate from '../../../hooks/useClearGate'
import useGateQuery from '../../../hooks/useGateQuery'

import EssenceStoneImage from '~/assets/image/stone/essence_stone.webp'
import { HunterRank } from '~/constants/hunter'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'
import { findKeyByValue } from '~/utils/formatEnum'

interface Props {
  gateId: number
}

const CompleteSlot = ({ gateId }: Props) => {
  const { data, getGateDetail, refetch } = useGateQuery()
  const { t } = useI18next()
  const { transaction } = useTransactionHandler()
  const { clearGateForComplete } = useClearGate()

  const gate = useMemo(() => getGateDetail(gateId), [data])
  const rank = findKeyByValue(gate.gateRank, HunterRank)

  const onClick = async () => {
    await transaction({
      onSuccess: () =>
        clearGateForComplete({
          gateId,
          callBack: refetch,
          rank
        })
    })
  }

  return (
    <CompleteSlotWrapper>
      <BackgroundUnit src={EssenceStoneImage.src} />

      <TextUnit>{t(`${rank}-Rank Gate Cleared`)}</TextUnit>

      <Button variant='primary' width='fill' size='sm' onClick={onClick}>
        {t('Check Reward')}
      </Button>
    </CompleteSlotWrapper>
  )
}

export default CompleteSlot
