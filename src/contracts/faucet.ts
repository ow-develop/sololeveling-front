import { ethers } from 'ethers'
import ContractABI from './abi/faucet.abi.json'
import ContractBase from '~/contracts/contract'
import { getPrivateProvider } from '~/lib/ethers-util'
import Config from '~/config'

class FaucetContract extends ContractBase {
  constructor(signer?: ethers.Signer) {
    const provider = getPrivateProvider()

    super(
      Config.MaticFaucet,
      ContractABI,
      new ethers.Wallet(Config.PRIVATE_WALLET_KEY, provider)
    )
  }

  public async mint(address: string): Promise<void> {
    const transaction = await this.contract.mint(address)
    return await transaction.wait()
  }
}

export default FaucetContract
