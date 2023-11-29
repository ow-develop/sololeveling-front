import { HunterRankType, WalletType } from '~/types/common'
import { LanguageType } from '~/types/language'

export interface User {
  address: string
  name: string | null
  type: WalletType
  email: string
  description: string | null
  personalInfoCollectionAgreement: boolean
  marketingOptIn: boolean
  language: LanguageType | null
  rank: HunterRankType | null
  profileImg: string | null
  profileImgCf: string | null
  bannerImg: string
  bannerImgCf: string
  isAvailableFreeGateKey: boolean
  remainingTimeOfFreeGateKey: number
}
