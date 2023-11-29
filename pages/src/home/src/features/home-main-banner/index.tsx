import { HomeMainBannerWrapper } from './style'
import { useGetBannerListQuery } from '../../hooks/useGetBannerListQuery'
import Slide from '../../ui/slide'

const HomeMainBanner = () => {
  const { data } = useGetBannerListQuery()

  return (
    <HomeMainBannerWrapper>
      <Slide
        data={data?.homeBanner}
        height={600}
        isAutoPlay={true}
        hasGradient={true}
        isPaginationInBanner={true}
      />
    </HomeMainBannerWrapper>
  )
}

export default HomeMainBanner
