import useSystemStore from '../../../../src/hooks/useSystemStore'
import BottomSheetModal from '../../../../src/ui/bottom-sheet-modal'
import LevelingInventory from '../../../../src/ui/leveling-inventory'
import useRankUpBalanceQuery from '../../hooks/useRankUpBalanceQuery'

import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'
import { useI18next } from '~/lib/i18n'

const RankInventoryModal = () => {
  const { setSelectSystemItem, selectSystemItem } = useSystemStore()
  const { MonsterList } = useRankUpBalanceQuery()
  const { rank } = useHunterRankQuery()

  const { t } = useI18next()

  return (
    <BottomSheetModal
      title={t(`${rank}-Rank Monster`)}
      onClear={() => setSelectSystemItem([])}
    >
      <LevelingInventory
        selectItems={selectSystemItem}
        setSelectItems={(v) => {
          const totalSelectedItems = selectSystemItem.reduce(
            (sum, item) => sum + item.amount,
            0
          )
          if (totalSelectedItems < 10) {
            setSelectSystemItem(v)
          } else {
            return
          }
        }}
        multiple
      >
        {MonsterList.map(
          ({ tokenId, title, amount, imgUrl, imgUrlCf }, idx) => (
            <LevelingInventory.Item
              key={idx}
              idx={tokenId}
              title={title}
              subTitle={t('Monster')}
              amount={amount}
              imgUrl={imgUrlCf || imgUrl}
            />
          )
        )}
      </LevelingInventory>
    </BottomSheetModal>
  )
}

export default RankInventoryModal
