import { ReactNode } from 'react'

export interface LeaderboardTableHeader {
  key: string
  align: 'flex-start' | 'flex-end' | 'center'
  header: ReactNode
  width?: number
}

export interface LeaderboardTableRow {
  id: string
  expandValue?: ReactNode
  [key: string]: ReactNode
}

export interface LeaderboardRowsById {
  [id: string]: {
    id: string
    cells: {
      id: string
      value: ReactNode
      width: number
      align: 'flex-start' | 'flex-end' | 'center'
    }[]
  }
}
