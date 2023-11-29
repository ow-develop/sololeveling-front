import { BigNumber, ethers } from 'ethers'

import ContractABI from './abi/dungeon_gate.abi.json'

import { ContractEventType } from '~/constants/contracts'
import { HunterRank } from '~/constants/hunter'
import ContractBase from '~/contracts/contract'
import { Gate, GateCleared, GateCreated } from '~/types/events'
import Config from '~/config'

class DungeonGateContract extends ContractBase {
  constructor(signer?: ethers.Signer) {
    super(Config.DungeonGate, ContractABI, signer)
  }

  public async getHunterSlot(
    hunter: string
  ): Promise<{ availableSlot: number; usingSlot: number }> {
    const hunterSlot = await this.contract.getHunterSlot(
      Config.CURRENT_SEASON_ID,
      hunter
    )
    return {
      availableSlot: hunterSlot.availableSlot.toNumber(),
      usingSlot: hunterSlot.usingSlot.toNumber()
    }
  }

  public async enterToGate(
    seasonId: number,
    gateRank: HunterRank
  ): Promise<{
    txHash: string
    blockNumber: number
    gateCreated: GateCreated
    timestamp: number
  }> {
    const transaction = await this.contract.enterToGate(seasonId, gateRank)

    const receipt = await transaction.wait()
    const gateCreated = this.getEventArgs(
      receipt.events,
      ContractEventType.GATE_CREATED
    )
    const timestamp = await this.getTimestamp(receipt.blockNumber)

    return {
      txHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      gateCreated: {
        seasonId: gateCreated.seasonId.toNumber(),
        gateRank: gateCreated.gateRank,
        hunter: gateCreated.hunter,
        gateId: gateCreated.gateId.toNumber(),
        startBlock: gateCreated.startBlock.toNumber(),
        endBlock: gateCreated.endBlock.toNumber()
      },
      timestamp
    }
  }

  public async clearGate(
    gateId: number,
    gateSignatures: string[]
  ): Promise<{
    txHash: string
    blockNumber: number
    gateCleared: GateCleared
  }> {
    const transaction = await this.contract.clearGate(gateId, gateSignatures)
    const receipt = await transaction.wait()
    const gateCleared = this.getEventArgs(
      receipt.events,
      ContractEventType.GATE_CLEARED
    )

    return {
      txHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      gateCleared: {
        gateRank: gateCleared.gateRank,
        hunter: gateCleared.hunter,
        gateId: gateCleared.gateId.toNumber(),
        seasonId: gateCleared.seasonId.toNumber(),
        gateSignatures: gateCleared.gateSignatures,
        monsterReward: {
          monsterIds: gateCleared.monsterReward.monsterIds.map(
            (item: BigNumber) => item.toNumber()
          ),
          monsterAmounts: gateCleared.monsterReward.monsterAmounts.map(
            (item: BigNumber) => item.toNumber()
          )
        },
        seasonPackReward: {
          seasonPackIds: gateCleared.seasonPackReward.seasonPackIds.map(
            (item: BigNumber) => item.toNumber()
          ),
          seasonPackAmounts: gateCleared.seasonPackReward.seasonPackAmounts.map(
            (item: BigNumber) => item.toNumber()
          )
        },
        timestamp: gateCleared.timestamp.toNumber(),
        usedStone: gateCleared.usedStone.toNumber()
      }
    }
  }

  public async getRequiredStoneForClear(gateId: number): Promise<number> {
    const requiredStoneForClear = await this.contract.getRequiredStoneForClear(
      gateId
    )

    return requiredStoneForClear.toNumber()
  }

  public async getGateOfHunterSlot(
    hunter: string
  ): Promise<{ gates: Gate[]; requiredStones: number[] }> {
    const data = await this.contract.getGateOfHunterSlot(hunter)

    const gates = data.gateOfHunterSlot.map((gate: any) => {
      return {
        id: gate.id.toNumber(),
        seasonId: gate.seasonId.toNumber(),
        startBlock: gate.startBlock,
        endBlock: gate.endBlock,
        requiredStones: gate.requiredStones,
        cleared: gate.cleared,
        gateRank: gate.gateRank,
        hunter: gate.hunter
      }
    })

    const requiredStones = data.requiredStones.map((stone: BigNumber) =>
      stone.toNumber()
    )

    return { gates, requiredStones }
  }
}

export default DungeonGateContract
