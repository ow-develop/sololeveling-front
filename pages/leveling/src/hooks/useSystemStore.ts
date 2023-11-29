import { useRecoilState } from 'recoil'

import {
  selectRankState,
  selectSystemItemState,
  systemCountState
} from '~/atoms/system'

const useSystemStore = () => {
  const [systemCount, setSystemCount] = useRecoilState(systemCountState)
  const [selectSystemItem, setSelectSystemItem] = useRecoilState(
    selectSystemItemState
  )
  const [selectRank, setSelectRank] = useRecoilState(selectRankState)

  const selectAllCount = selectSystemItem.reduce((pre, cur) => {
    return pre + cur.amount
  }, 0)
  const onResetData = () => {
    setSystemCount(0)
    setSelectSystemItem([])
  }

  return {
    systemCount,
    selectSystemItem,
    selectRank,
    selectAllCount,
    setSystemCount,
    setSelectSystemItem,
    setSelectRank,
    onResetData
  }
}

export default useSystemStore
