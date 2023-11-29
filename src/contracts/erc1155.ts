import { BigNumber, ethers } from 'ethers'

import ContractABI from './abi/erc1155.abi.json'

import { ERC1155CollectionType } from '~/constants/contracts'
import ContractBase from '~/contracts/contract'
import Config from '~/config'

class ERC1155Contract extends ContractBase {
  constructor(collectionType: ERC1155CollectionType, signer?: ethers.Signer) {
    super(Config[collectionType], ContractABI, signer)
  }

  public async totalSupply(tokenId: number): Promise<number> {
    return (await this.contract.totalSupply(tokenId)).toNumber()
  }

  public async balanceOf(account: string, tokenId: number): Promise<number> {
    return await this.contract.balanceOf(account, tokenId)
  }

  public async exists(tokenId: number): Promise<boolean> {
    return await this.contract.exists(tokenId)
  }

  public async balanceOfBatch(
    accounts: string[],
    tokenIds: number[]
  ): Promise<number[]> {
    const balances = await this.contract.balanceOfBatch(accounts, tokenIds)

    return balances.map((balance: BigNumber) => balance.toNumber())
  }

  public async isApprovedForAll(
    owner: string,
    operator: string
  ): Promise<boolean> {
    return await this.contract.isApprovedForAll(owner, operator)
  }

  public async setApproveForAll(operator: string): Promise<void> {
    const transaction = await this.contract.setApprovalForAll(operator, true)

    return await transaction.wait()
  }
}

export default ERC1155Contract
