import useSystemStore from '../../../../src/hooks/useSystemStore'
import LevelingInventory from '../../../../src/ui/leveling-inventory'
import useRankUpBalanceQuery from '../../hooks/useRankUpBalanceQuery'

import Preparing from '~/common/preparing'
import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'
import { useI18next } from '~/lib/i18n'
import useBreakpoint from '~/hooks/useBreakpoint'
import LevelingInventorySkeleton from '../../../../src/ui/leveling-inventory-skleton'
import React from 'react'

const RankUpInventory = () => {
  const { setSelectSystemItem, selectSystemItem } = useSystemStore()
  const { MonsterList, isFetching } = useRankUpBalanceQuery()
  const { rank } = useHunterRankQuery()
  const { belowLargeWidth } = useBreakpoint()
  const { t } = useI18next()

  const isMaximumRank = rank === 'S'

  const totalSelectedItems = selectSystemItem.reduce(
    (sum, item) => sum + item.amount,
    0
  )

  if (isMaximumRank) return null

  if (MonsterList.length === 0) return <Preparing text='There are no items.' />

  if (isFetching) return <LevelingInventorySkeleton />

  return (
    <LevelingInventory
      selectItems={selectSystemItem}
      setSelectItems={(v) => {
        setSelectSystemItem(v)
      }}
      column={belowLargeWidth ? 1 : 2}
      multiple
    >
      {MonsterList.map(
        (
          { tokenId, title, amount, imgUrl, imgUrlCf, profile, profileCf },
          idx
        ) => (
          <LevelingInventory.Item
            key={idx}
            idx={tokenId}
            title={title}
            subTitle={t('Monster')}
            amount={amount}
            type='max'
            imgUrl={imgUrlCf || imgUrl}
            profile={profile || profileCf}
          />
        )
      )}
    </LevelingInventory>
  )
}

export default RankUpInventory
