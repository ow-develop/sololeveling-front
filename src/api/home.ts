import { QueryKey } from '~/constants/query'
import api from '~/lib/api'
import { ResponseTypes } from '~/types/api'

export enum BannerType {
  Home = 'Home',
  Collection = 'Collection',
  Event = 'Event'
}
export enum LabelType {
  Service = 'Service',
  Collection = 'Collection',
  Community = 'Community'
}
export enum HomeResourceType {
  Video = 'Video',
  Image = 'Image'
}
export interface BannerBtnType {
  idx: number
  title: string
  link: string
  createDate: string
  updateDate: string
}
export interface HomeBannerResponse {
  idx: number
  type: BannerType
  resourceType: HomeResourceType
  playTime: number
  img: string
  imgCf: string
  m_img: string
  m_imgCf: string
  itemImg?: string
  itemImgCf?: string
  order: number
  label: LabelType
  title: string
  subTitle: string
  createDate: string
  updateDate: string
  bannerButton: BannerBtnType[]
}

export const fetchGetBannerList = async () => {
  const url = QueryKey.GET_BANNER_LIST
  const { data } = await api.get<ResponseTypes<HomeBannerResponse[]>>(url)
  return data.data
}
