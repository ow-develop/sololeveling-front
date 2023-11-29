import { ethers } from 'ethers'

import ContractABI from './abi/gate-key.abi.json'

import { HunterRank } from '~/constants/hunter'
import ContractBase from '~/contracts/contract'
import { KeyMinted } from '~/types/events'
import Config from '~/config'
import { ContractEventType } from '~/constants/contracts'

class GateKeyContract extends ContractBase {
  constructor(signer?: ethers.Signer) {
    super(Config.GateKey, ContractABI, signer)
  }

  public async mintKeyByWhitelist(
    keyRank: HunterRank,
    amount: number,
    whitelistSignature: string
  ): Promise<{
    txHash: string
    blockNumber: number
    keyMinted: KeyMinted
  }> {
    const transaction = await this.contract.mintKeyByWhitelist(
      keyRank,
      amount,
      whitelistSignature
    )
    const receipt = await transaction.wait()
    const keyMinted = this.getEventArgs(
      receipt.events,
      ContractEventType.KEY_MINTED
    )

    return {
      txHash: receipt.transactionHash,
      blockNumber: receipt.blockNumber,
      keyMinted: {
        to: keyMinted.to,
        keyRank: keyMinted.keyRank,
        amount: keyMinted.amount.toNumber(),
        timestamp: keyMinted.timestamp.toNumber()
      }
    }
  }
}

export default GateKeyContract
