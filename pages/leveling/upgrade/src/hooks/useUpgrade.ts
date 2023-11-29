import { ethers } from 'ethers'

import useMonsterBalanceQuery from '../../../src/hooks/useMonsterBalanceQuery'
import useEssenceStoneQuery from '../../../src/hooks/useEssenceStoneQuery'
import useSystemStore from '../../../src/hooks/useSystemStore'

import { fetchMonsterUpgrade } from '~/api/system'
import { HunterRank } from '~/constants/hunter'
import useAuth from '~/hooks/useAuth'
import { convertToISOString } from '~/lib/ethers-util'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const useUpgrade = () => {
  const { selectRank, selectSystemItem, setSelectSystemItem } = useSystemStore()
  const { address } = useAuth()
  const { refetch: refetchStoneBalance } = useEssenceStoneQuery()
  const {
    refetch: refetchGetMonsterBalanceByRank,
    refetch: refetchGetShadowBalanceByRank
  } = useMonsterBalanceQuery()
  const {
    signer,
    contract: { RandomContract, SystemContract }
  } = useWeb3AuthContext()

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

  const createUpgradeSignatures = async (randomCount: number) => {
    const randomSigner = await RandomContract.getRandomSigner()
    const nonce = await RandomContract.getNonce(address)

    const upgradeSignatures: string[] = []
    let hunterNonce = nonce

    for (let i = 0; i < randomCount; i++) {
      const messageHash = ethers.utils.solidityKeccak256(
        ['address', 'uint256'],
        [address, hunterNonce]
      )
      const messageBinary = ethers.utils.arrayify(messageHash)
      const upgradeSignature = await randomSigner.signMessage(messageBinary)
      upgradeSignatures.push(upgradeSignature)
      hunterNonce += 1
    }

    return upgradeSignatures
  }

  const upgrade = async (requestAmount: number) => {
    const monsterRank = getMonsterRank(selectRank)
    const monsterIds: number[] = []
    const monsterAmounts: number[] = []
    const monsterSignatures: string[] = await createUpgradeSignatures(
      requestAmount
    )

    for (const item of selectSystemItem) {
      monsterIds.push(Number(item.idx))
      monsterAmounts.push(item.amount)
    }

    const useMonster = {
      monsterIds: monsterIds,
      monsterAmounts: monsterAmounts
    }

    const { txHash, monsterUpgraded, blockNumber } =
      await SystemContract.upgradeMonster(
        monsterRank.rank,
        requestAmount,
        useMonster,
        monsterSignatures
      )

    const signature = await SystemContract.getSignatureByTxHash(txHash)

    await fetchMonsterUpgrade({
      signature,
      txHash,
      blockNumber,
      blockDate: convertToISOString(monsterUpgraded.timestamp),
      monsterUpgraded
    })

    await refetchData()

    return { txHash, blockNumber, monsterUpgraded }
  }

  return { upgrade }
}

export default useUpgrade
