import ProfileImage1 from '~/assets/image/profile/profile_1.webp'
import ProfileImage2 from '~/assets/image/profile/profile_2.webp'
import ProfileImage3 from '~/assets/image/profile/profile_3.webp'

const RANDOM_NUMBER = Math.floor(Math.random() * 3)
const defaultProfileList = [
  ProfileImage1.src,
  ProfileImage2.src,
  ProfileImage3.src
]
export const DEFAULT_IMAGE = defaultProfileList[RANDOM_NUMBER]
export const getProfileImg = (obj: any): string => {
  return obj?.profileImgCf ?? obj?.profileImg ?? DEFAULT_IMAGE
}
