import { Button } from '@ow-develop/ow-design-system'
import { AddIcon, ArrowBackIcon } from '@ow-develop/ow-icons/react/material'
import React, { useEffect, useMemo, useState } from 'react'
import Config from '~/config'
import {
  monsterImgSet,
  reseultCardImgSet,
  reseultTitleSet
} from '../../../../rankup/src/features/rank-information/data'
import useMonsterBalanceQuery from '../../../../src/hooks/useMonsterBalanceQuery'
import useEssenceStoneQuery from '../../../../src/hooks/useEssenceStoneQuery'
import useMonsterListQuery from '../../../../src/hooks/useMonsterListQuery'
import useSystemStore from '../../../../src/hooks/useSystemStore'
import {
  SystemActionBox,
  SystemCardBox,
  SystemIconUnit,
  SystemInformationLayout,
  SystemWarningUnit
} from '../../../../src/ui/style'
import LevelingInputCard from '../../../../src/ui/leveling-input-card'
import useUpgrade from '../../hooks/useUpgrade'
import { UpgradeReceiptModal } from '../upgrade-receipt-modal'
import UpgradeResultCard from '../upgrade-result-card'

import EssenceStoneImage from '~/assets/image/stone/essence_stone.webp'
import OpenEffect from '~/common/open-effect'
import SvgIcon from '~/common/svg-icon'
import { ERC1155CollectionType } from '~/constants/contracts'
import { HunterRank } from '~/constants/hunter'
import useIsApprovedQuery from '~/hooks/queries/useIsApprovedQuery'
import useModal from '~/hooks/useModal'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'
import { RewardMonster } from '~/types/dungeon'
import { findKeyByValue } from '~/utils/formatEnum'
import useBreakpoint from '~/hooks/useBreakpoint'
import BottomSheetModal from '../../../../src/ui/bottom-sheet-modal'
import UpgradeInventory from '../upgrade-inventory'
import { VideoType } from '~/constants/leveling'
import ERC1155Contract from '~/contracts/erc1155'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const UpgradeInformation = () => {
  const {
    selectRank,
    selectSystemItem,
    selectAllCount,
    setSelectSystemItem,
    onResetData
  } = useSystemStore()
  const { stoneBalance, refetch: refetchStoneBalance } = useEssenceStoneQuery()
  const {
    refetch: refetchGetMonsterBalanceByRank,
    refetch: refetchGetShadowBalanceByRank
  } = useMonsterBalanceQuery()
  const { data: isMonsterApproved } = useIsApprovedQuery(
    selectRank.includes('Shadow')
      ? ERC1155CollectionType.SHADOW_ARMY
      : ERC1155CollectionType.MONSTER,
    Config.System
  )
  const { data: isStoneApproved } = useIsApprovedQuery(
    ERC1155CollectionType.ESSENCE_STONE,
    Config.System
  )
  const { getMonsterByRank } = useMonsterListQuery()
  const { signer } = useWeb3AuthContext()
  const { upgrade } = useUpgrade()
  const { openModal } = useModal()
  const { transaction } = useTransactionHandler()
  const { belowMediumWidth } = useBreakpoint()
  const [isStoneInsufficient, setIsStoneInsufficient] = useState(false)
  const { t, i18nextTranslate } = useI18next()

  const cardImgUrls =
    selectSystemItem.length > 0 ? [monsterImgSet[selectRank]] : []

  const getMonsterCardTitle = (selectRank: string): string => {
    if (selectRank.includes('Shadow')) {
      const shadowRank = selectRank.split('-')[1]

      return `${shadowRank}-Rank Shadow Army`
    } else {
      return `${selectRank} Monster`
    }
  }

  const handleMobileAction = () =>
    openModal(
      <BottomSheetModal onClear={onResetData}>
        <UpgradeInventory />
      </BottomSheetModal>
    )

  // 최소 필요한 몬스터, 마정석 개수
  const monsterRequired = 2
  const stoneRequired = 10

  // 1회당 필요한 몬스터 요구치(3의 배수)
  const requireMonsterCount =
    Math.ceil(selectAllCount / monsterRequired) * monsterRequired

  // 1회당 필요한 마정석 개수(10씩 증가)
  const stoneRequirement =
    selectAllCount <= monsterRequired
      ? stoneRequired
      : stoneRequired + 10 * Math.floor((selectAllCount - 1) / monsterRequired)

  // 얻게되는 몬스터 카드 개수
  const resultCount = Math.floor(selectAllCount / monsterRequired)

  // 몬스터 카드 대비 마정석 개수 체크
  useEffect(() => {
    const isStoneInsufficient = stoneBalance < stoneRequirement
    setIsStoneInsufficient(isStoneInsufficient)
  }, [stoneBalance, selectAllCount])

  const disabled = useMemo(() => {
    return selectAllCount === requireMonsterCount && !isStoneInsufficient
  }, [selectAllCount, requireMonsterCount, isStoneInsufficient])

  const handleUpgrade = async () => {
    if (isMonsterApproved && isStoneApproved) {
      await approveCollection
    }

    const transaction = await upgrade(resultCount)

    if (!transaction) return

    const { txHash, monsterUpgraded } = transaction

    const description = i18nextTranslate(
      `{{value.amount}} of {{value.rank}} Monsters have been upgraded to {{value.upgradeAmount}} of {{value.upgradeRank}}.`,
      {
        value: {
          amount: selectAllCount,
          rank: t(selectRank),
          upgradeAmount: resultCount,
          upgradeRank: t(reseultTitleSet[selectRank])
        }
      }
    )

    const monsterList = await getMonsterByRank(
      false,
      findKeyByValue(monsterUpgraded.upgradedRank, HunterRank)
    )
    const resultMonsterList: RewardMonster[] = []

    for (const monsterId of monsterUpgraded.resultMonsterIds) {
      const index = resultMonsterList.findIndex(
        (m) => m.monsterId === monsterId
      )

      if (index === -1) {
        const monsterIndex = monsterList.findIndex(
          (m) => m.monsterId === monsterId
        )

        resultMonsterList.push({
          amount: 1,
          title: monsterList[monsterIndex].title,
          imgUrl:
            monsterList[monsterIndex].imgUrlCf ||
            monsterList[monsterIndex].imgUrl,
          profile:
            monsterList[monsterIndex].profileCf ||
            monsterList[monsterIndex].profile,
          type: 'Monster',
          rank: monsterList[monsterIndex].rank,
          monsterId: monsterList[monsterIndex].monsterId
        })
      } else {
        resultMonsterList[index].amount += 1
      }
    }

    openModal(
      <OpenEffect
        list={resultMonsterList}
        videoSrc={VideoType.UPGRADE}
        onClick={() =>
          openModal(
            <UpgradeReceiptModal
              txHash={txHash}
              list={resultMonsterList}
              description={description}
            />
          )
        }
      />
    )
  }

  const approveCollection = async () => {
    let monsterContract: ERC1155Contract

    monsterContract = new ERC1155Contract(
      ERC1155CollectionType.MONSTER
    ).initialize(signer)
    const stoneContract = new ERC1155Contract(
      ERC1155CollectionType.ESSENCE_STONE
    ).initialize(signer)

    await monsterContract.setApproveForAll(Config.System)
    await stoneContract.setApproveForAll(Config.System)
  }

  const handleContinue = async () => {
    await transaction({
      onSuccess: handleUpgrade
    })
  }

  return (
    <SystemInformationLayout>
      <SystemCardBox>
        <LevelingInputCard
          title={getMonsterCardTitle(selectRank)}
          imgUrls={cardImgUrls}
          count={selectAllCount}
          required={requireMonsterCount}
          increase={1}
          action={belowMediumWidth && handleMobileAction}
        />
        <SystemIconUnit>
          <SvgIcon icon={<AddIcon />} color='icon-weak' size={20} />
        </SystemIconUnit>
        <LevelingInputCard
          title='Essence Stone'
          imgUrls={[EssenceStoneImage.src]}
          count={stoneRequirement}
          max={stoneBalance}
          increase={1}
          isOwned={true}
          balance={stoneBalance}
          disabled={stoneBalance < 10}
        />
        <SystemIconUnit>
          <SvgIcon icon={<ArrowBackIcon />} color='icon-weak' size={20} />
        </SystemIconUnit>
        <UpgradeResultCard
          title={reseultTitleSet[selectRank]}
          resultImgUrl={reseultCardImgSet[selectRank]}
          count={resultCount}
        />
      </SystemCardBox>
      {isStoneInsufficient && (
        <SystemWarningUnit>
          {t('Insufficient Essence Stone for Upgrade')}
        </SystemWarningUnit>
      )}
      <SystemActionBox>
        <Button
          variant='secondary'
          width='fill'
          size='md'
          onClick={() => setSelectSystemItem([])}
          disabled={selectSystemItem.length === 0}
        >
          {t('Clear')}
        </Button>
        <Button
          width='fill'
          size='md'
          disabled={!disabled}
          onClick={handleContinue}
        >
          {t('Continue')}
        </Button>
      </SystemActionBox>
    </SystemInformationLayout>
  )
}

export default UpgradeInformation
