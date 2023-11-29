import React, { ReactNode } from 'react'

import {
  ContentField,
  SectionContentWrapper,
  TitleField
} from '~/layouts/section-layout/section-content/style'
import { useI18next } from '~/lib/i18n'

export interface SectionContentProps {
  title?: ReactNode
  children?: ReactNode
}

const SectionContent = ({ children, title }: SectionContentProps) => {
  const { t } = useI18next()
  return (
    <SectionContentWrapper>
      {title && <TitleField>{t(title)}</TitleField>}

      <ContentField>{children}</ContentField>
    </SectionContentWrapper>
  )
}

export default SectionContent
