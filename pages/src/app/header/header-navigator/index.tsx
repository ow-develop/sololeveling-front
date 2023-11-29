import Link from 'next/link'
import { useRouter } from 'next/router'
import React, { useMemo } from 'react'

import { HeaderNavigatorWrapper, NavLinkUnit } from './style'

import { CommonDropdown } from '~/common/dropdown/common-dropdown'
import { InternalPath } from '~/constants/route'
import useAuth from '~/hooks/useAuth'
import { useI18next } from '~/lib/i18n'
import { NavLink } from '~/types/common'

const HeaderNavigator = () => {
  const { pathname } = useRouter()
  const { t } = useI18next()

  const linkList: NavLink[] = [
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
    }
  ]

  return (
    <HeaderNavigatorWrapper>
      {linkList.map(({ name, url, drops }) => {
        return (
          <React.Fragment key={url}>
            <Link href={url}>
              <a>
                <NavLinkUnit selected={pathname === url}>{t(name)}</NavLinkUnit>
              </a>
            </Link>
          </React.Fragment>
        )
      })}
    </HeaderNavigatorWrapper>
  )
}

export default HeaderNavigator
