import { LoadingIconWrapper } from './style'

import LoadingImg from '~/assets/image/loading.gif'
import FullWidthImage from '~/common/image/full-width-image'

export interface Props {
  /**
   * 로딩 아이콘의 사이즈를 결정합니다.
   */
  size?: number
}

export const LoadingIcon = ({ size = 20 }: Props) => {
  return (
    <LoadingIconWrapper size={size}>
      <FullWidthImage src={LoadingImg.src} alt='' />
    </LoadingIconWrapper>
  )
}
