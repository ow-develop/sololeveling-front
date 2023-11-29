import { BigNumber, ethers } from 'ethers'
import ContractABI from './abi/test-usdc.abi.json'
import ContractBase from '~/contracts/contract'
import Config from '~/config'

class TestUSDCContract extends ContractBase {
  constructor(signer?: ethers.Signer) {
    super(Config.TestUSDC, ContractABI, signer)
  }

  public async mint(address: string, amount: BigNumber) {
    const transaction = await this.contract.mint(address, amount)
    return await transaction.wait()
  }
}

export default TestUSDCContract
