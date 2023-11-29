import React, { lazy, useState } from 'react'

import GateSlotContext from './context'
import { GateSlotWrapper } from './style'
import useDungeonStore from '../../../../dungeon/src/hooks/useDungeonStore'
import useGateQuery from '../../hooks/useGateQuery'

import { ERC1155CollectionType } from '~/constants/contracts'
import Config from '~/config'
import { defaultStatusList } from '~/constants/dungeon'
import useIsApprovedQuery from '~/hooks/queries/useIsApprovedQuery'
import useAuth from '~/hooks/useAuth'
import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'
import useGateKeyQuery from '../../hooks/useGateKeyQuery'
import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'

const LazyReadySlot = lazy(() => import('./ready-slot'))
const LazyProgressSlot = lazy(() => import('./progress-slot'))
const LazyCompleteSlot = lazy(() => import('./complete-slot'))
const LazyDisabledSlot = lazy(() => import('./disabled-slot'))
const LazyNeedClearSlot = lazy(() => import('./need-clear-slot'))
const LazySeasonEndSlot = lazy(() => import('./season-end-slot'))

const GateSlot = () => {
  const { statusList } = useDungeonStore()
  const [selectIndex, setSelectIndex] = useState<number | null>(null)
  const { isLoggedIn } = useAuth()
  const { data } = useGateQuery()
  useMaticBalanceQuery()
  useGateKeyQuery()
  useHunterRankQuery()
  useIsApprovedQuery(ERC1155CollectionType.GATE_KEY, Config.DungeonGate)
  useIsApprovedQuery(ERC1155CollectionType.ESSENCE_STONE, Config.DungeonGate)

  const selectSlot = (index: number) => setSelectIndex(index)

  return (
    <GateSlotContext.Provider
      value={{ selectIndex, setSelectIndex: selectSlot }}
    >
      <GateSlotWrapper disabled={!isLoggedIn}>
        {statusList.map((status, index) => {
          const isDisabled = defaultStatusList.includes(status)
          const gate = data?.[index]

          return (
            <React.Fragment key={index}>
              {status === 'ready' && <LazyReadySlot index={index} />}
              {status === 'progress' && gate && (
                <LazyProgressSlot index={index} gateId={gate.id} />
              )}
              {status === 'complete' && gate && (
                <LazyCompleteSlot gateId={gate.id} />
              )}
              {isDisabled && <LazyDisabledSlot status={status} />}
              {status === 'need_clear' && <LazyNeedClearSlot />}
              {status === 'season_end' && <LazySeasonEndSlot />}
            </React.Fragment>
          )
        })}
      </GateSlotWrapper>
    </GateSlotContext.Provider>
  )
}

export default GateSlot
