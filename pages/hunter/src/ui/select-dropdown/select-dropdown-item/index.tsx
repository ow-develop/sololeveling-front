import React from 'react'
import { useTranslation } from 'react-i18next'

import { DropTextBox, SelectDropdownItemWrapper } from './style'
import { DropdownItem } from '..'

interface Props extends DropdownItem {
  checked?: boolean
  onClick?: () => void
}

const SelectDropdownItem = ({ name, checked, onClick }: Props) => {
  const { t } = useTranslation()

  return (
    <SelectDropdownItemWrapper onClick={onClick} checked={checked}>
      <DropTextBox>
        <span>{t(name)}</span>
      </DropTextBox>
    </SelectDropdownItemWrapper>
  )
}

export default SelectDropdownItem
