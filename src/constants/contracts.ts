import { ContractInterface } from 'ethers'

export const ERC20Abi: ContractInterface = [
  {
    constant: true,
    inputs: [{ name: '_owner', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: 'balance', type: 'uint256' }],
    type: 'function'
  }
]

export const enum ERC20 {
  WMATIC_ADDRESS_MUMBAI = '0x9c3C9283D3e44854697Cd22D3Faa240Cfb032889',
  WMATIC_ADDRESS_POLYGON = '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
  WETH_ADDRESS_MUMBAI = '0xA6FA4fB5f76172d178d61B04b0ecd319C5d1C0aa',
  WETH_ADDRESS_POLYGON = '0x7ceB23fD6bC0adD59E62ac25578270cFf1b9f619'
}

export const enum ContractEventType {
  GATE_CLEARED = 'GateCleared',
  GATE_CREATED = 'GateCreated',
  GATE_FEE_DISTRIBUTED = 'GateFeeDistributed',
  E_RANK_CLAIMED = 'ERankClaimed',
  HUNTER_RANK_UP = 'HunterRankUp',
  MONSTER_AROSE = 'MonsterArose',
  MONSTER_UPGRADED = 'MonsterUpgraded',
  MONSTER_RETURNED = 'MonsterReturned',
  KEY_SOLD = 'KeySold',
  KEY_MINTED = 'KeyMinted',
  STONE_SOLD = 'StoneSold'
}

export const enum ERC1155CollectionType {
  ESSENCE_STONE = 'EssenceStone',
  MONSTER = 'Monster',
  SHADOW_ARMY = 'ShadowArmy',
  GATE_KEY = 'GateKey'
}

export enum TokenStandardType {
  ERC721 = 'ERC721',
  ERC1155 = 'ERC1155'
}
