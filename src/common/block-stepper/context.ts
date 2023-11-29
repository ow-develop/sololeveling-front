import { createContext, useContext } from 'react'

export interface BlockStepperContextType {
  activeStep: number
}

const BlockStepperContext = createContext<BlockStepperContextType | null>(null)

export const useBlockStepperContext = () => {
  return useContext(BlockStepperContext)
}

export default BlockStepperContext
