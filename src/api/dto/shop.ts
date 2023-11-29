import { TransactionApiDto } from '~/types/api'
import { KeyMinted, KeySold, StoneSold } from '~/types/events'

export interface FetchBuyGateKeyDto extends TransactionApiDto {
  keySold: KeySold
}

export interface FetchClaimGateKeyDto extends TransactionApiDto {
  keyMinted: KeyMinted
}

export interface FetchBuyStoneDto extends TransactionApiDto {
  stoneSold: StoneSold
}
