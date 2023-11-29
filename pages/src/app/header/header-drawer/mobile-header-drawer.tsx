import { Button } from '@ow-develop/ow-design-system'
import React, { Dispatch, SetStateAction, useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import BalanceMenu from './balance-menu'
import NavMenu from './nav-menu'
import { HeaderButtonBox, HeaderDrawerWrapper } from './style'

import { AccountProfile } from '~/common/profile/account-profile'
import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'
import useAuth from '~/hooks/useAuth'
import LoginButton from '../../login-button'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const MobileHeaderDrawer = ({
  setIsOpen
}: {
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) => {
  const { logout } = useWeb3AuthContext()
  const { address, name, isLoggedIn } = useAuth()
  const { rank } = useHunterRankQuery(false)
  const { t } = useTranslation()

  useEffect(() => {
    window.scrollTo(0, 0)
    document.body.style.cssText = `
      position: fixed;
      top: -${window.scrollY}px;
      overflow-y: scroll;
      width: 100%;
      ::-webkit-scrollbar {
        display: none;
      }
      `

    return () => {
      const scrollY = document.body.style.top
      document.body.style.cssText = ''
      window.scrollTo(0, parseInt(scrollY || '0', 10) * -1)
    }
  }, [])

  return (
    <HeaderDrawerWrapper key='Menu'>
      {isLoggedIn ? (
        <>
          <Button variant='secondary' size='sm' onClick={logout}>
            {t('Logout')}
          </Button>

          <AccountProfile rank={rank} address={address} name={name} />
        </>
      ) : (
        <HeaderButtonBox>
          <LoginButton text='Login' onClick={() => setIsOpen(false)} />
        </HeaderButtonBox>
      )}

      <NavMenu setIsOpen={setIsOpen} />

      {isLoggedIn && <BalanceMenu />}
    </HeaderDrawerWrapper>
  )
}

export default MobileHeaderDrawer
