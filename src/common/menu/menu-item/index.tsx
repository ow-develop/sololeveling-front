import React, { ReactNode } from 'react'

import {
  MenuEndBox,
  MenuItemWrapper,
  MenuTitleBox,
  MenuTriggerField
} from './style'
import { useI18next } from '~/lib/i18n'

export interface MenuItemProps {
  children?: ReactNode
  end?: ReactNode
  onClick?: () => void
  title?: ReactNode
  active?: boolean
}

export const MenuItem = ({
  children,
  onClick,
  end,
  title,
  active
}: MenuItemProps) => {
  const { t } = useI18next()
  const handleClick = () => {
    onClick?.()
  }

  return (
    <MenuItemWrapper active={!!onClick} onClick={handleClick}>
      <MenuTriggerField>
        <MenuTitleBox active={active}>{t(title)}</MenuTitleBox>

        <MenuEndBox>{end}</MenuEndBox>
      </MenuTriggerField>

      {children}
    </MenuItemWrapper>
  )
}
