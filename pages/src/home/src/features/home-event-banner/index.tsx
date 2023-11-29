import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'

import {
  HomeEventBannerWrapper,
  InfoBox,
  TitleUnit,
  DescriptionUnit,
  ButtonUnit,
  ButtonBox,
  ContentField,
  EventBannerField,
  ImgBox
} from './style'
import { useGetBannerListQuery } from '../../hooks/useGetBannerListQuery'

import FullWidthImage from '~/common/image/full-width-image'

const HomeEventBanner = () => {
  const { data } = useGetBannerListQuery()
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <HomeEventBannerWrapper>
      {data?.eventBanner?.map((item, index) => (
        <EventBannerField key={item.idx}>
          <ContentField>
            <ImgBox>
              <FullWidthImage src={item.img} />
            </ImgBox>
            <InfoBox>
              <TitleUnit>{t(item.title)}</TitleUnit>
              <DescriptionUnit>{t(item.subTitle)}</DescriptionUnit>
            </InfoBox>
          </ContentField>

          <ButtonBox>
            {item.bannerButton.map((btnItem, btnIndex) => (
              <ButtonUnit
                key={btnItem.idx}
                onClick={() => router.push(btnItem.link)}
                variant='primary'
                size='sm'
                width='fill'
              >
                {t(btnItem.title)}
              </ButtonUnit>
            ))}
          </ButtonBox>
        </EventBannerField>
      ))}
    </HomeEventBannerWrapper>
  )
}

export default HomeEventBanner
