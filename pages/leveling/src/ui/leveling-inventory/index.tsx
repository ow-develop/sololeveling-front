import { Dispatch, HTMLAttributes, SetStateAction } from 'react'

import LevelingInventoryContext, { SelectInventoryItem } from './context'
import { LevelingInventoryWrapper } from './style'
import LevelingInventoryItem from './leveling-inventory-item'

export interface Props extends HTMLAttributes<HTMLDivElement> {
  selectItems?: SelectInventoryItem[]
  setSelectItems?: Dispatch<SetStateAction<SelectInventoryItem[]>>
  multiple?: boolean
  column?: number
}

const LevelingInventory = ({
  column = 1,
  selectItems,
  setSelectItems,
  multiple,
  children
}: Props) => {
  return (
    <LevelingInventoryContext.Provider
      value={{ selectItems, setSelectItems, multiple }}
    >
      <LevelingInventoryWrapper column={column}>
        {children}
      </LevelingInventoryWrapper>
    </LevelingInventoryContext.Provider>
  )
}

export default Object.assign(LevelingInventory, {
  Item: LevelingInventoryItem
})
