import { ConnectWalletIcon } from '@ow-develop/ow-icons/react/solo'
import React from 'react'

import { ActionCard } from '~/common/action-card'
import SvgIcon from '~/common/svg-icon'
import useAuth from '~/hooks/useAuth'

const ConnectCard = () => {
  const { isLoggedIn } = useAuth()

  if (isLoggedIn) return null

  return (
    <ActionCard
      icon={<SvgIcon icon={<ConnectWalletIcon />} size={80} />}
      title='Connect Wallet'
      subTitle='Must connect wallet to continue.'
      actionText='Connect Wallet'
      // onClick={login}
      // loading={isLoading}
    />
  )
}

export default ConnectCard
