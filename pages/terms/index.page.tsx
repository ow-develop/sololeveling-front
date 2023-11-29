import { CommonMainLayout } from '~/layouts/style'
import SectionLayout from '~/layouts/section-layout'
import React from 'react'
import TermsContents from './src/ui/terms-contents'
import { TermsWrapper } from './src/ui/style'

const TermsPage = () => {
  const termsData = Array.from({ length: 16 }, (_, index) => ({
    title: `Terms_${index + 1}L`,
    contents: `Terms_${index + 1}T`
  }))

  return (
    <CommonMainLayout>
      <SectionLayout title='Terms of Use' description=''>
        <TermsWrapper>
          {termsData.map((term, index) => (
            <TermsContents
              key={index}
              title={term.title}
              contents={term.contents}
            />
          ))}
        </TermsWrapper>
      </SectionLayout>
    </CommonMainLayout>
  )
}

export default TermsPage
