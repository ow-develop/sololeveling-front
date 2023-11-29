import { useRouter } from 'next/router'
import { InternalPath } from '~/constants/route'
import useAuth from '~/hooks/useAuth'

import { NavLink } from '~/types/common'
import React, { Dispatch, SetStateAction } from 'react'
import GetTestTokenModal from '../../../get-test-token-modal'
import useModal from '~/hooks/useModal'
import { NavMenuItem, NavMenuText, NavMenuWrapper } from './style'
import { useI18next } from '~/lib/i18n'

const NavMenu = ({
  setIsOpen
}: {
  setIsOpen?: Dispatch<SetStateAction<boolean>>
}) => {
  const { push, pathname } = useRouter()
  const { isLoggedIn } = useAuth()
  const { openModal } = useModal()
  const { t } = useI18next()

  const links: NavLink[] = [
    {
      url: InternalPath.DUNGEON,
      name: 'Dungeon'
    },
    {
      url: InternalPath.LEVELING,
      name: 'Leveling'
    },
    {
      url: InternalPath.SHOP,
      name: 'Shop'
    },
    {
      url: InternalPath.SEASON,
      name: 'Season'
    },
    {
      url: InternalPath.HUNTER,
      name: 'Inventory'
    },
    ...(isLoggedIn
      ? [
          {
            url: InternalPath.SETTING,
            name: 'Setting'
          }
        ]
      : [])
  ]

  return (
    <NavMenuWrapper>
      {links.map(({ name, url, drops }) => {
        // FIXME 현재 사용되지 않는 UI
        // if (drops) return <Accordion title={name} list={drops} />

        return (
          <NavMenuItem
            key={url}
            onClick={() => {
              push(url)
              setIsOpen?.(false)
            }}
          >
            <NavMenuText active={pathname === url}> {t(name)}</NavMenuText>
          </NavMenuItem>
        )
      })}

      {isLoggedIn && (
        <NavMenuItem onClick={() => openModal(<GetTestTokenModal />)}>
          <NavMenuText> {t('Get Test Token')}</NavMenuText>
        </NavMenuItem>
      )}
    </NavMenuWrapper>
  )
}

export default NavMenu
