import { ReactNode } from 'react'

import { DropdownListWrapper } from './style'

interface DropdownListProps {
  children?: ReactNode
  isOpen?: boolean
  width?: string
  onClick?: () => void
}

const DropdownList = ({
  children,
  isOpen,
  width,
  onClick
}: DropdownListProps) => (
  <DropdownListWrapper
    width={width}
    isOpen={isOpen}
    onClick={() => onClick?.()}
  >
    {children}
  </DropdownListWrapper>
)
export default DropdownList
