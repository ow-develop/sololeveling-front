import { ReactNode } from 'react'

import {
  DescriptionUnit,
  SectionTitleWrapper,
  TitleActionBox,
  TitleBox,
  TitleField,
  TitlePrevBox,
  TitleUnit
} from './style'

import { Translate, useI18next } from '~/lib/i18n'

export interface Props {
  title?: Translate
  description?: Translate

  prev?: string | ReactNode
  action?: string | ReactNode
}

const SectionTitle = ({
  title = '',
  description = '',
  action,
  prev
}: Props) => {
  const { t } = useI18next()
  return (
    <SectionTitleWrapper>
      <TitleField>
        <TitleBox>
          {prev && <TitlePrevBox>{prev}</TitlePrevBox>}
          <TitleUnit>{t(title)}</TitleUnit>
        </TitleBox>

        <TitleActionBox>{action}</TitleActionBox>
      </TitleField>

      {description && <DescriptionUnit>{t(description)}</DescriptionUnit>}
    </SectionTitleWrapper>
  )
}

export default SectionTitle
