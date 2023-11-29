import { createContext, useContext } from 'react'

export interface DashboardContextType {
  gap?: {
    row: number
    column: number
  }
  grid?: number
  height?: number | 'hug'
}

const DashboardContext = createContext<DashboardContextType>({})

export const useDashboardContext = () => {
  return useContext(DashboardContext)
}

export default DashboardContext
