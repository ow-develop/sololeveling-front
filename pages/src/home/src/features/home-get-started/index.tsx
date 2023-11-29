import { useDownCustom } from '@ow-develop/ow-design-system'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import { homeGetStartedData } from './data'
import {
  ButtonBox,
  ButtonUnit,
  ContentField,
  DescriptionUnit,
  HomeGetStartedWrapper,
  InfoBox,
  StepUnit,
  TitleField,
  TitleUnit
} from './style'

import { InternalPath } from '~/constants/route'
import { Breakpoint } from '~/constants/style'
import useAuth from '~/hooks/useAuth'
import Link from 'next/link'

const HomeGetStarted = () => {
  const { isLoggedIn } = useAuth()

  const belowTabletWidth = useDownCustom(Breakpoint.M)
  const btnWidth = belowTabletWidth ? 'fill' : 'fixed'
  const { t } = useTranslation()
  const router = useRouter()

  return (
    <HomeGetStartedWrapper>
      <TitleField>{t('Get Started')}</TitleField>

      <ContentField>
        {homeGetStartedData.map((item, index) => (
          <InfoBox key={item.title}>
            <StepUnit>{index + 1}</StepUnit>
            <TitleUnit>{t(item.title)}</TitleUnit>
            <DescriptionUnit>{t(item.description)}</DescriptionUnit>
          </InfoBox>
        ))}
      </ContentField>

      <ButtonBox>
        <ButtonUnit variant='secondary' size='sm' width={btnWidth}>
          <Link
            href='https://sololeveling-unlimited.gitbook.io/sololeveling-unlimited/'
            passHref
          >
            <a target='_blank'>{t('Go to Guidebook')}</a>
          </Link>
        </ButtonUnit>

        {!isLoggedIn && (
          <ButtonUnit
            variant='primary'
            size='sm'
            width={btnWidth}
            onClick={() => router.push(InternalPath.SIGN_IN)}
          >
            {t('Go to Login')}
          </ButtonUnit>
        )}
      </ButtonBox>
    </HomeGetStartedWrapper>
  )
}

export default HomeGetStarted
