import LocaleKR from '~/lib/i18n/locales/ko-KR/translation.json'

export type LocaleType = keyof typeof LocaleKR

export type LanguageType = 'EN' | 'KR' | 'JP'
