import React, { useMemo } from 'react'
import LevelingInventory from '../../../../src/ui/leveling-inventory'
import Preparing from '~/common/preparing'
import useSystemStore from '../../../../src/hooks/useSystemStore'
import { useI18next } from '~/lib/i18n'
import useBreakpoint from '~/hooks/useBreakpoint'
import useGetAriseMonsterBalanceQuery from '../../hooks/useGetAriseMonsterBalanceQuery'
import LevelingInventorySkeleton from '../../../../src/ui/leveling-inventory-skleton'

const AriseInventory = () => {
  const {
    getMonsterSBalance,
    getShadowBBalance,
    getShadowABalance,
    nextMonsters,
    isFetching
  } = useGetAriseMonsterBalanceQuery()
  const { belowLargeWidth } = useBreakpoint()
  const { selectRank, setSelectSystemItem, selectSystemItem } = useSystemStore()
  const { t } = useI18next()

  const selectMonsterList = useMemo(() => {
    if (selectRank.includes('Shadow-B')) {
      const shadowRank = selectRank.split('-')[1]
      return getShadowBBalance(shadowRank)
    } else if (selectRank.includes('Shadow-A')) {
      const shadowRank = selectRank.split('-')[1]
      return getShadowABalance(shadowRank)
    } else {
      const monsterRank = selectRank.split('-')[0]
      return getMonsterSBalance(monsterRank)
    }
  }, [selectRank, getMonsterSBalance, getShadowABalance])

  // 선택한 몬스터를 조회하는 함수
  const findSelectedMonster = (idx: number) => {
    const selectedMonster = selectMonsterList.find(
      (monster) => monster.tokenId === idx
    )
    if (selectedMonster) {
      const nextMonster = nextMonsters[selectedMonster.rank]?.find(
        (monster: any) => monster.title === selectedMonster.nextMonster?.title
      )
      return { selectedMonster, nextMonster }
    }
    return { selectedMonster, nextMonster: null }
  }

  const handleMonsterClick = (idx: number) => {
    const selectedMonsterData = findSelectedMonster(idx)

    return { selectedMonsterData }
  }

  if (selectMonsterList.length === 0)
    return <Preparing text='There are no items.' />

  if (isFetching) return <LevelingInventorySkeleton />

  return (
    <LevelingInventory
      selectItems={selectSystemItem}
      setSelectItems={(v) => setSelectSystemItem(v)}
      column={belowLargeWidth ? 1 : 2}
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
            profile,
            profileCf,
            nextMonster
          },
          idx
        ) => (
          <LevelingInventory.Item
            key={idx}
            idx={tokenId}
            nextMonster={nextMonster}
            title={title}
            subTitle={
              selectRank.includes('S-Rank') ? t('Monster') : t('Shadow Army')
            }
            amount={amount}
            imgUrl={imgUrlCf || imgUrl}
            gifUrl={gifUrlCf || gifUrl}
            profile={profile || profileCf}
            onClick={() => {
              handleMonsterClick(tokenId)
            }}
          />
        )
      )}
    </LevelingInventory>
  )
}

export default AriseInventory
