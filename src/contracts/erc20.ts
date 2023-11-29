import { BigNumber, ethers } from 'ethers'

import ContractABI from './abi/erc20.abi.json'
import ContractBase from '~/contracts/contract'
import { convertUSDToUSDC } from '~/lib/ethers-util'

class ERC20Contract extends ContractBase {
  constructor(contractAddress: string, signer?: ethers.Signer) {
    super(contractAddress, ContractABI, signer)
  }

  public async balanceOf(): Promise<BigNumber> {
    const owner = await this.getContractSigner().getAddress()

    return await this.contract.balanceOf(owner)
  }

  public async allowance(to: string): Promise<BigNumber> {
    const owner = await this.getContractSigner().getAddress()
    return await this.contract.allowance(owner, to)
  }

  public async approve(to: string): Promise<void> {
    const transaction = await this.contract.approve(
      to,
      convertUSDToUSDC(1000000000)
    )

    return await transaction.wait()
  }
}

export default ERC20Contract
