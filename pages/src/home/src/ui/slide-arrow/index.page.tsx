import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@ow-develop/ow-icons/react/material'

import { SlideArrowWrapper } from './style'
import {
  LeftArrowButtonUnit,
  RightArrowButtonUnit
} from '../../features/home-collection-banner/style'

import SvgIcon from '~/common/svg-icon'
interface Props {
  onClickSlidePrev: () => void
  onClickSlideNext: () => void
}
const SlideArrow = ({ onClickSlidePrev, onClickSlideNext }: Props) => {
  return (
    <SlideArrowWrapper>
      <LeftArrowButtonUnit onClick={onClickSlidePrev}>
        <SvgIcon icon={<ChevronLeftIcon />} color='icon-on-accent' size={24} />
      </LeftArrowButtonUnit>
      <RightArrowButtonUnit onClick={onClickSlideNext}>
        <SvgIcon icon={<ChevronRightIcon />} color='icon-on-accent' size={24} />
      </RightArrowButtonUnit>
    </SlideArrowWrapper>
  )
}

export default SlideArrow
