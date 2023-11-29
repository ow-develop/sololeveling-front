import { ExpandMoreIcon } from '@ow-develop/ow-icons/react/material'
import { ReactNode, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import SelectDropdownItem from './select-dropdown-item'
import {
  DropdownField,
  SelectDropdownWrapper,
  TriggerButtonUnit,
  TriggerField
} from './style'
import { ExpandIconBox } from '../common-dropdown/style'

import SvgIcon from '~/common/svg-icon'
import useOutside from '~/hooks/useOutside'

export interface DropdownItem {
  id: string | number
  name: string
  value: string
  icon?: ReactNode
  prefix?: string
}

export interface SelectDropdownProps {
  contentSize: 'fit' | 'fill' | 'fixed'
  type: 'button' | 'default' | 'sort' | 'transparent'
  width?: 'fill' | 'hug' | 'fixed'
  items: DropdownItem[]
  placeHolder?: string
  disabled?: boolean
  defaultIndex?: number | string
  className?: string
  onChangeCb?: (targetValue: string) => void
}

const SelectDropdown = ({
  contentSize,
  items,
  defaultIndex = 0,
  disabled,
  width = 'fill',
  onChangeCb
}: SelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<DropdownItem>(
    items[defaultIndex]
  )
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  const handleListOpen = () => setIsOpen((prev) => !prev)

  const handleSelect = (selected: DropdownItem) => {
    setSelectedValue(selected)
    setIsOpen(false)
    onChangeCb?.(selected.value)
  }

  useOutside(dropdownRef, () => setIsOpen(false))

  return (
    <SelectDropdownWrapper contentSize={contentSize} ref={dropdownRef}>
      <TriggerField>
        <TriggerButtonUnit
          width='fixed'
          variant='text'
          size='lg'
          disabled={disabled}
          onClick={handleListOpen}
        >
          <span>{t(selectedValue?.name)}</span>

          <ExpandIconBox isOpen={isOpen}>
            <SvgIcon size={24} icon={<ExpandMoreIcon />} color='text-default' />
          </ExpandIconBox>
        </TriggerButtonUnit>
      </TriggerField>

      <DropdownField isOpen={isOpen}>
        {items.map((item, index) => {
          return (
            <SelectDropdownItem
              onClick={() => handleSelect(item)}
              key={index}
              checked={selectedValue?.value === item.value}
              {...item}
            />
          )
        })}
      </DropdownField>
    </SelectDropdownWrapper>
  )
}

export default SelectDropdown
