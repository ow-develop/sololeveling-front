import { MouseEvent } from 'react'

import { TabWrapper } from './style'

import { useI18next } from '~/lib/i18n'

export interface Props {
  onClick: (e: MouseEvent<HTMLDivElement>) => void
  title: string
  isSelected: boolean
}

const Tab = ({ onClick, title, isSelected }: Props) => {
  const { t } = useI18next()

  return (
    <TabWrapper onClick={onClick} isSelected={isSelected}>
      {t(title)}
    </TabWrapper>
  )
}

export default Tab
