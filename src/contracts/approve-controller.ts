import { ethers } from 'ethers'

import ContractABI from './abi/approve_controller.abi.json'

import ContractBase from '~/contracts/contract'
import Config from '~/config'

class ApproveControllerContract extends ContractBase {
  constructor(signer?: ethers.Signer) {
    super(Config.ApprovalController, ContractABI, signer)
  }

  public async isRevokedAccount(account: string): Promise<boolean> {
    return await this.contract.isRevokedAccount(account)
  }

  public async revoke(): Promise<boolean> {
    const transaction = await this.contract.revoke()

    const receipt = await transaction.wait()

    return true
  }

  public async approve(): Promise<boolean> {
    const transaction = await this.contract.approve()

    const receipt = await transaction.wait()

    return true
  }
}

export default ApproveControllerContract
