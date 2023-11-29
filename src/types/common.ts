import { HunterRank } from '~/constants/hunter'
import { ReactNode } from 'react'

export type HunterRankType = keyof typeof HunterRank

export const BlockChainType = 'Polygon'

export type WalletType = 'MetaMask'

export type ThemeType = 'light' | 'dark'

export interface Props {
  children: ReactNode
}

export interface SignUpAtom {
  currentStep: number
  userTerms: {
    all?: boolean
    termsOfUseAgreement: boolean
    personalInfoCollectionAgreement: boolean
    marketingOptIn: boolean
  }
  address: string
  email: string
  message: string
  signature: string
  isEmailAuthorized: boolean
  googleAccessToken?: string
}

export interface Exchange {
  KRW: string
  USD: string
  JPY: string
}

export interface Banner extends Partial<Description> {
  title: string
  link: string
  imgUrl: string
  imgUrlCf: string
}

export interface Timer {
  day: string
  hour: string
  min: string
  sec: string
}

export interface Dashboard {
  name: string
  value: string | number
  symbol?: string
}

export interface Description {
  descriptionKR: string
  descriptionEN: string
  descriptionJP: string
}

export interface Property {
  layer: number
  layerName: string
  trait: string
}

export interface NavLink {
  name: string
  url: string
  drops?: { text: string; onClick?: () => void }[]
  onClick?: () => void
}
