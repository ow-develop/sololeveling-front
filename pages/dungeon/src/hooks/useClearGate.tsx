import { ethers } from 'ethers'
import React from 'react'

import useGateQuery from './useGateQuery'
import useMonsterListQuery from '../../../leveling/src/hooks/useMonsterListQuery'
import { GateReceiptModal } from '../ui/gate-receipt-modal'

import { getSeasonPackList } from '~/api/collection'
import { fetchClearGate } from '~/api/dungeon'
import OpenEffect from '~/common/open-effect'
import Config from '~/config'
import { ERC1155CollectionType } from '~/constants/contracts'
import { GateRandomCount } from '~/constants/dungeon'
import { ErrorMessage } from '~/constants/message'
import ERC1155Contract from '~/contracts/erc1155'
import useModal from '~/hooks/useModal'
import { convertToISOString } from '~/lib/ethers-util'
import { HunterRankType } from '~/types/common'
import { RewardMonster } from '~/types/dungeon'
import { GateCleared } from '~/types/events'
import { findKeyByValue } from '~/utils/formatEnum'

import { VideoType } from '~/constants/leveling'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import useAuth from '~/hooks/useAuth'

const useClearGate = () => {
  const { openModal } = useModal()
  const { refetch } = useGateQuery()
  const { address } = useAuth()
  const { data: monsterListResponse } = useMonsterListQuery()
  const {
    signer,
    contract: { DungeonGateContract, RandomContract }
  } = useWeb3AuthContext()

  const createGateSignatures = async (randomCount: number) => {
    const randomSigner = await RandomContract.getRandomSigner()
    const nonce = await RandomContract.getNonce(address)

    const gateSignatures: string[] = []
    let hunterNonce = nonce

    for (let i = 0; i < randomCount; i++) {
      const messageHash = ethers.utils.solidityKeccak256(
        ['address', 'uint256'],
        [address, hunterNonce]
      )
      const messageBinary = ethers.utils.arrayify(messageHash)
      const gateSignature = await randomSigner.signMessage(messageBinary)
      gateSignatures.push(gateSignature)
      hunterNonce += 1
    }

    return gateSignatures
  }

  const getMyStoneBalance = async (address: string) => {
    const essenceStoneContract = new ERC1155Contract(
      ERC1155CollectionType.ESSENCE_STONE
    ).initialize(signer)

    return Number(
      await essenceStoneContract.balanceOf(
        address,
        Config.ESSENCE_STONE_TOKEN_ID
      )
    )
  }

  const checkMyBalanceForClear = async (gateId: number) => {
    const stoneBalance = await getMyStoneBalance(address)

    const requiredStone = await DungeonGateContract.getRequiredStoneForClear(
      gateId
    )

    if (requiredStone === 0) return

    if (requiredStone > stoneBalance) {
      throw new Error(ErrorMessage.INSUFFICIENT_STONE)
    }
  }

  const clearGateOnTransaction = async (
    gateId: number,
    rank: HunterRankType
  ) => {
    await checkMyBalanceForClear(gateId)
    const randomCount = findKeyByValue(rank, GateRandomCount)
    const gateSignatures = await createGateSignatures(randomCount)
    const { txHash, blockNumber, gateCleared } =
      await DungeonGateContract.clearGate(gateId, gateSignatures)
    const signature = await DungeonGateContract.getSignatureByTxHash(txHash)

    fetchClearGate({
      signature,
      txHash,
      blockNumber,
      blockDate: convertToISOString(gateCleared.timestamp),
      gateCleared
    })
      .then((res) => console.log(res.data.message))
      .catch((err) => console.error(err))

    return {
      txHash,
      blockNumber,
      gateCleared
    }
  }

  const convertMonstersToList = async (gateCleared: GateCleared) => {
    const normalMonsters: RewardMonster[] =
      gateCleared.monsterReward.monsterIds.map((monsterId, index) => {
        const data = monsterListResponse.monster.find(
          (monster) => monster.monsterId === monsterId
        )

        return {
          amount: gateCleared.monsterReward.monsterAmounts[index],
          imgUrl: data.imgUrlCf || data.imgUrl,
          profile: data.profileCf || data.profile,
          title: data.title,
          type: 'Monster',
          rank: data.rank
        }
      })

    const seasonPackData = await getSeasonPackList().catch((err) => {
      console.error(err)
      return []
    })

    const seasonPacks: RewardMonster[] =
      gateCleared.seasonPackReward.seasonPackIds.map((seasonPackId, index) => {
        const data = seasonPackData.find(
          (seasonPack) => seasonPack.seasonPackId === seasonPackId
        )

        return {
          amount: gateCleared.seasonPackReward.seasonPackAmounts[index],
          imgUrl: data?.imgUrlCf || data?.imgUrl,
          title: data?.title,
          type: `Season Pack`
        }
      })

    const result: RewardMonster[] = [].concat(normalMonsters, seasonPacks)

    const order = {
      E: 5,
      D: 4,
      C: 3,
      B: 2,
      A: 1,
      S: 0,
      'Season Pack': 6
    }

    return {
      monsterList: [...result].sort((a, b) => {
        const typeA = a.type
        const typeB = b.type

        return order[typeA] - order[typeB]
      }),
      shuffleList: [...result].sort(() => Math.random() - 0.5)
    }
  }

  const clearGateForComplete = async ({
    gateId,
    callBack,
    rank
  }: {
    gateId: number
    callBack: () => void
    rank: HunterRankType
  }) => {
    const randomCount = findKeyByValue(rank, GateRandomCount)
    const gateSignatures = await createGateSignatures(randomCount)
    const { txHash, blockNumber, gateCleared } =
      await DungeonGateContract.clearGate(gateId, gateSignatures)
    const signature = await DungeonGateContract.getSignatureByTxHash(txHash)

    fetchClearGate({
      signature,
      txHash,
      blockNumber,
      blockDate: convertToISOString(gateCleared.timestamp),
      gateCleared
    })

    const { monsterList, shuffleList } = await convertMonstersToList(
      gateCleared
    )

    openModal(
      <OpenEffect
        list={shuffleList}
        videoSrc={VideoType.GATE_CLEAR}
        onClick={() =>
          openModal(
            <GateReceiptModal
              status='complete'
              txHash={txHash}
              list={monsterList}
              usedStone={gateCleared.usedStone}
              onClose={() => refetch().then(callBack)}
            />
          )
        }
      />
    )
  }

  const afterClearGate = async (txHash: string, gateCleared: GateCleared) => {
    const { monsterList, shuffleList } = await convertMonstersToList(
      gateCleared
    )

    openModal(
      <OpenEffect
        list={shuffleList}
        videoSrc={VideoType.GATE_CLEAR}
        onClick={() =>
          openModal(
            <GateReceiptModal
              status='complete'
              txHash={txHash}
              list={monsterList}
              usedStone={gateCleared.usedStone}
            />
          )
        }
      />
    )
  }

  const clearGate = async ({
    gateId,
    callBack,
    rank
  }: {
    gateId: number
    callBack: () => void
    rank: HunterRankType
  }) => {
    const { gateCleared, txHash } = await clearGateOnTransaction(gateId, rank)

    await afterClearGate(txHash, gateCleared)
  }

  return { clearGateOnTransaction, clearGate, clearGateForComplete }
}

export default useClearGate
