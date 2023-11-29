import { useDownCustom } from '@ow-develop/ow-design-system'
import { useTranslation } from 'react-i18next'

import {
  HomeCollectionBannerWrapper,
  HomeCollectionBannerField,
  TitleUnit
} from './style'
import { useGetBannerListQuery } from '../../hooks/useGetBannerListQuery'
import Slide from '../../ui/slide'

import { Breakpoint } from '~/constants/style'

const HomeCollectionBanner = () => {
  const { data } = useGetBannerListQuery()

  const belowTabletWidth = useDownCustom(Breakpoint.M)
  const height = belowTabletWidth ? 600 : 400
  const { t } = useTranslation()

  return (
    <HomeCollectionBannerWrapper>
      <HomeCollectionBannerField>
        <TitleUnit>{t('More Collections')}</TitleUnit>
        <Slide
          data={data?.collectionBanner}
          height={height}
          hasArrow={true}
          hasCover={true}
          isPaginationInBanner={false}
        />
      </HomeCollectionBannerField>
    </HomeCollectionBannerWrapper>
  )
}

export default HomeCollectionBanner
