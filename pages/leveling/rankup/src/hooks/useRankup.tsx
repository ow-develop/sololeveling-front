import useRankStore from './useRankStore'
import useRankUpBalanceQuery from './useRankUpBalanceQuery'
import useRankUpStore from './useRankUpStore'
import useSystemStore from '../../../src/hooks/useSystemStore'
import { currentImgUrlSet } from '../features/rank-information/data'
import Config from '~/config'
import ReceiptModal from '~/common/modal/receipt-modal'
import { HunterRank } from '~/constants/hunter'
import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'
import useUserQuery from '~/hooks/queries/useUserQuery'
import useModal from '~/hooks/useModal'
import { convertToISOString } from '~/lib/ethers-util'
import { useI18next } from '~/lib/i18n'
import { RankUpMonsterList } from '~/types/season'
import { fetchRankUp } from '~/api/season'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import ERC1155Contract from '~/contracts/erc1155'
import { ERC1155CollectionType } from '~/constants/contracts'
import useIsApprovedQuery from '~/hooks/queries/useIsApprovedQuery'

const useRankUp = () => {
  const { resetItemList } = useRankUpStore()
  const { hasShadowItem } = useRankStore()
  const { refetch: userInfoRefetch } = useUserQuery()
  const { refetch: rankUpBalanceRefetch } = useRankUpBalanceQuery()
  const { rank, refetch: rankRefetch } = useHunterRankQuery()
  const { setSelectSystemItem } = useSystemStore()
  const { data: approvedMonster } = useIsApprovedQuery(
    ERC1155CollectionType.MONSTER,
    Config.Season
  )
  const {
    signer,
    contract: { SeasonContract }
  } = useWeb3AuthContext()
  const { openModal } = useModal()
  const { i18nextTranslate } = useI18next()

  const refetchData = () => {
    rankUpBalanceRefetch()
    userInfoRefetch()
    rankRefetch()
    setSelectSystemItem([])
  }

  const showReceiptModal = (txHash: string, rank: string) => {
    const description = i18nextTranslate(
      `You were promoted to {{value.rank}}-Rank Hunter.`,
      {
        value: {
          rank
        }
      }
    )

    return openModal(
      <ReceiptModal
        title='Rank Up'
        txHash={txHash}
        description={description}
        onClose={() => refetchData()}
      >
        <ReceiptModal.Block imgUrl={currentImgUrlSet[rank]} />
      </ReceiptModal>
    )
  }

  const rankUp = async (
    monsterIds: number[],
    monsterAmounts: number[],
    monsterList: RankUpMonsterList[]
  ) => {
    const { txHash, blockNumber, hunterRankUp } = await SeasonContract.rankUp(
      rank,
      monsterIds,
      monsterAmounts,
      hasShadowItem
    )

    const signature = await SeasonContract.getSignatureByTxHash(txHash)

    await fetchRankUp({
      signature,
      txHash,
      blockNumber,
      blockDate: convertToISOString(hunterRankUp.timestamp),
      hunterRankUp,
      rankUpMonsterList: monsterList,
      isShadow: hasShadowItem
    })

    await refetchData()
    resetItemList()

    showReceiptModal(txHash, HunterRank[hunterRankUp.rankType])
  }

  const approveCollection = async () => {
    const seasonContract = await new ERC1155Contract(
      ERC1155CollectionType.MONSTER
    ).initialize(signer)

    await seasonContract.setApproveForAll(Config.Season)
  }

  const handleRankUp = async (monsterSelect: RankUpMonsterList[]) => {
    if (!approvedMonster) {
      approveCollection()
    }

    const monsterIds: number[] = []
    const monsterAmounts: number[] = []
    const monsterList: RankUpMonsterList[] = []

    monsterSelect.forEach((monster) => {
      monsterIds.push(monster.monsterId)
      monsterAmounts.push(monster.amount)
      monsterList.push({
        monsterId: monster.monsterId,
        amount: monster.amount,
        isShadow: monster.isShadow
      })
    })

    await rankUp(monsterIds, monsterAmounts, monsterList)
  }

  return { handleRankUp }
}

export default useRankUp
