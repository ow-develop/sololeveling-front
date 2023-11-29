import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint, ZIndex } from '~/constants/style'

export const HomeCollectionBannerWrapper = styled.div`
  width: 100%;
  align-items: center;
`
export const MoreCollectionsField = styled.div`
  display: flex;
  flex-direction: column;
`
export const TitleBox = styled.div``
export const TitleUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.display_4}
  text-align: center;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.headline_strong}
  }
`
export const HomeCollectionBannerField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  margin-bottom: 60px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    gap: 30px;
    margin-bottom: 30px;
  }
`
export const LeftArrowButtonUnit = styled.div`
  position: absolute;
  left: 40px;
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: var(--white-10, rgba(255, 255, 255, 0.1));
  cursor: pointer;
  z-index: ${ZIndex.HOVER};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    left: 24px;
  }
`
export const RightArrowButtonUnit = styled.div`
  position: absolute;
  right: 40px;
  display: flex;
  padding: 8px;
  align-items: flex-start;
  gap: 10px;
  border-radius: 4px;
  background: var(--white-10, rgba(255, 255, 255, 0.1));
  cursor: pointer;
  z-index: ${ZIndex.HOVER};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    right: 24px;
  }
`
export const BackgroundUnit = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  z-index: ${ZIndex.BACKGROUND + 1};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    height: 600px;
  }
}
`
