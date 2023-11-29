import { useRouter } from 'next/router'
import React, { ReactNode, useEffect, useRef, useState } from 'react'

import DropdownList from './dropdown-list'
import { CommonDropdownWrapper, DropdownTriggerUnit } from './style'

import useOutside from '~/hooks/useOutside'

interface Props {
  trigger?: ReactNode
  children?: ReactNode
  width?: string
  closeOnClick?: boolean
}

const ProfileDropdown = ({ trigger, children, width, closeOnClick }: Props) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const { pathname } = useRouter()
  useOutside(dropdownRef, () => setIsOpen(false))

  const handleOpen = () => setIsOpen((prev) => !prev)

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <CommonDropdownWrapper ref={dropdownRef}>
      <DropdownTriggerUnit onClick={handleOpen}>{trigger}</DropdownTriggerUnit>

      <DropdownList
        isOpen={isOpen}
        width={width}
        onClick={closeOnClick && handleOpen}
      >
        {children}
      </DropdownList>
    </CommonDropdownWrapper>
  )
}

export default ProfileDropdown
