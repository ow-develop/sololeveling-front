import { ReactNode } from 'react'

import { DropdownListWrapper } from './style'

interface DropdownListProps {
  children: ReactNode
  isOpen: boolean
  width?: string
}

const DropdownList = ({ children, isOpen, width }: DropdownListProps) => (
  <DropdownListWrapper width={width} isOpen={isOpen}>
    {children}
  </DropdownListWrapper>
)
export default DropdownList
