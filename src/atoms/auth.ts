import { atom } from 'recoil'

import { User } from '~/types/wallet'

export const userState = atom<User | null>({
  key: 'user',
  default: null
})

export const signatureState = atom<string>({
  key: 'signatureState',
  default: ''
})

export const messageState = atom<string>({
  key: 'messageState',
  default: ''
})
