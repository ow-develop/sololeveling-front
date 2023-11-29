import { BigNumber, ethers } from 'ethers'

import ContractABI from './abi/season.abi.json'

import { HunterRank } from '~/constants/hunter'
import ContractBase from '~/contracts/contract'
import { HunterRankUp } from '~/types/events'
import Config from '~/config'
import { ContractEventType } from '~/constants/contracts'

class SeasonContract extends ContractBase {
  constructor(signer?: ethers.Signer) {
    super(Config.Season, ContractABI, signer)
  }

  public async getSeasonById(seasonId: number): Promise<{
    startBlock: number
    endBlock: number
    hunterRankCollectionId: number
    id: number
    seasonCollectionIds: number[]
  }> {
    const data = await this.contract.getSeasonById(seasonId)

    return {
      startBlock: data.startBlock,
      endBlock: data.endBlock,
      hunterRankCollectionId: data.hunterRankCollectionId.toNumber(),
      id: data.id.toNumber(),
      seasonCollectionIds: data.seasonCollectionIds.map(
        (collectionId: BigNumber) => collectionId.toNumber()
      )
    }
  }

  public async isCurrentSeasonById(): Promise<boolean> {
    return await this.contract.isCurrentSeasonById(Config.CURRENT_SEASON_ID)
  }

  public async getHunterRank(address: string): Promise<HunterRank> {
    return await this.contract.getHunterRank(Config.CURRENT_SEASON_ID, address)
  }

  public async getHunterRankTokenBalance(
    seasonId: number,
    address: string
  ): Promise<number[]> {
    const rankTokenList = await this.contract.getHunterRankTokenBalance(
      seasonId,
      address
    )

    return rankTokenList.map((tokenBalance: BigNumber) =>
      tokenBalance.toNumber()
    )
  }

  public async rankUp(
    hunterRank: string,
    monsterIds: number[],
    monsterAmounts: number[],
    isShadow: boolean
  ): Promise<{
    txHash: string
    blockNumber: number
    hunterRankUp: HunterRankUp
  }> {
    const transaction = await this.contract.rankUp(
      Config.CURRENT_SEASON_ID,
      HunterRank[hunterRank],
      monsterIds,
      monsterAmounts,
      isShadow
    )

    const receipt = await transaction.wait()
    const rankUp = this.getEventArgs(
      receipt.events,
      ContractEventType.HUNTER_RANK_UP
    )

    return {
      txHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      hunterRankUp: {
        seasonId: rankUp.seasonId.toNumber(),
        hunter: rankUp.hunter,
        rankType: rankUp.rankType,
        timestamp: rankUp.timestamp.toNumber()
      }
    }
  }
}

export default SeasonContract
