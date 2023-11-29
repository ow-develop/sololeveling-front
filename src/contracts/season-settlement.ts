import { ethers } from 'ethers'

import ContractABI from '~/contracts/abi/season-settlement.abi.json'
import ContractBase from '~/contracts/contract'
import { SeasonRewardClaimed } from '~/types/events'
import Config from '~/config'

class SeasonSettlementContract extends ContractBase {
  constructor(signer?: ethers.Signer) {
    super(Config.SeasonSettlement, ContractABI, signer)
  }

  public async claimSeasonReward(): Promise<{
    txHash: string
    seasonRewardClaimed: SeasonRewardClaimed
  }> {
    const transaction = await this.contract.claimSeasonReward(
      Config.CURRENT_SEASON_ID
    )
    const receipt = await transaction.wait()
    const seasonRewardClaimed = this.getEventArgs(
      receipt.events,
      'SeasonRewardClaimed'
    )

    return {
      txHash: receipt.transactionHash,
      seasonRewardClaimed: {
        seasonId: seasonRewardClaimed.seasonId.toNumber(),
        hunter: seasonRewardClaimed.hunter as string,
        mintedSeasonScore: seasonRewardClaimed.mintedSeasonScore.toNumber(),
        isSRankRewardTokenMinted: seasonRewardClaimed.isSRankRewardTokenMinted,
        SRankRewardTokenId: seasonRewardClaimed.SRankRewardTokenId.toNumber(),
        timestamp: seasonRewardClaimed.timestamp
      }
    }
  }

  public async isSeasonRewardClaimed(address: string): Promise<boolean> {
    return await this.contract.isSeasonRewardClaimed(
      Config.CURRENT_SEASON_ID,
      address
    )
  }
}

export default SeasonSettlementContract
