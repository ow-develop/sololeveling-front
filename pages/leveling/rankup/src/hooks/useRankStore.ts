import { useRecoilState, useResetRecoilState } from 'recoil'

import { activateModalIdxState, rankInputListState } from '~/atoms/rankup'

const useRankStore = () => {
  const [rankInputList, setSelectItemList] = useRecoilState(rankInputListState)
  const [activateModalIdx, setActivateModalIdx] = useRecoilState(
    activateModalIdxState
  )
  const resetItemList = useResetRecoilState(rankInputListState)

  const selectMonsterList = rankInputList.filter(({ tokenId }) => tokenId > 0)

  const isSelectShadowItem = rankInputList[0].title !== ''
  const isSelectMonsterItem = rankInputList.slice(1).some((v) => v.title !== '')
  const isFullMonsterItem = rankInputList.slice(1).every((v) => v.title !== '')

  const getUsageCountByTitle = (title: string) => {
    const filteringList = rankInputList.filter((v) => {
      return title === v.title
    })

    return filteringList.length
  }

  const findUsageTitleByKey = (key: number) => {
    return rankInputList.find((v) => v.key === key)?.title
  }

  const findUsageTokenIdByKey = (key: number) => {
    return rankInputList.find((v) => v.key === key)?.tokenId
  }

  const findUsageShadowIdByKey = (key: number) => {
    return rankInputList.find((v) => v.key === key)?.isShadow
  }

  const changeSelectItem = (
    key: number,
    title: string,
    tokenId: number,
    isShadow: boolean
  ) => {
    setSelectItemList((prev) => {
      return [...prev].map((v) => {
        if (key === v.key) {
          return v.title === title
            ? { ...v, title: '', tokenId: 0, isShadow: false }
            : { ...v, title, tokenId, isShadow }
        }

        return v
      })
    })
  }

  const deleteItemByKey = (key: number) => {
    setSelectItemList((prev) => {
      return [...prev].map((v) => {
        if (key === v.key) {
          return { ...v, title: '', tokenId: 0, isShadow: false }
        }

        return v
      })
    })
  }

  return {
    activateModalIdx,
    setActivateModalIdx,
    rankInputList,
    resetItemList,
    selectMonsterList,
    findUsageTitleByKey,
    findUsageTokenIdByKey,
    findUsageShadowIdByKey,
    getUsageCountByTitle,
    changeSelectItem,
    deleteItemByKey,
    hasShadowItem: isSelectShadowItem,
    hasMonsterItem: isSelectMonsterItem,
    isFullMonsterItem
  }
}

export default useRankStore
