import { useQuery } from '@tanstack/react-query'
import { QueryKey } from '~/constants/query'
import { BannerType, fetchGetBannerList } from '~/api/home'

export const useGetBannerListQuery = () => {
  return useQuery([QueryKey.GET_BANNER_LIST], () => fetchGetBannerList(), {
    select: (data) => {
      const homeBanner = data.filter((item) => item.type === BannerType.Home)
      homeBanner.sort((a, b) => a.order - b.order)

      const eventBanner = data.filter((item) => item.type === BannerType.Event)

      const collectionBanner = data.filter(
        (item) => item.type === BannerType.Collection
      )
      collectionBanner.sort((a, b) => a.order - b.order)

      return { homeBanner, eventBanner, collectionBanner }
    },
    suspense: false
  })
}
