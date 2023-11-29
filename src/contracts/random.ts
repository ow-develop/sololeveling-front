import { ethers } from 'ethers'

import ContractABI from './abi/random.abi.json'

import ContractBase from '~/contracts/contract'
import { getPrivateProvider } from '~/lib/ethers-util'
import Config from '~/config'

class RandomContract extends ContractBase {
  constructor(signer?: ethers.Signer) {
    super(Config.Random, ContractABI, signer)
  }

  public async getRandomSigner(): Promise<ethers.Wallet> {
    const provider = getPrivateProvider()

    return new ethers.Wallet(Config.RANDOM_SIGNER_PRIVATE_KEY, provider)
  }

  public async getNonce(address: string): Promise<number> {
    return (await this.contract.getNonce(address)).toNumber()
  }
}

export default RandomContract
