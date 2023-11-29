import { useRouter } from 'next/router'
import { ReactNode } from 'react'

import { AccountSectionButtonWrapper } from './style'
import { ItemTitleBox } from '../style'

import SvgIcon from '~/common/svg-icon'

export interface Props {
  icon?: ReactNode
  title?: string
  href?: string
  selected?: boolean
  onClick?: () => void
}

const AccountSectionButton = ({
  icon,
  title,
  href,
  selected,
  onClick
}: Props) => {
  const { push } = useRouter()

  const handleClick = () => {
    if (href) {
      push(href)
      return
    }

    onClick && onClick()
  }

  return (
    <AccountSectionButtonWrapper onClick={() => handleClick()}>
      <ItemTitleBox selected={selected}>
        {icon && <SvgIcon icon={icon} color='icon-weak' />}
        {title}
      </ItemTitleBox>
    </AccountSectionButtonWrapper>
  )
}

export default AccountSectionButton
