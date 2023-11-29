import { createContext, Dispatch, SetStateAction, useContext } from 'react'
import { NextMonster } from '~/types/system'

export interface LevelingInventoryContextType {
  selectItems?: SelectInventoryItem[]
  setSelectItems?: Dispatch<SetStateAction<SelectInventoryItem[]>>
  multiple?: boolean
}

export interface SelectInventoryItem {
  idx: number
  amount: number
  title: string
  imgUrl?: string
  imgUrlCf?: string
  gifUrl?: string
  gifUrlCf?: string
  nextMonster?: NextMonster
}

const LevelingInventoryContext = createContext<LevelingInventoryContextType>({})

export const useLevelingInventoryContext = () => {
  return useContext(LevelingInventoryContext)
}

export default LevelingInventoryContext
