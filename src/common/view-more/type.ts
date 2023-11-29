import { ReactNode } from 'react'

export type ViewMoreBtnDirection = 'center' | 'start' | 'end'
export interface ViewMoreProps {
  text?: string
  onClick?: () => void
  extend?: boolean
  btnDirection?: ViewMoreBtnDirection
  children?: ReactNode
}
