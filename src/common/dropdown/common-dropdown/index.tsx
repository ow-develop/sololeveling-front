import { ExpandMoreIcon } from '@ow-develop/ow-icons/react/material'
import React, { ReactNode, useRef, useState } from 'react'

import DropdownList from './dropdown-list'
import {
  CommonDropdownWrapper,
  DropdownItemUnit,
  ExpandIconBox,
  TriggerButtonUnit
} from './style'

import SvgIcon from '~/common/svg-icon'
import useOutside from '~/hooks/useOutside'

export interface CommonDropdownProps {
  /**
   * 드랍다운의 트리거가 될 버튼 컴포넌트에 children을 넣을 수 있습니다.
   */
  trigger?: ReactNode
  /**
   * 드랍다운의 `width` 스타일을 직접 지정할 수 있습니다.
   */
  width?: string
  /**
   * 드랍다운이 나열할 아이템에서 렌더링될 텍스트와 click 이벤트핸들러를 지정할 수 있습니다.
   */
  drops: { text: string; onClick?: () => void }[]
}

export const CommonDropdown = ({
  trigger,
  width,
  drops
}: CommonDropdownProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  useOutside(dropdownRef, () => setIsOpen(false))

  const handleOpen = () => setIsOpen((prev) => !prev)

  const handleClickItem = (cb?: () => void) => {
    return () => {
      setIsOpen(false)
      cb?.()
    }
  }

  return (
    <CommonDropdownWrapper ref={dropdownRef}>
      <TriggerButtonUnit
        width='fixed'
        variant='text'
        size='lg'
        onClick={handleOpen}
      >
        {trigger}
        <ExpandIconBox isOpen={isOpen}>
          <SvgIcon
            icon={<ExpandMoreIcon width={24} height={24} />}
            color='-text-default'
          />
        </ExpandIconBox>
      </TriggerButtonUnit>

      <DropdownList isOpen={isOpen} width={width}>
        {drops.map(({ text, onClick }, index) => {
          return (
            <DropdownItemUnit onClick={handleClickItem(onClick)} key={index}>
              {text}
            </DropdownItemUnit>
          )
        })}
      </DropdownList>
    </CommonDropdownWrapper>
  )
}
