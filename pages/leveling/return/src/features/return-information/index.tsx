import { Button, useToast } from '@ow-develop/ow-design-system'
import { ArrowBackIcon } from '@ow-develop/ow-icons/react/material'
import { useRouter } from 'next/router'
import useEssenceStoneQuery from '../../../../src/hooks/useEssenceStoneQuery'
import useSystemStore from '../../../../src/hooks/useSystemStore'
import {
  SystemActionBox,
  SystemCardBox,
  SystemIconUnit,
  SystemInformationLayout
} from '../../../../src/ui/style'
import LevelingInputCard from '../../../../src/ui/leveling-input-card'
import useMonsterBalanceQuery from '../../../../src/hooks/useMonsterBalanceQuery'
import useReturn from '../../hooks/useReturn'

import EssenceStoneImage from '~/assets/image/stone/essence_stone.webp'
import ReceiptModal from '~/common/modal/receipt-modal'
import SvgIcon from '~/common/svg-icon'
import { ERC1155CollectionType } from '~/constants/contracts'
import Config from '~/config'
import { HunterRank } from '~/constants/hunter'
import { InternalPath } from '~/constants/route'
import { returnReward } from '~/constants/system'
import useIsApprovedQuery from '~/hooks/queries/useIsApprovedQuery'
import useModal from '~/hooks/useModal'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'
import useBreakpoint from '~/hooks/useBreakpoint'
import { monsterImgSet } from '../../../../rankup/src/features/rank-information/data'
import BottomSheetModal from '../../../../src/ui/bottom-sheet-modal'
import ReturnInventory from '../return-inventory'
import ERC1155Contract from '~/contracts/erc1155'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const ReturnInformation = () => {
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
  const { data: isApproved } = useIsApprovedQuery(
    selectRank.includes('Shadow')
      ? ERC1155CollectionType.SHADOW_ARMY
      : ERC1155CollectionType.MONSTER,
    Config.System
  )
  const { openModal } = useModal()
  const { transaction } = useTransactionHandler()
  const { signer } = useWeb3AuthContext()
  const { returnMonster } = useReturn()
  const { belowMediumWidth } = useBreakpoint()

  const { t, i18nextTranslate } = useI18next()
  const { push } = useRouter()
  const { setToast } = useToast()

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
        <ReturnInventory />
      </BottomSheetModal>
    )

  const approveCollection = () => {
    let monsterContract: ERC1155Contract

    if (selectRank.includes('Shadow')) {
      monsterContract = new ERC1155Contract(
        ERC1155CollectionType.SHADOW_ARMY
      ).initialize(signer)
    } else {
      monsterContract = new ERC1155Contract(
        ERC1155CollectionType.MONSTER
      ).initialize(signer)
    }

    monsterContract.setApproveForAll(Config.System)
  }

  const handleReturn = async () => {
    if (!isApproved) {
      await approveCollection()
    }

    const transaction = await returnMonster()

    if (!transaction) return

    const { txHash, monsterReturned } = transaction

    const description = i18nextTranslate(
      `{{value.burnAmount}} of {{value.rank}}-Rank Monsters have been successfully returned to {{value.stoneAmount}} of Essence Stones.`,
      {
        value: {
          burnAmount: selectAllCount,
          rank: HunterRank[monsterReturned.monsterRank],
          stoneAmount: monsterReturned.essenceStone
        }
      }
    )

    openModal(
      <ReceiptModal
        title='Return'
        txHash={txHash}
        description={description}
        button={
          <Button
            width='fill'
            variant='secondary'
            size='sm'
            onClick={() => push(InternalPath.DUNGEON)}
          >
            {t('Go to Dungeon')}
          </Button>
        }
      >
        <ReceiptModal.Block imgUrl={EssenceStoneImage.src} />
      </ReceiptModal>
    )
  }

  const handleContinue = async () => {
    await transaction({
      onSuccess: handleReturn
    })
  }

  return (
    <SystemInformationLayout>
      <SystemCardBox>
        <LevelingInputCard
          title={getMonsterCardTitle(selectRank)}
          imgUrls={cardImgUrls}
          count={selectAllCount}
          increase={1}
          action={belowMediumWidth && handleMobileAction}
        />
        <SystemIconUnit>
          <SvgIcon icon={<ArrowBackIcon />} color='icon-weak' size={20} />
        </SystemIconUnit>
        <LevelingInputCard
          title='Essence Stone'
          imgUrls={[EssenceStoneImage.src]}
          count={returnReward[selectRank] * selectAllCount}
          increase={1}
          isOwned={true}
          balance={stoneBalance}
        />
      </SystemCardBox>

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
          disabled={selectSystemItem.length === 0}
        >
          {t('Continue')}
        </Button>
      </SystemActionBox>
    </SystemInformationLayout>
  )
}

export default ReturnInformation
