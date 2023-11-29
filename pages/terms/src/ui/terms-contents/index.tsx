import React from 'react'
import { ArticleBox, ArticleContentsUnit, ArticleTitleUnit } from '../style'
import { useI18next } from '~/lib/i18n'

interface Props {
  title: any
  contents: any
}

const TermsContents = ({ title, contents }: Props) => {
  const { t } = useI18next()

  return (
    <ArticleBox>
      <ArticleTitleUnit>{t(title)}</ArticleTitleUnit>
      <ArticleContentsUnit>{t(contents)}</ArticleContentsUnit>
    </ArticleBox>
  )
}

export default TermsContents
