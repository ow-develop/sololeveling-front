import { createContext, useContext } from 'react'

export interface GateSlotContextType {
  selectIndex?: number
  setSelectIndex?: (index: number) => void
}

const GateSlotContext = createContext<GateSlotContextType>({})

export const useGateSlotContext = () => useContext(GateSlotContext)

export default GateSlotContext
