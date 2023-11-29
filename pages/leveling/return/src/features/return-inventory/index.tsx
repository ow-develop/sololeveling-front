import React, { useMemo } from 'react'

import useSystemStore from '../../../../src/hooks/useSystemStore'
import LevelingInventory from '../../../../src/ui/leveling-inventory'
import useMonsterBalanceQuery from '../../../../src/hooks/useMonsterBalanceQuery'

import Preparing from '~/common/preparing'
import { useI18next } from '~/lib/i18n'
import useBreakpoint from '~/hooks/useBreakpoint'
import LevelingInventorySkeleton from '../../../../src/ui/leveling-inventory-skleton'

const ReturnInventory = () => {
  const {
    getMonsterBalanceByRank,
    getShadowBalanceByRank,
    normalMonsterList,
    shadowMonsterList,
    isFetching
  } = useMonsterBalanceQuery()
  const { belowLargeWidth } = useBreakpoint()
  const { selectRank, setSelectSystemItem, selectSystemItem } = useSystemStore()
  const { t } = useI18next()

  const selectMonsterList = useMemo(() => {
    if (selectRank.includes('Shadow')) {
      const shadowRank = selectRank.split('-')[1]
      return getShadowBalanceByRank(shadowRank)
    } else {
      const monsterRank = selectRank.split('-')[0]
      console.log(monsterRank)
      return getMonsterBalanceByRank(monsterRank)
    }
  }, [selectRank, normalMonsterList, shadowMonsterList])

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
            subTitle={
              selectRank.includes('Shadow') ? t('Shadow Army') : t('Monster')
            }
            amount={amount}
            imgUrl={gifUrlCf || gifUrl || imgUrlCf || imgUrl}
            profile={profileCf || profile}
            type='full'
          />
        )
      )}
    </LevelingInventory>
  )
}

export default ReturnInventory
