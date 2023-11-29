import { Contract, ethers, Signer } from 'ethers'

import { getPrivateProvider } from '~/lib/ethers-util'
import Config from '~/config'

abstract class ContractBase {
  protected contract: Contract

  constructor(contractAddress: string, abi: any, signer?: ethers.Signer) {
    const contractInterface = new ethers.utils.Interface(abi)

    this.contract = new ethers.Contract(
      contractAddress,
      contractInterface,
      signer
    )
  }

  public initialize(signer?: Signer) {
    this.setContractSigner(signer)
    return this
  }

  public async getSignatureByTxHash(txHash: string) {
    const provider = getPrivateProvider()
    const apiSigner = new ethers.Wallet(Config.PRIVATE_API_SIGNER_KEY, provider)
    return await apiSigner.signMessage(txHash)
  }

  public setContractSigner(signer?: Signer) {
    this.contract = this.contract.connect(signer)
  }

  public getContractSigner() {
    return this.contract.signer
  }

  public getEventArgs(events: any, eventName: string) {
    const event = events.find((v: any) => v.event === eventName)
    return event.args
  }

  public async getTimestamp(blockNumber: number): Promise<number> {
    return (await this.contract.provider.getBlock(blockNumber)).timestamp
  }
}

export default ContractBase
