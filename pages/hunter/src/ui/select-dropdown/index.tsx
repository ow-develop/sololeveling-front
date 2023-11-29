import { ExpandMoreIcon } from '@ow-develop/ow-icons/react/material'
import { useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SelectDropdownItem from './select-dropdown-item'
import {
  DropdownField,
  ExpandIconBox,
  SelectDropdownWrapper,
  TriggerButtonUnit,
  TriggerField
} from './style'
import SvgIcon from '~/common/svg-icon'
import useOutside from '~/hooks/useOutside'

export interface DropdownItem {
  name: string
  value: string
}

export interface SelectDropdownProps {
  items: DropdownItem[]
  disabled?: boolean
  defaultIndex?: number | string
  onChangeCb?: (targetValue: string) => void
  direction?: 'top' | 'bottom'
}

const SelectDropdown = ({
  items,
  defaultIndex = 0,
  disabled,
  onChangeCb
}: SelectDropdownProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [selectedValue, setSelectedValue] = useState<DropdownItem>(
    items[defaultIndex]
  )
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { t } = useTranslation()

  const handleListOpen = () => {
    setIsOpen((prev) => !prev)
  }

  const handleSelect = (selected: DropdownItem) => {
    setSelectedValue(selected)
    setIsOpen(false)
    onChangeCb?.(selected.value)
  }

  useOutside(dropdownRef, () => setIsOpen(false))

  return (
    <SelectDropdownWrapper ref={dropdownRef}>
      <TriggerButtonUnit
        width='fixed'
        size='sm'
        fixedWidth={160}
        variant='tertiary'
        disabled={disabled}
        onClick={handleListOpen}
      >
        <span>{t(selectedValue?.name)}</span>

        <ExpandIconBox isOpen={isOpen}>
          <SvgIcon size={24} icon={<ExpandMoreIcon />} color='icon-weak' />
        </ExpandIconBox>
      </TriggerButtonUnit>

      <DropdownField isOpen={isOpen}>
        {items.map((item, index) => {
          return (
            <SelectDropdownItem
              onClick={() => handleSelect(item)}
              key={item.value}
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
