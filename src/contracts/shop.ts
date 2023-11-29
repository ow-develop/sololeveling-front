import { BigNumber, ethers } from 'ethers'

import { ContractEventType } from '~/constants/contracts'
import { HunterRank } from '~/constants/hunter'
import ContractABI from '~/contracts/abi/shop.abi.json'
import ContractBase from '~/contracts/contract'
import { convertUSDCToUSD } from '~/lib/ethers-util'
import { HunterRankType } from '~/types/common'
import { KeySold, StoneSold } from '~/types/events'
import { findKeyByValue } from '~/utils/formatEnum'
import Config from '~/config'

class ShopContract extends ContractBase {
  constructor(signer?: ethers.Signer) {
    super(Config.Shop, ContractABI, signer)
  }

  public async getLatestKeyPrice(hunterRank: HunterRank): Promise<BigNumber> {
    return await this.contract.getLatestKeyPrice(hunterRank)
  }

  public async buyKey(
    address: string,
    keyRank: HunterRankType,
    amount: number
  ): Promise<{
    txHash: string
    blockNumber: number
    keySold: KeySold
  }> {
    const transaction = await this.contract.buyKey(
      address,
      findKeyByValue(keyRank, HunterRank),
      amount
    )

    const receipt = await transaction.wait()
    const keySold = this.getEventArgs(
      receipt.events,
      ContractEventType.KEY_SOLD
    )

    return {
      txHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      keySold: {
        to: keySold.to,
        buyer: keySold.buyer,
        price: convertUSDCToUSD(keySold.price),
        keyRank: keySold.keyRank,
        timestamp: keySold.timestamp.toNumber(),
        amount: keySold.amount.toNumber()
      }
    }
  }

  public async buyStone(
    address: string,
    amount: number
  ): Promise<{
    txHash: string
    blockNumber: number
    stoneSold: StoneSold
  }> {
    const transaction = await this.contract.buyStone(address, amount)
    const receipt = await transaction.wait()
    const stoneSold = this.getEventArgs(
      receipt.events,
      ContractEventType.STONE_SOLD
    )

    return {
      txHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      stoneSold: {
        buyer: stoneSold.buyer,
        to: stoneSold.to,
        amount: stoneSold.amount.toNumber(),
        price: convertUSDCToUSD(stoneSold.price),
        timestamp: stoneSold.timestamp.toNumber()
      }
    }
  }
}

export default ShopContract
