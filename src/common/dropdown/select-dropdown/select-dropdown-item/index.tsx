import React from 'react'

import { DropPrefixUnit, DropTextBox, SelectDropdownItemWrapper } from './style'
import { DropdownItem } from '..'

import { useI18next } from '~/lib/i18n'

interface Props extends DropdownItem {
  checked?: boolean
  onClick?: () => void
}

const SelectDropdownItem = ({ prefix, name, checked, onClick }: Props) => {
  const { t } = useI18next()

  return (
    <SelectDropdownItemWrapper onClick={onClick} checked={checked}>
      <DropTextBox>
        {prefix && <DropPrefixUnit>{prefix}</DropPrefixUnit>}
        <span>{t(name)}</span>
      </DropTextBox>
    </SelectDropdownItemWrapper>
  )
}

export default SelectDropdownItem
