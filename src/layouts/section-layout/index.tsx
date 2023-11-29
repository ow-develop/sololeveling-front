import { ReactNode } from 'react'

import { SectionWrapper } from './style'

import SectionContent from '~/layouts/section-layout/section-content'
import SectionTitle from '~/layouts/section-layout/section-title'

export interface Props {
  children?: ReactNode
  title?: string
  description?: string
  prev?: string | ReactNode
  action?: string | ReactNode
}
const SectionLayout = ({ children, ...SectionTitleProps }: Props) => {
  return (
    <SectionWrapper>
      <SectionTitle {...SectionTitleProps} />
      {children}
    </SectionWrapper>
  )
}

export default Object.assign(SectionLayout, {
  Content: SectionContent
})
