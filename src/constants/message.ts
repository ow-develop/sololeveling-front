export const enum MESSAGE {
  WALLET_ADDRESS_COPY = 'Wallet Address has been successfully copied.',
  PRIVATE_KEY_COPY = 'Private key has been successfully copied.'
}

export enum ErrorMessage {
  TRANSACTION_FAILURE = 'There was an error with your transaction. Please try again.',
  INSUFFICIENT_MATIC_FOR_GATE_KEY = 'Insufficient balance to buy gate key',
  INSUFFICIENT_STONE = 'Insufficient Essence Stones to clear the gate. Return Monsters to earn Essence Stones.',
  ALREADY_MY_NAME = 'Already My Name',
  CONFLICT = 'Conflict',
  INSUFFICIENT_FUNDS = 'There are not enough MATIC to complete this transaction. Buy MATIC or deposit from other account.',
  INVALID_BROWSER = 'Login is not available, please continue with your default browser.',
  ACTION_REJECTED = 'User denied transaction signature.',
  TIMEOUT = 'Transaction is taking too long. Try again in a few moments.'
}

export const enum SuccessType {
  USERNAME_CHANGE = 'Your nickname has been successfully updated.',
  PROFILE_CHANGE = 'Profile has been successfully updated.',
  WALLET_ADDRESS_COPY = 'Wallet Address has been successfully copied.',
  MINTING = 'Your minting has been successfully submitted.',
  CONVERT = 'Tokens have been successfully converted.',
  LISTING_CANCEL = 'Your listing has been cancelled.',
  OFFER = 'Your offer has been submitted.',
  OFFER_CANCEL = 'Your offer has been cancelled.',
  LIST_UNLOCK = 'List has been unlocked.',
  DELETE_USER = 'You have been successfully withdrawn.',
  REPORT_SUBMIT = 'Your report has been successfully submitted.',
  WALLET_CONNECT = 'Wallet account has been connected.',
  EMAIL_VERIFICATION_SEND = 'Verification email has been sent to your email account. Please check your email.',
  EMAIL_VERIFICATION_SUCCESS = 'Email has been verified.'
}
