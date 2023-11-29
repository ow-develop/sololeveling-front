import React, { useMemo } from 'react'
import useSystemStore from '../../../../src/hooks/useSystemStore'
import LevelingInventory from '../../../../src/ui/leveling-inventory'

import Preparing from '~/common/preparing'
import { useI18next } from '~/lib/i18n'
import useBreakpoint from '~/hooks/useBreakpoint'
import useMonsterBalanceUpgradeQuery from '../../../../src/hooks/useMonsterBalanceUpgradeQuery'
import LevelingInventorySkeleton from '../../../../src/ui/leveling-inventory-skleton'

const UpgradeInventory = () => {
  const { getMonsterBalanceByRank, monsterList, isFetching } =
    useMonsterBalanceUpgradeQuery()
  const { belowLargeWidth } = useBreakpoint()
  const { selectRank, setSelectSystemItem, selectSystemItem } = useSystemStore()
  const { t } = useI18next()

  const selectMonsterList = useMemo(() => {
    const monsterRank = selectRank.split('-')[0]
    return getMonsterBalanceByRank(monsterRank)
  }, [selectRank, monsterList])

  if (selectMonsterList.length === 0)
    return <Preparing text='There are no items.' />

  if (isFetching) return <LevelingInventorySkeleton />

  return (
    <LevelingInventory
      selectItems={selectSystemItem}
      setSelectItems={(v) => setSelectSystemItem(v)}
      column={belowLargeWidth ? 1 : 2}
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
            gifUrlCf,
            gifUrl,
            profile,
            profileCf,
            isShadow
          },
          idx
        ) => (
          <LevelingInventory.Item
            key={idx}
            idx={tokenId}
            title={title}
            subTitle={isShadow ? t('Shadow Army') : t('Monster')}
            amount={amount}
            type='full'
            imgUrl={gifUrlCf || gifUrl || imgUrlCf || imgUrl}
            profile={profileCf || profile}
          />
        )
      )}
    </LevelingInventory>
  )
}

export default UpgradeInventory
