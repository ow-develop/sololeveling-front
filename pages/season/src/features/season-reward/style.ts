import styled from 'styled-components'
import { Swiper } from 'swiper/react'

import { noneDraggable } from '~/styles/mixin'

export const SeasonRewardWrapper = styled.div`
  width: 100%;
  height: 100%;
  touch-action: pan-y;
`

export const SwiperField = styled(Swiper)`
  width: 100%;
  height: 100%;

  .swiper-slide {
    width: fit-content !important;
    ${noneDraggable}
  }
`

export const InViewUnit = styled.span`
  position: absolute;
  display: block;
  right: 1px;
`
