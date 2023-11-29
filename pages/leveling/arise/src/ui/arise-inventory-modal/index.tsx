import { useMemo } from 'react'
import useSystemStore from '../../../../src/hooks/useSystemStore'
import useMonsterBalanceQuery from '../../../../src/hooks/useMonsterBalanceQuery'
import BottomSheetModal from '../../../../src/ui/bottom-sheet-modal'
import LevelingInventory from '../../../../src/ui/leveling-inventory'

const AriseInventoryModal = () => {
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
    <BottomSheetModal
      title={getMonsterCardTitle(selectRank)}
      onClear={onResetData}
    >
      <LevelingInventory
        selectItems={selectSystemItem}
        setSelectItems={(v) => setSelectSystemItem(v)}
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

export default AriseInventoryModal
