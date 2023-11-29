import React from 'react'
import { useRecoilState } from 'recoil'

import { languageState } from '~/atoms/common'
import SelectDropdown from '~/common/dropdown/select-dropdown'
import { LanguageType } from '~/types/language'

const LanguageDropdown = () => {
  const [language, setLanguage] = useRecoilState(languageState)

  const list = [
    { id: 0, value: 'EN', name: 'English' },
    { id: 1, value: 'KR', name: '한국어' },
    { id: 2, value: 'JP', name: '日本語' }
  ]

  const getDefaultIndex = () => {
    const index = list.findIndex((item) => language === item.value)
    return index === -1 ? 0 : index
  }

  const handleChange = (value: string) => {
    setLanguage(value as LanguageType)
  }

  return (
    <div>
      <SelectDropdown
        defaultIndex={getDefaultIndex()}
        contentSize='fill'
        type='default'
        items={list}
        onChangeCb={handleChange}
      />
    </div>
  )
}

export default LanguageDropdown
