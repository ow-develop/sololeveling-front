import useSystemStore from '../../../src/hooks/useSystemStore'
import useEssenceStoneQuery from '../../../src/hooks/useEssenceStoneQuery'
import useMonsterBalanceQuery from '../../../src/hooks/useMonsterBalanceQuery'
import useAuth from '~/hooks/useAuth'
import { HunterRank } from '~/constants/hunter'
import { ethers } from 'ethers'
import { convertToISOString } from '~/lib/ethers-util'
import { fetchMonsterArise } from '~/api/system'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const useArise = () => {
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

  const getNextMonsterRank = (
    selectRank: string
  ): {
    rank: HunterRank
  } => {
    if (selectRank.includes('Shadow-')) {
      const monsterRank = selectRank.replace('Shadow-', '')
      return { rank: HunterRank[monsterRank] + 1 }
    } else {
      return { rank: HunterRank['B'] }
    }
  }

  const createAriseSignatures = async (randomCount: number) => {
    const randomSigner = await RandomContract.getRandomSigner()
    const nonce = await RandomContract.getNonce(address)

    const ariseSignatures: string[] = []
    let hunterNonce = nonce

    for (let i = 0; i < randomCount; i++) {
      const messageHash = ethers.utils.solidityKeccak256(
        ['address', 'uint256'],
        [address, hunterNonce]
      )
      const messageBinary = ethers.utils.arrayify(messageHash)
      const ariseSignature = await randomSigner.signMessage(messageBinary)
      ariseSignatures.push(ariseSignature)
      hunterNonce += 1
    }

    return ariseSignatures
  }

  const arise = async (requestAmount: number) => {
    const monsterRank = getNextMonsterRank(selectRank)
    const monsterSignatures: string[] = await createAriseSignatures(
      requestAmount
    )

    const monsterId = selectSystemItem[0]?.idx

    const { txHash, monsterArose, blockNumber } =
      await SystemContract.ariseMonster(
        monsterRank.rank,
        monsterId,
        requestAmount,
        monsterSignatures
      )

    const signature = await SystemContract.getSignatureByTxHash(txHash)

    await fetchMonsterArise({
      signature,
      txHash,
      blockNumber,
      blockDate: convertToISOString(monsterArose.timestamp),
      monsterArose
    })

    await refetchData()

    return { txHash, blockNumber, monsterArose }
  }

  return { arise }
}

export default useArise
