import { useQuery } from '@tanstack/react-query'

import useRankStore from './useRankStore'

import { fetchGetRankUpBalance } from '~/api/season'
import { QueryKey } from '~/constants/query'
import { MILLISECONDS_A_DAY } from '~/constants/time'
import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'

const useRankUpBalanceQuery = () => {
  const { getUsageCountByTitle } = useRankStore()
  const { rank } = useHunterRankQuery()

  const { data, ...queryState } = useQuery(
    [QueryKey.GET_MONSTER_BALANCE_BY_HUNTER_RANK],
    () => fetchGetRankUpBalance(),
    {
      cacheTime: MILLISECONDS_A_DAY
    }
  )

  const MonsterList = data.monster.filter((monster) => {
    return monster.rank === rank && monster.amount > 0
  })

  const remainMonsterList = data?.monster
    .map((v) => {
      return { ...v, amount: v.amount - getUsageCountByTitle(v.title) }
    })
    .filter(({ amount }) => amount > 0)

  const hasNormalMonster = remainMonsterList.some(({ amount }) => {
    return amount > 0
  })

  const getMonsterImgByTitle = (title: string) => {
    const findData = data?.monster.find((v) => v.title === title)
    return (findData?.imgUrlCf || findData.imgUrl) ?? ''
  }

  const getShadowImgByTitle = (title: string) => {
    const findData = data?.monster.find((v) => v.title === title)
    return (findData?.imgUrlCf || findData.imgUrl) ?? ''
  }

  const getMonsterAmountByTokenId = (idx: number) => {
    const findData = data?.monster.find((v) => v.tokenId === idx)
    return findData?.amount ?? 0
  }

  return {
    ...queryState,
    MonsterList,
    hasNormalMonster,
    monster: remainMonsterList,
    getMonsterImgByTitle,
    getShadowImgByTitle,
    getMonsterAmountByTokenId
  }
}

export default useRankUpBalanceQuery
