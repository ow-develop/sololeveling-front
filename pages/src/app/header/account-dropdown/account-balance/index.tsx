import {
  CryptoUsdcIcon,
  MaticTokenIcon
} from '@ow-develop/ow-icons/react/integration'
import React from 'react'

import AccountSection from '../../../ui/account-section'
import { convertToLocale } from '~/utils/formatNumber'
import useUSDCBalanceQuery from '~/hooks/queries/useUSDCBalanceQuery'
import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'

const AccountBalance = () => {
  const { data: maticBalance } = useMaticBalanceQuery(false)
  const { data: USDCBalance } = useUSDCBalanceQuery(false)

  return (
    <AccountSection title='Balance'>
      <AccountSection.Item
        icon={<CryptoUsdcIcon />}
        title='USDC'
        description={convertToLocale(USDCBalance?.USDC ?? 0, 3)}
      />
      <AccountSection.Item
        icon={<MaticTokenIcon />}
        title='MATIC'
        description={convertToLocale(maticBalance?.MATIC ?? 0, 3)}
      />
    </AccountSection>
  )
}

export default AccountBalance
