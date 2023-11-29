import dayjs from 'dayjs'
import React, { useEffect } from 'react'

import { DungeonGateWrapper, LastUpdateUnit } from './style'
import useDungeonStore from '../../hooks/useDungeonStore'
import useGateQuery from '../../hooks/useGateQuery'
import useHunterSlotQuery from '../../hooks/useHunterSlotQuery'
import GateSlot from '../gate-slot'

import { defaultStatusList } from '~/constants/dungeon'
import useCurrentBlockNumber from '~/hooks/queries/useCurrentBlockNumber'
import useIsCurrentSeasonQuery from '~/hooks/queries/useIsCurrentSeasonQuery'
import useAuth from '~/hooks/useAuth'
import { useI18next } from '~/lib/i18n'
import { SlotState } from '~/types/dungeon'

const DungeonGate = () => {
  const { setStatusList } = useDungeonStore()
  const { dataUpdatedAt: blockNumberUpdatedAt, data: currentBlockNumber } =
    useCurrentBlockNumber()
  const { data: isCurrentSeason } = useIsCurrentSeasonQuery()
  const { data: gateList } = useGateQuery()
  const { data: slotData } = useHunterSlotQuery()
  const { isLoggedIn } = useAuth()
  const { t } = useI18next()

  const createSlotList = () => {
    if (!gateList) return

    const totalSlotCount = slotData?.availableSlot ?? 0
    const usingSlotCount = gateList.length
    let isRemainPrevSeason = false

    if (totalSlotCount - usingSlotCount < 0) {
      isRemainPrevSeason = true
    }

    const newArr = Array(4)
      .fill(null)
      .map((_, index): SlotState => {
        const gate = gateList[index]
        const isEnableSlot = index + 1 <= totalSlotCount

        if (gate) {
          return gate.endBlock - currentBlockNumber <= 0
            ? 'complete'
            : 'progress'
        }

        if (!isCurrentSeason) return 'season_end'
        if (isRemainPrevSeason) return 'need_clear'
        if (isEnableSlot) return 'ready'
        return defaultStatusList[index]
      })

    setStatusList(newArr)
  }

  useEffect(() => {
    if (!isLoggedIn) {
      setStatusList(defaultStatusList)
    } else {
      createSlotList()
    }
  }, [gateList, slotData, currentBlockNumber, isLoggedIn])

  return (
    <DungeonGateWrapper>
      <LastUpdateUnit>
        {t('Last Update')}
        &nbsp;
        <b>{dayjs(blockNumberUpdatedAt).format(' HH : mm')}</b>
      </LastUpdateUnit>

      <GateSlot />
    </DungeonGateWrapper>
  )
}

export default DungeonGate
