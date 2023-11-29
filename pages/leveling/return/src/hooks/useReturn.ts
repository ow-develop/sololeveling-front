import useMonsterBalanceQuery from '../../../src/hooks/useMonsterBalanceQuery'
import useEssenceStoneQuery from '../../../src/hooks/useEssenceStoneQuery'
import useSystemStore from '../../../src/hooks/useSystemStore'

import { fetchMonsterReturn } from '~/api/system'
import { HunterRank } from '~/constants/hunter'
import { convertToISOString } from '~/lib/ethers-util'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const useReturn = () => {
  const { selectRank, selectSystemItem, setSelectSystemItem } = useSystemStore()
  const {
    signer,
    contract: { SystemContract }
  } = useWeb3AuthContext()

  const { refetch: refetchStoneBalance } = useEssenceStoneQuery()
  const {
    refetch: refetchGetMonsterBalanceByRank,
    refetch: refetchGetShadowBalanceByRank
  } = useMonsterBalanceQuery()

  const refetchData = () => {
    setSelectSystemItem([])
    refetchStoneBalance()
    refetchGetMonsterBalanceByRank()
    refetchGetShadowBalanceByRank()
  }

  const getMonsterRank = (
    selectRank: string
  ): {
    isShadow: boolean
    rank: HunterRank
  } => {
    let isShadow
    let rank

    if (selectRank.includes('Shadow')) {
      isShadow = true

      const shadowRank = selectRank.split('-')[1]
      rank = HunterRank[shadowRank]
    } else {
      isShadow = false

      const monsterRank = selectRank.split('-')[0]
      rank = HunterRank[monsterRank]
    }

    return {
      isShadow,
      rank
    }
  }

  const returnMonster = async () => {
    const monsterRank = getMonsterRank(selectRank)
    const monsterIds: number[] = []
    const monsterAmounts: number[] = []

    for (const item of selectSystemItem) {
      monsterIds.push(Number(item.idx))
      monsterAmounts.push(item.amount)
    }

    const { txHash, monsterReturned, blockNumber } =
      await SystemContract.returnMonster(
        monsterRank.rank,
        monsterIds,
        monsterAmounts,
        monsterRank.isShadow
      )

    const signature = await SystemContract.getSignatureByTxHash(txHash)

    await fetchMonsterReturn({
      signature,
      txHash,
      blockNumber,
      blockDate: convertToISOString(monsterReturned.timestamp),
      monsterReturned
    })

    await refetchData()

    return { txHash, blockNumber, monsterReturned }
  }

  return { returnMonster }
}

export default useReturn
