import { BigNumber } from 'ethers'
import { defaultAbiCoder } from 'ethers/lib/utils'

const PANIC_CODE_PREFIX = '0x4e487b71'
const UNKNOWN_ERROR = 'Unknown Error'
const ERROR_STRING_PREFIX = '0x08c379a0'

export const errorConfig = {
  '0x0c5317cc': 'AlreadyExistTokenContract',
  '0xa9cb9e0d': 'InvalidArgument',
  '0x17e9c7d0': 'InvalidCollectionId',
  '0xccea9e6f': 'InvalidOperator',
  '0x29bdfb34': 'InvalidTokenContract',
  '0xb9a30aef': 'InvalidUniverseId',
  '0x27e1f1e5': 'OnlyOperator',
  '0xdb026a7a': 'OnlyOperatorMaster',
  '0xddefae28': 'AlreadyMinted',
  '0x9547e3c9': 'DoesNotExistAriseMonster',
  '0xef35ca30': 'InvalidMonsterId',
  '0x890c0bcf': 'InvalidRankType',
  '0x6c335862': 'AlreadyStartSeason',
  '0xdb6c7051': 'EndedSeason',
  '0x4e47846c': 'InvalidBlockNumber',
  '0xb4c8c1de': 'InvalidMonster',
  '0x0a55f880': 'InvalidSeasonId',
  '0x9b662777': 'RandomSignatureVerifyFailed',
  '0x30571212': 'AlreadyClearGate',
  '0x362daa8a': 'ExceedGateSlot',
  '0xc6abbf01': 'InvalidGateId',
  '0xec3db489': 'InvalidGateSignature',
  '0x00bfc921': 'InvalidPrice',
  '0x1258e443': 'InvalidSlot',
  '0xae2d1c4f': 'ExceedBalance',
  '0x13be252b': 'InsufficientAllowance',
  '0x0ea5d24b': 'SellPaused',
  '0x90b8ec18': 'TransferFailed',
  '0x646cf558': 'AlreadyClaimed',
  '0x6a43f8d1': 'InvalidRate',
  '0xe9909ff4': 'DoesNotEnoughStoneBalance',
  '0xfd10415a': 'InvalidMonsterSignature',
  '0x1f3b85d3': 'InvalidPercentage',
  '0x85c18d3a': 'AlreadyExistContract',
  '0x82a29acb': 'DoesNotExistContract',
  '0x83590822': 'DoesNotExistTokenId',
  '0x5c9a0abb': 'ExceedSupply',
  '0x59907813': 'OnlyController',
  '0x112d49d3': 'SignatureVerifyFailed',
  '0xbd91fc99': 'DoesNotMintEnabled',
  '0xd37a223a': 'FunctionNotSupported',
  '0x2bb95c59': 'GeneralAchievementVerifyFailed',
  '0x71c15515': 'InvalidAchievementId',
  '0xa2e2e542': 'InvalidCollection',
  '0x5dd3b4d1': 'NotEnoughTokenBalance',
  '0x77d7c6d8': 'OnlySeasonSettlementContract',
  '0x47584aff': 'DoesNotEnabled',
  '0x153d77d8': 'OnlySeasonContract',
  '0x3f6cc768': 'InvalidTokenId',
  '0xba83c474': 'DuplicateAccount'
}

const panicErrorCodeToReason = (errorCode: BigNumber) => {
  switch (errorCode.toNumber()) {
    case 0x1:
      return 'Assertion error'
    case 0x11:
      return 'Arithmetic operation underflowed or overflowed outside of an unchecked block'
    case 0x12:
      return 'Division or modulo division by zero'
    case 0x21:
      return 'Tried to convert a value into an enum, but the value was too big or negative'
    case 0x22:
      return 'Incorrectly encoded storage byte array'
    case 0x31:
      return '.pop() was called on an empty array'
    case 0x32:
      return 'Array accessed at an out-of-bounds or negative index'
    case 0x41:
      return 'Too much memory was allocated, or an array was created that is too large'
    case 0x51:
      return 'Called a zero-initialized variable of internal function type'
  }
}

const getErrorMessage = (error: any): string => {
  if (!(error instanceof Error)) {
    return UNKNOWN_ERROR
  }

  error = error as any

  if (error.errorName) {
    return error.errorName
  }

  const errorData =
    error.data ?? error.error?.data ?? error.error?.error?.error?.data

  if (errorData === undefined) {
    return error.message ? error.message : UNKNOWN_ERROR
  }

  const returnData = typeof errorData === 'string' ? errorData : errorData.data

  if (returnData === undefined || typeof returnData !== 'string') {
    return UNKNOWN_ERROR
  } else if (returnData === '0x') {
    return UNKNOWN_ERROR
  } else if (returnData.startsWith(ERROR_STRING_PREFIX)) {
    const encodedReason = returnData.slice(ERROR_STRING_PREFIX.length)
    let reason: string

    try {
      reason = defaultAbiCoder.decode(['string'], `0x${encodedReason}`)[0]
    } catch (err) {
      return UNKNOWN_ERROR
    }

    return reason
  } else if (returnData.startsWith(PANIC_CODE_PREFIX)) {
    const encodedReason = returnData.slice(PANIC_CODE_PREFIX.length)
    let code: BigNumber

    try {
      code = defaultAbiCoder.decode(['uint256'], `0x${encodedReason}`)[0]
    } catch (err) {
      return UNKNOWN_ERROR
    }

    return panicErrorCodeToReason(code) ?? 'unknown panic code'
  }

  const customErrorName = errorConfig[returnData.slice(0, 10)]

  if (customErrorName === undefined) {
    return UNKNOWN_ERROR
  }
  return customErrorName
}

export const getContractExceptionText = (err: any): string => {
  return getErrorMessage(err)
}
