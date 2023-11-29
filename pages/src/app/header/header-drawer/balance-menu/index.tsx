import {
  CryptoUsdcIcon,
  MaticTokenIcon
} from '@ow-develop/ow-icons/react/integration'
import React from 'react'

import {
  BalanceBox,
  BalanceField,
  BalanceMenuName,
  BalanceMenuValue
} from './style'

import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'
import { convertToLocale } from '~/utils/formatNumber'
import SvgIcon from '~/common/svg-icon'
import Menu from '~/common/menu'
import useUSDCBalanceQuery from '~/hooks/queries/useUSDCBalanceQuery'

const BalanceMenu = () => {
  const { data } = useMaticBalanceQuery(false)
  const { data: USDCBalance } = useUSDCBalanceQuery(false)

  const list = [
    {
      name: 'USDC',
      icon: <SvgIcon size={20} icon={<CryptoUsdcIcon />} />,
      value: convertToLocale(USDCBalance?.USDC ?? 0, 3)
    },
    {
      name: 'MATIC',
      icon: <SvgIcon size={20} icon={<MaticTokenIcon />} />,
      value: convertToLocale(data?.MATIC ?? 0, 3)
    }
  ]

  return (
    <Menu title='Balance'>
      {list.map(({ name, icon, value }) => {
        return (
          <Menu.Item key={name}>
            <BalanceField>
              <BalanceBox>
                {icon}
                <BalanceMenuName>{name}</BalanceMenuName>
              </BalanceBox>

              <BalanceMenuValue>{value}</BalanceMenuValue>
            </BalanceField>
          </Menu.Item>
        )
      })}
    </Menu>
  )
}

export default BalanceMenu
