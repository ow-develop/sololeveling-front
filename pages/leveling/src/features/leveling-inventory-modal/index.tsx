import { useMemo } from 'react'

import useSystemStore from '../../hooks/useSystemStore'
import BottomSheetModal from '../../ui/bottom-sheet-modal'
import LevelingInventory from '../../ui/leveling-inventory'
import useMonsterBalanceQuery from '../../hooks/useMonsterBalanceQuery'

const LevelingInventoryModal = () => {
  const { selectRank, selectSystemItem, setSelectSystemItem, onResetData } =
    useSystemStore()
  const {
    getMonsterBalanceByRank,
    getShadowBalanceByRank,
    normalMonsterList,
    shadowMonsterList
  } = useMonsterBalanceQuery()

  const selectMonsterList = useMemo(() => {
    if (selectRank.includes('Shadow')) {
      const shadowRank = selectRank.split('-')[1]
      return getShadowBalanceByRank(shadowRank)
    } else {
      const monsterRank = selectRank.split('-')[0]
      return getMonsterBalanceByRank(monsterRank)
    }
  }, [selectRank, normalMonsterList, shadowMonsterList])

  const getMonsterCardTitle = (selectRank: string): string => {
    if (selectRank.includes('Shadow')) {
      const shadowRank = selectRank.split('-')[1]

      return `${shadowRank}-Rank Shadow Army`
    } else {
      return `${selectRank} Monster`
    }
  }

  return (
    <BottomSheetModal onClear={onResetData}>
      <LevelingInventory
        selectItems={selectSystemItem}
        setSelectItems={(v) => setSelectSystemItem(v)}
        multiple
      >
        {selectMonsterList.map(
          (
            {
              tokenId,
              title,
              amount,
              imgUrl,
              imgUrlCf,
              gifUrl,
              gifUrlCf,
              isShadow
            },
            idx
          ) => (
            <LevelingInventory.Item
              key={idx}
              idx={tokenId}
              title={title}
              subTitle={isShadow ? 'Shadow Army' : 'Monster'}
              amount={amount}
              imgUrl={imgUrlCf || imgUrl}
              gifUrl={gifUrlCf || gifUrl}
            />
          )
        )}
      </LevelingInventory>
    </BottomSheetModal>
  )
}

export default LevelingInventoryModal
