import Image from 'next/image'

import { LoadingWrapper } from './style'
import loadingImg from '../../../../../src/assets/image/loading.gif'

export interface Props {
  width?: number
  height?: number
}

const Loading = ({ width, height }: Props) => {
  return (
    <LoadingWrapper width={width} height={height}>
      <Image src={loadingImg} alt='loading image' />
    </LoadingWrapper>
  )
}

export default Loading
