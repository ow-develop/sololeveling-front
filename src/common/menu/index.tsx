import React, { ReactNode } from 'react'

import { MenuItem } from './menu-item'
import { MenuTitleField, MenuWrapper } from './style'
import { useI18next } from '~/lib/i18n'

export interface Props {
  children: ReactNode
  title?: ReactNode
}

const Menu = ({ children, title }: Props) => {
  const { t } = useI18next()

  return (
    <MenuWrapper>
      {title && <MenuTitleField>{t(title)}</MenuTitleField>}

      {children}
    </MenuWrapper>
  )
}

export default Object.assign(Menu, {
  Item: MenuItem
})
