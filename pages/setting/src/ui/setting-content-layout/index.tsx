import { ReactNode } from 'react'

import { SettingContentLayoutWrapper } from './style'
import Title from '../title'

export interface Props {
  title: string
  children?: ReactNode
}

const SettingContentLayout = ({ title, children }: Props) => {
  return (
    <SettingContentLayoutWrapper>
      <Title title={title} />
      {children}
    </SettingContentLayoutWrapper>
  )
}

export default SettingContentLayout
