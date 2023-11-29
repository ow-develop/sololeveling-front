import { ReactNode } from 'react'
import { atom } from 'recoil'

export const modalState = atom<ReactNode | null>({
  key: 'modal',
  default: null
})

export const showModalState = atom<boolean>({
  key: 'showModal',
  default: false
})

export const loadingModalState = atom<boolean>({
  key: 'loadingModal',
  default: false
})
