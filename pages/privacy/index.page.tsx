import React from 'react'
import { CommonMainLayout } from '~/layouts/style'
import SectionLayout from '~/layouts/section-layout'
import { TermsWrapper } from '../terms/src/ui/style'
import TermsContents from '../terms/src/ui/terms-contents'
import { useI18next } from '~/lib/i18n'

const PrivacyPage = () => {
  const { t } = useI18next()

  const privacyData = Array.from({ length: 15 }, (_, index) => ({
    title: `Privacy_${index}L`,
    contents: `Privacy_${index}T`
  }))

  return (
    <CommonMainLayout>
      <SectionLayout title='Privacy Policy' description=''>
        <TermsWrapper>
          {privacyData.map((privacy, index) => (
            <TermsContents
              key={index}
              title={privacy.title}
              contents={privacy.contents}
            />
          ))}
        </TermsWrapper>
      </SectionLayout>
    </CommonMainLayout>
  )
}

export default PrivacyPage
