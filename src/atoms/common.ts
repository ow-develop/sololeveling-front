import { atom, useRecoilState } from 'recoil'
import { recoilPersist } from 'recoil-persist'

import { ThemeType } from '~/types/common'
import { LanguageType } from '~/types/language'

const localStorage = typeof window !== 'undefined' ? window.localStorage : null

const { persistAtom } = recoilPersist({
  key: 'recoil-persist',
  storage: localStorage
})

export const languageState = atom<LanguageType>({
  key: 'language',
  default: 'EN',
  effects_UNSTABLE: [persistAtom]
})

export const themeState = atom<ThemeType>({
  key: 'atomState',
  default: 'dark',
  effects_UNSTABLE: [persistAtom]
})

export const eventModalState = atom<boolean>({
  key: 'eventModalState',
  default: true,
  effects_UNSTABLE: [persistAtom]
})

export const useThemeStore = () => {
  const [state, setState] = useRecoilState(themeState)

  const isDarkMode = state === 'dark'

  return {
    themeState: state,
    setThemeState: setState,
    isDarkMode
  }
}
