import {
  NavigationCloseIcon,
  NotesIcon
} from '@ow-develop/ow-icons/react/material'
import { AnimatePresence } from 'framer-motion'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import AccountDropdown from './account-dropdown'
import MobileHeaderDrawer from './header-drawer/mobile-header-drawer'
import HeaderNavigator from './header-navigator'
import {
  HeaderContentField,
  HeaderDrawerBox,
  HeaderGroupBox,
  HeaderProfileBox,
  HeaderWrapper
} from './style'

import HeaderLogo from '~/assets/image/logo.svg'
import SvgIcon from '~/common/svg-icon'
import { InternalPath } from '~/constants/route'
import useBreakpoint from '~/hooks/useBreakpoint'

export const Header = () => {
  const { pathname } = useRouter()
  const [isOpen, setIsOpen] = useState(false)
  const { belowMediumWidth } = useBreakpoint()

  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <HeaderWrapper>
      <HeaderContentField>
        {!belowMediumWidth && (
          <>
            <HeaderGroupBox>
              <Link href={InternalPath.HOME}>
                <a>
                  <SvgIcon
                    icon={<HeaderLogo />}
                    size={120}
                    color='text-strong'
                  />
                </a>
              </Link>
              <HeaderNavigator />
            </HeaderGroupBox>

            <HeaderProfileBox>
              <AccountDropdown />
            </HeaderProfileBox>
          </>
        )}

        {belowMediumWidth && (
          <>
            <HeaderGroupBox>
              <Link href={InternalPath.HOME}>
                <a>
                  <SvgIcon
                    icon={<HeaderLogo />}
                    size={120}
                    color='text-strong'
                  />
                </a>
              </Link>
            </HeaderGroupBox>

            <HeaderGroupBox>
              <SvgIcon
                icon={
                  isOpen ? (
                    <NavigationCloseIcon onClick={() => setIsOpen(false)} />
                  ) : (
                    <NotesIcon onClick={() => setIsOpen(true)} />
                  )
                }
                size={36}
                color='icon-default'
              />
            </HeaderGroupBox>
          </>
        )}
      </HeaderContentField>

      <HeaderDrawerBox isOpen={isOpen}>
        <AnimatePresence initial={false}>
          {belowMediumWidth && isOpen && (
            <MobileHeaderDrawer setIsOpen={setIsOpen} />
          )}
        </AnimatePresence>
      </HeaderDrawerBox>
    </HeaderWrapper>
  )
}
