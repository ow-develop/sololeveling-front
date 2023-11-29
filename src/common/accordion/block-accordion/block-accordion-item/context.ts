import { createContext, useContext } from 'react'

export interface BlockAccordionItem {
  extend: boolean
}

const BlockAccordionItemContext = createContext<BlockAccordionItem | null>(null)

export const useBlockAccordionItemContext = () => {
  return useContext(BlockAccordionItemContext)
}

export default BlockAccordionItemContext
