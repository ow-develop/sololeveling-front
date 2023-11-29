import { Button, Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'
import { Swiper } from 'swiper/react'

import { Breakpoint, ZIndex } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'

export const GateRewardModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    flex-direction: column;
    gap: 48px;
  }
`

export const ContentField = styled.div`
  overflow: hidden;
  width: 100%;
`

export const RewardBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  height: 100%;
  padding: 16px;
`

export const RewardItemBox = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 20px;
  color: var(--text-default);
  ${Token.typography.body}
  
  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}}
`

export const RewardHeadingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  > div {
    display: flex;
    align-items: center;
    gap: 4px;
  }
`

export const PercentageChipUnit = styled.div`
  padding: 2px 8px;
  height: 22px;
  color: var(--text-default);
  background: var(--button-default);
  border: 1px solid var(--border-default);
  border-radius: 16px;
  ${Token.typography.caption_strong};
`

export const RewardHeadingField = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const AmountUnit = styled.p`
  color: var(--text-strong);
  ${Token.typography.body_stronger}
`

export const GateRewardSwiperField = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`
export const GateRewardSwiper = styled(Swiper)`
  cursor: grab;
  ${noneDraggable}

  :active {
    cursor: grabbing;
  }

  .swiper-slide {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 24px;
    flex-direction: column;
    height: 100%;
  }
`

export const SlideImgBox = styled.div`
  position: relative;
  max-width: 312px;

  img {
    width: 100%;
  }
`

export const RankValueUnit = styled.p`
  color: var(--text-default);
  ${Token.typography.subtitle_strong};
  line-height: 32px;
`

export const RankTotalUnit = styled.div`
  ${Token.typography.display_4};
  color: var(--text-strong);
`

export const ArrowButtonBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${ZIndex.DEFAULT};
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    gap: 188px;
  }
`

export const ArrowButtonUnit = styled(Button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  cursor: pointer;
`
