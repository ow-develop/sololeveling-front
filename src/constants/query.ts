export const STALE_TIME = 3000

export const enum QueryKey {
  // wallet
  SIGN_IN = 'wallet/signIn',
  GET_WALLET_INFO = 'wallet/info',

  // collection
  GET_ESSENCE_STONE_BALANCE = 'collection/balance/stone',
  GET_SEASON_PACK_LIST = '/collection/seasonPack',
  GET_HUNTER_COLLECTION_LIST = '/collection',
  GET_MONSTER_LIST = '/collection/monster',
  GET_MONSTER_BALANCE = '/collection/balance/monster',
  GET_ARISE_MONSTER_BALANCE = 'leveling/arise/balance',
  GET_SHOP_TOKEN_LIST = 'collection/shop',
  GET_GATE_KEY_BY_BALANCE = 'collection/balance/gateKey',
  GET_SHOP_TOKEN_BALANCE = 'collection/balance/shop',

  // leveling
  MONSTER_ARISE = 'leveling/arise',
  MONSTER_UPGRADE = 'leveling/upgrade',
  RANK_UP = 'leveling/rankUp',
  MONSTER_RETURN = 'leveling/return',
  GET_MONSTER_BALANCE_BY_HUNTER_RANK = 'leveling/rankUp/balance',

  // hunter
  GET_HUNTER_INFO = '/hunter/info',
  CHECK_HUNTER_NAME = 'hunter/setting/name/check',
  EDIT_PROFILE_IMAGE = '/hunter/setting/image',
  GET_HUNTER_PROFILE_TOKEN_BALANCE = '/hunter/profile/balance',
  EDIT_MARKETING_OPTIN = '/hunter/setting/marketingOptIn',
  WITHDRAW = '/hunter/setting/withDraw',
  EDIT_PROFILE_NAME = '/hunter/setting/name',
  GET_HUNTER_INVENTORY = '/hunter/inventory',
  UPDATE_HUNTER_INVENTORY = '/hunter/inventory',
  GET_COLLECTION_TOKEN_DETAIL = '/collection',

  // dungeon
  CREATE_GATE = 'dungeon/gate/create',
  CLEAR_GATE = 'dungeon/gate/clear',
  BUY_GATE_KEY = '/dungeon/gate/buyKey',
  GET_CLAIM_GATE_KEY_SIGNATURE = 'dungeon/gate/signature',
  CLAIM_GATE_KEY = 'dungeon/gate/claimKey',
  BUY_STONE = 'dungeon/gate/buyStone',

  // season
  GET_SEASON_RANKING = 'season/ranking',
  GET_MY_SEASON_RANKING = 'season/my/ranking',

  // External
  SET_INTERVAL = 'setInterval',
  GET_BANNER_LIST = '/common/banner',

  // Contract
  CONTRACT_GET_MATIC_BALANCE = 'CONTRACT_GET_MATIC_BALANCE',
  CONTRACT_GET_USDC_BALANCE = 'CONTRACT_GET_USDC_BALANCE',
  CONTRACT_BALANCE_OF_BROKEN_STONE = 'CONTRACT_BALANCE_OF_BROKEN_STONE',
  CONTRACT_GET_HUNTER_RANK = 'CONTRACT_GET_HUNTER_RANK',
  CONTRACT_GET_CURRENT_BLOCK_NUMBER = 'CONTRACT_GET_CURRENT_BLOCK_NUMBER',
  CONTRACT_GET_GATE_OF_HUNTER_SLOT = 'CONTRACT_GET_GATE_OF_HUNTER_SLOT',
  CONTRACT_GET_HUNTER_SLOT = 'CONTRACT_GET_HUNTER_SLOT',
  CONTRACT_IS_APPROVED_FOR_ALL = 'CONTRACT_IS_APPROVED_FOR_ALL',
  CONTRACT_IS_CURRENT_SEASON_BY_ID = 'CONTRACT_IS_CURRENT_SEASON_BY_ID',
  CONTRACT_IS_SEASON_REWARD_CLAIMED = 'CONTRACT_IS_SEASON_REWARD_CLAIMED',
  CONTRACT_GET_SEASON_BY_ID = 'CONTRACT_GET_SEASON_BY_ID',
  CONTRACT_IS_REVOKED_ACCOUNT = 'CONTRACT_IS_REVOKED_ACCOUNT'
}

export const enum ExternalQueryKey {
  GET_GOOGLE_USER_INFO = 'https://www.googleapis.com/oauth2/v3/userinfo'
}
