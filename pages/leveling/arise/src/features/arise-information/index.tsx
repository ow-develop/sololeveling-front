import React, { useEffect, useMemo, useState } from 'react'
import {
  SystemActionBox,
  SystemCardBox,
  SystemIconUnit,
  SystemInformationLayout,
  SystemMessageUnit,
  SystemWarningUnit
} from '../../../../src/ui/style'
import LevelingInputCard from '../../../../src/ui/leveling-input-card'
import SvgIcon from '~/common/svg-icon'
import { AddIcon, ArrowBackIcon } from '@ow-develop/ow-icons/react/material'
import EssenceStoneImage from '~/assets/image/stone/essence_stone.webp'
import {
  reseultCardImgSet,
  reseultTitleSet
} from '../../../../rankup/src/features/rank-information/data'
import Config from '~/config'
import { Button } from '@ow-develop/ow-design-system'
import { useI18next } from '~/lib/i18n'
import useEssenceStoneQuery from '../../../../src/hooks/useEssenceStoneQuery'
import useSystemStore from '../../../../src/hooks/useSystemStore'
import AriseResultCard from '../arise-result-card'
import useBreakpoint from '~/hooks/useBreakpoint'
import useModal from '~/hooks/useModal'
import AriseTry from '../../ui/arise-try'
import useArise from '../../hooks/useArise'
import useIsApprovedQuery from '~/hooks/queries/useIsApprovedQuery'
import { ERC1155CollectionType } from '~/constants/contracts'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import AriseInventory from '../arise-inventory'
import BottomSheetModal from '../../../../src/ui/bottom-sheet-modal'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import useApproveCollection from '~/hooks/useApproveCollection'

const AriseInformation = () => {
  const { arise } = useArise()
  const { stoneBalance, refetch: refetchStoneBalance } = useEssenceStoneQuery()
  const { selectRank, selectSystemItem, setSelectSystemItem, onResetData } =
    useSystemStore()
  const { data: isMonsterApproved } = useIsApprovedQuery(
    ERC1155CollectionType.MONSTER,
    Config.System
  )
  const { data: isShadowApproved } = useIsApprovedQuery(
    ERC1155CollectionType.SHADOW_ARMY,
    Config.System
  )
  const { data: isStoneApproved } = useIsApprovedQuery(
    ERC1155CollectionType.ESSENCE_STONE,
    Config.System
  )
  const { approveCollection } = useApproveCollection()
  const { transaction } = useTransactionHandler()
  const { openModal } = useModal()
  const { belowMediumWidth } = useBreakpoint()
  const [isStoneInsufficient, setIsStoneInsufficient] = useState(false)
  const [stoneCount, setStoneCount] = useState(stoneBalance)
  const { signer } = useWeb3AuthContext()
  const { t } = useI18next()

  const isSelected = selectSystemItem.length > 0
  const nextMonsterData = isSelected && selectSystemItem[0].nextMonster
  const selectedItem = selectSystemItem[0]

  const cardTitles = isSelected ? selectedItem.title : ''
  const cardImgUrls = isSelected
    ? [
        selectedItem.gifUrlCf ||
          selectedItem.gifUrl ||
          selectedItem.imgUrlCf ||
          selectedItem.imgUrl
      ]
    : []
  const nextMonsterTitles = nextMonsterData
    ? t([selectedItem.nextMonster?.title])
    : reseultTitleSet[selectRank]
  const nextMonsterImgUrls = nextMonsterData
    ? [selectedItem.nextMonster?.gifUrlCf || selectedItem.gifUrl]
    : reseultCardImgSet[selectRank]
  const nextMonsterRank = nextMonsterData && selectedItem.nextMonster?.rank

  const requestAmount = Math.floor(stoneCount / 100)
  const disabled = useMemo(() => {
    return !isStoneInsufficient && isSelected
  }, [isStoneInsufficient, isSelected])

  const handleMobileAction = () =>
    openModal(
      <BottomSheetModal onClear={onResetData}>
        <AriseInventory />
      </BottomSheetModal>
    )

  const handleArise = async () => {
    if (!isStoneApproved) {
      await approveCollection(
        ERC1155CollectionType.ESSENCE_STONE,
        Config.System
      )
    }

    if (selectRank.includes('Shadow')) {
      if (!isShadowApproved) {
        await approveCollection(
          ERC1155CollectionType.SHADOW_ARMY,
          Config.System
        )
      }
    } else {
      if (!isMonsterApproved) {
        await approveCollection(ERC1155CollectionType.MONSTER, Config.System)
      }
    }

    const transaction = await arise(requestAmount)

    if (!transaction) return

    const { monsterArose } = transaction

    openModal(
      <AriseTry
        requestAmount={monsterArose.requestAmount}
        isSuccess={monsterArose.isSuccess}
        aroseCount={monsterArose.aroseCount}
        rank={nextMonsterRank}
        title={nextMonsterTitles}
        imgUrl={nextMonsterImgUrls}
        usedStone={monsterArose.usedStone}
      />
    )

    setStoneCount(100)
  }

  const handleContinue = async () => {
    await transaction({
      onSuccess: handleArise
    })
  }

  // 마정석 개수 체크
  useEffect(() => {
    const isStoneInsufficient = stoneBalance < 100
    setIsStoneInsufficient(isStoneInsufficient)
  }, [stoneBalance])

  return (
    <SystemInformationLayout>
      <SystemCardBox>
        <LevelingInputCard
          title={cardTitles}
          imgUrls={cardImgUrls}
          increase={1}
          action={belowMediumWidth && handleMobileAction}
        />
        <SystemIconUnit>
          <SvgIcon icon={<AddIcon />} color='icon-weak' size={20} />
        </SystemIconUnit>
        <LevelingInputCard
          title='Essence Stone'
          imgUrls={[EssenceStoneImage.src]}
          max={stoneBalance}
          count={stoneCount}
          setCount={setStoneCount}
          increase={100}
          isOwned={true}
          balance={stoneBalance}
          disabled={stoneBalance < 100}
        />
        <SystemIconUnit>
          <SvgIcon icon={<ArrowBackIcon />} color='icon-weak' size={20} />
        </SystemIconUnit>
        <AriseResultCard
          title={t(nextMonsterTitles)}
          isShadow={!!nextMonsterData}
          resultImgUrl={nextMonsterImgUrls}
          shadowRank={selectRank}
          count={requestAmount}
        />
      </SystemCardBox>

      {isStoneInsufficient ? (
        <SystemWarningUnit>
          {t('Insufficient Essence Stone for Arise')}
        </SystemWarningUnit>
      ) : (
        <SystemMessageUnit>
          {t(
            'If Arise fails, no monsters are consumed. \\nIf Arise succeeds, Arise stops and any Monsters and Essence Stones used are consumed.'
          )
            .split('\\n')
            .map((line: string, idx: number) => (
              <div key={idx}>{line}</div>
            ))}
        </SystemMessageUnit>
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
          onClick={handleContinue}
          disabled={!disabled}
        >
          {t('Continue')}
        </Button>
      </SystemActionBox>
    </SystemInformationLayout>
  )
}

export default AriseInformation
