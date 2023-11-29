import { useRecoilState, useResetRecoilState } from 'recoil'

import { rankUpMonsterState } from '~/atoms/rankup'

const useRankUpStore = () => {
  const [monsterSelect, setMonsterSelect] = useRecoilState(rankUpMonsterState)
  const resetItemList = useResetRecoilState(rankUpMonsterState)

  return {
    monsterSelect,
    setMonsterSelect,
    resetItemList
  }
}

export default useRankUpStore
