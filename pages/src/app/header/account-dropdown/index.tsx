import { Button } from '@ow-develop/ow-design-system'
import React from 'react'
import {
  AccountDropdownContent,
  BalanceItem,
  BalanceName,
  BalanceValue,
  BalanceWrapper,
  NavMenuItem,
  NavMenuText,
  NavMenuWrapper
} from './style'

import CommonAvatar from '~/common/avatar/common-avatar'
import ProfileDropdown from '~/common/dropdown/profile-dropdown'
import FullWidthImage from '~/common/image/full-width-image'
import { AccountProfile } from '~/common/profile/account-profile'
import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'
import useUserQuery from '~/hooks/queries/useUserQuery'
import useAuth from '~/hooks/useAuth'
import { useI18next } from '~/lib/i18n'
import { getProfileImg } from '~/lib/image'
import LoginButton from '../../login-button'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import { useSetRecoilState } from 'recoil'
import { eventModalState } from '~/atoms/common'
import AccountProfileSkeleton from '~/common/profile/account-profile/skeleton'
import { useRouter } from 'next/router'
import { InternalPath } from '~/constants/route'
import GetTestTokenModal from '../../get-test-token-modal'
import useModal from '~/hooks/useModal'
import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'
import useUSDCBalanceQuery from '~/hooks/queries/useUSDCBalanceQuery'
import SvgIcon from '~/common/svg-icon'
import {
  CryptoUsdcIcon,
  MaticTokenIcon
} from '@ow-develop/ow-icons/react/integration'
import { convertToLocale } from '~/utils/formatNumber'

const AccountDropdown = () => {
  const { logout } = useWeb3AuthContext()
  const { openModal } = useModal()
  const { push, pathname } = useRouter()
  const { isLoggedIn, address, name } = useAuth()
  const setIsClosed = useSetRecoilState(eventModalState)
  const { data: userInfo, isFetchedAfterMount } = useUserQuery()
  const { rank } = useHunterRankQuery(false)
  const { data: maticBalance } = useMaticBalanceQuery(false)
  const { data: USDCBalance } = useUSDCBalanceQuery(false)
  const { t } = useI18next()

  const onClick = async () => {
    await logout()
    setIsClosed(true)
  }

  if (!isLoggedIn) return <LoginButton text='Login' />

  return (
    <ProfileDropdown
      trigger={
        userInfo || isFetchedAfterMount ? (
          <CommonAvatar size={40} dense>
            <FullWidthImage src={getProfileImg(userInfo)} />
          </CommonAvatar>
        ) : (
          <AccountProfileSkeleton />
        )
      }
      width='282px'
    >
      <AccountDropdownContent>
        <AccountProfile
          rank={rank}
          address={address}
          name={name}
          imageUrl={getProfileImg(userInfo)}
        />

        <NavMenuWrapper>
          <NavMenuItem onClick={() => push(InternalPath.SETTING)}>
            <NavMenuText>{t('Setting')}</NavMenuText>
          </NavMenuItem>

          <NavMenuItem onClick={() => openModal(<GetTestTokenModal />)}>
            <NavMenuText>{t('Get Test Token')}</NavMenuText>
          </NavMenuItem>

          <NavMenuItem style={{ cursor: 'default' }}>
            <NavMenuText>{t('Balance')}</NavMenuText>
          </NavMenuItem>

          <BalanceWrapper>
            <BalanceItem>
              <BalanceName>
                <SvgIcon size={20} icon={<CryptoUsdcIcon />} />
                USDC
              </BalanceName>

              <BalanceValue>
                {convertToLocale(USDCBalance?.USDC ?? 0, 3)}
              </BalanceValue>
            </BalanceItem>

            <BalanceItem>
              <BalanceName>
                <SvgIcon size={20} icon={<MaticTokenIcon />} />
                MATIC
              </BalanceName>
              <BalanceValue>
                {convertToLocale(maticBalance?.MATIC ?? 0, 3)}
              </BalanceValue>
            </BalanceItem>
          </BalanceWrapper>
        </NavMenuWrapper>

        <Button variant='secondary' size='sm' width='fill' onClick={onClick}>
          {t('Logout')}
        </Button>
      </AccountDropdownContent>
    </ProfileDropdown>
  )
}

export default AccountDropdown
