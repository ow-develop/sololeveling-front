import React from 'react'

import { useThemeStore } from '~/atoms/common'
import SelectDropdown from '~/common/dropdown/select-dropdown'
import { ThemeType } from '~/types/common'

const ThemeDropdown = () => {
  const { themeState, setThemeState } = useThemeStore()

  const list = [{ id: 0, value: 'dark', name: 'Dark Theme' }]

  const getDefaultIndex = () => {
    const index = list.findIndex((item) => themeState === item.value)
    return index === -1 ? 0 : index
  }

  const handleChange = (value: string) => {
    setThemeState(value as ThemeType)
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

export default ThemeDropdown
