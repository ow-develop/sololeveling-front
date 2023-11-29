import { ReactNode } from 'react'

import { AccountSectionItemWrapper } from './style'
import { ItemDescriptionUnit, ItemTitleBox } from '../style'

import SvgIcon from '~/common/svg-icon'

export interface Props {
  icon?: ReactNode
  title?: string
  description?: string
  onClick?: () => void
}

const AccountSectionItem = ({ icon, title, description }: Props) => {
  return (
    <AccountSectionItemWrapper>
      <ItemTitleBox>
        {icon && <SvgIcon icon={icon} />}
        {title}
      </ItemTitleBox>
      {description && <ItemDescriptionUnit>{description}</ItemDescriptionUnit>}
    </AccountSectionItemWrapper>
  )
}

export default AccountSectionItem
