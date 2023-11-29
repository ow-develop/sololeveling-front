import { TFunction, TOptions, use } from 'i18next'
import { initReactI18next, useTranslation } from 'react-i18next'

import en from './locales/en-US/translation.json'
import ja from './locales/ja-JP/translation.json'
import ko from './locales/ko-KR/translation.json'

import { LanguageType } from '~/types/language'

export type Translate = string | TFunction

export const useI18next = () => {
  const { t: i18nextTranslate } = useTranslation()

  const t = (text: unknown, options?: TOptions) => {
    if (typeof text === 'string') {
      return i18nextTranslate(text, options)
    } else {
      return text
    }
  }

  return { t, i18nextTranslate }
}

const useInternationalLanguageInit = (language: LanguageType) => {
  if (typeof window === 'undefined') return
  use(initReactI18next).init({
    resources: {
      KR: {
        translation: ko
      },
      JP: {
        translation: ja
      },
      EN: {
        translation: en
      }
    },
    lng: language,
    fallbackLng: 'KR',
    interpolation: {
      escapeValue: false
    }
  })
}

export default useInternationalLanguageInit
