import { BigNumber, ethers } from 'ethers'

import ContractABI from './abi/system.abi.json'

import { ContractEventType } from '~/constants/contracts'
import { HunterRank, UseMonster } from '~/constants/hunter'
import ContractBase from '~/contracts/contract'
import { MonsterArose, MonsterReturned, MonsterUpgraded } from '~/types/events'
import Config from '~/config'

class SystemContract extends ContractBase {
  constructor(signer?: ethers.Signer) {
    super(Config.System, ContractABI, signer)
  }

  public async ariseMonster(
    nextMonsterRank: HunterRank,
    monsterId: number,
    requestAmount: number,
    monsterSignatures: string[]
  ): Promise<{
    txHash: string
    blockNumber: number
    monsterArose: MonsterArose
  }> {
    const transaction = await this.contract.ariseMonster(
      nextMonsterRank,
      monsterId,
      requestAmount,
      monsterSignatures
    )
    const receipt = await transaction.wait()

    const monsterArose = this.getEventArgs(
      receipt.events,
      ContractEventType.MONSTER_AROSE
    )

    return {
      txHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      monsterArose: {
        hunter: monsterArose.hunter,
        nextMonsterRank: monsterArose.nextMonsterRank,
        monsterId: monsterArose.monsterId.toNumber(),
        requestAmount: monsterArose.requestAmount.toNumber(),
        aroseCount: monsterArose.aroseCount.toNumber(),
        usedStone: monsterArose.usedStone.toNumber(),
        isSuccess: monsterArose.isSuccess,
        nextMonsterId: monsterArose.nextMonsterId.toNumber(),
        timestamp: monsterArose.timestamp.toNumber()
      }
    }
  }

  public async upgradeMonster(
    monsterRank: HunterRank,
    requestAmount: number,
    useMonster: UseMonster,
    monsterSignatures: string[]
  ): Promise<{
    txHash: string
    blockNumber: number
    monsterUpgraded: MonsterUpgraded
  }> {
    const transaction = await this.contract.upgradeMonster(
      monsterRank,
      requestAmount,
      useMonster,
      monsterSignatures
    )
    const receipt = await transaction.wait()

    const monsterUpgraded = this.getEventArgs(
      receipt.events,
      ContractEventType.MONSTER_UPGRADED
    )

    return {
      txHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      monsterUpgraded: {
        hunter: monsterUpgraded.hunter,
        upgradedRank: monsterUpgraded.upgradedRank,
        upgradedAmount: monsterUpgraded.upgradedAmount.toNumber(),
        usedMonster: {
          monsterIds: monsterUpgraded.usedMonster.monsterIds.map(
            (item: BigNumber) => item.toNumber()
          ),
          monsterAmounts: monsterUpgraded.usedMonster.monsterAmounts.map(
            (item: BigNumber) => item.toNumber()
          )
        },
        usedStone: monsterUpgraded.usedStone.toNumber(),
        resultMonsterIds: monsterUpgraded.resultMonsterIds.map(
          (item: BigNumber) => item.toNumber()
        ),
        timestamp: monsterUpgraded.timestamp.toNumber()
      }
    }
  }

  public async returnMonster(
    monsterRank: HunterRank,
    monsterIds: number[],
    monsterAmounts: number[],
    isShadow: boolean
  ): Promise<{
    txHash: string
    blockNumber: number
    monsterReturned: MonsterReturned
  }> {
    const transaction = await this.contract.returnMonster(
      monsterRank,
      monsterIds,
      monsterAmounts,
      isShadow
    )
    const receipt = await transaction.wait()
    const monsterReturned = this.getEventArgs(
      receipt.events,
      ContractEventType.MONSTER_RETURNED
    )

    return {
      txHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      monsterReturned: {
        hunter: monsterReturned.hunter,
        monsterRank: monsterReturned.monsterRank,
        isShadow: monsterReturned.isShadow,
        essenceStone: monsterReturned.essenceStone.toNumber(),
        monsterIds: monsterReturned.monsterIds.map((id: BigNumber) =>
          id.toNumber()
        ),
        monsterAmounts: monsterReturned.monsterAmounts.map(
          (amount: BigNumber) => amount.toNumber()
        ),
        timestamp: monsterReturned.timestamp.toNumber()
      }
    }
  }
}

export default SystemContract
