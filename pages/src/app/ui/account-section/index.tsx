import { ReactNode } from 'react'

import AccountSectionButton from './account-section-button'
import AccountSectionItem from './account-section-item'
import {
  AccountListBox,
  AccountSectionWrapper,
  AccountTitleUnit
} from './style'
import { useI18next } from '~/lib/i18n'

interface Props {
  title?: string
  children?: ReactNode
}

const AccountSection = ({ title, children }: Props) => {
  const { t } = useI18next()

  return (
    <AccountSectionWrapper>
      <AccountTitleUnit>{t(title)}</AccountTitleUnit>
      <AccountListBox>{children}</AccountListBox>
    </AccountSectionWrapper>
  )
}

export default Object.assign(AccountSection, {
  Item: AccountSectionItem,
  Button: AccountSectionButton
})
