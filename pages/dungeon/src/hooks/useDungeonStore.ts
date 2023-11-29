import { useRecoilState, useResetRecoilState } from 'recoil'

import { dungeonState } from '~/atoms/dungeon'
import { HunterRankType } from '~/types/common'
import { SlotState } from '~/types/dungeon'

const useDungeonStore = () => {
  const [state, setState] = useRecoilState(dungeonState)
  const resetState = useResetRecoilState(dungeonState)

  const setGateId = (gateId: number) => {
    setState((prev) => ({ ...prev, selectedGateId: gateId }))
  }

  const setGateRank = (rank: HunterRankType) => {
    setState((prev) => ({ ...prev, selectedRank: rank }))
  }

  const setStatusList = (list: SlotState[]) => {
    setState((prev) => ({ ...prev, statusList: list }))
  }

  const setTransactionOn = () => {
    setState((prev) => ({ ...prev, isTransaction: true }))
  }

  const setTransactionOff = () => {
    setState((prev) => ({ ...prev, isTransaction: false }))
  }

  return {
    ...state,
    setStatusList,
    setGateRank,
    setGateId,
    resetState,
    setTransactionOn,
    setTransactionOff
  }
}

export default useDungeonStore
