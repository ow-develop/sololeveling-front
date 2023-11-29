import { ModeIcon } from '@ow-develop/ow-icons/react/material'
import { MouseEvent } from 'react'

import { HoverActionUnit, ImageInputWrapper } from './style'

import FullWidthImage from '~/common/image/full-width-image'
import SvgIcon from '~/common/svg-icon'

export interface Props {
  imgUrl?: string
  onClick?: (e: MouseEvent<HTMLDivElement>) => void
}

const ImageInput = ({ imgUrl, onClick }: Props) => {
  return (
    <ImageInputWrapper>
      <FullWidthImage src={imgUrl} />

      <HoverActionUnit onClick={onClick}>
        <SvgIcon icon={<ModeIcon />} color='icon-on-accent' />
      </HoverActionUnit>
    </ImageInputWrapper>
  )
}

export default ImageInput
