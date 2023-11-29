import styled from 'styled-components'

import { Breakpoint, ZIndex } from '~/constants/style'

export const IndicatorField = styled.div<{
  isLocatedInBanner: boolean
}>`
  position: absolute;
  width: 100%;
  display: flex;
  justify-content: center;
  bottom: ${({ isLocatedInBanner }) => (isLocatedInBanner ? 30 : -60)}px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    bottom: ${({ isLocatedInBanner }) => (isLocatedInBanner ? 30 : -54)}px;
  }
`
export const IndicatorBox = styled.div<{
  isLocatedInBanner: boolean
}>`
  z-index: ${ZIndex.HOVER};
  display: flex;
  width: 240px;

  gap: ${({ isLocatedInBanner }) => (isLocatedInBanner ? 12 : 8)}px;
`
export const ProgressBarUnitField = styled.div`
  position: relative;
  flex: 1 0 0;
  height: 24px;
  display: flex;
  align-self: center;
  cursor: pointer;
  background: transparent;
`
export const ProgressBarUnitBox = styled.div`
  width: 100%;
  height: 2px;
  background: var(--icon-weaker);
  display: flex;
  justify-content: center;
  align-self: center;
`
export const ProgressBarUnit = styled.div.attrs<{
  isActive: boolean
  percent: number
  isFullWidth: boolean
}>(({ isActive, percent, isFullWidth }) => {
  return {
    style: {
      width: `${isFullWidth ? 100 : isActive ? percent : 0}%`,
      background: isActive && 'var(--icon-weak)',
      transition: `${isFullWidth ? 'all 0.5s' : 'none'}`
    }
  }
})<{
  isActive: boolean
  percent: number
  isFullWidth: boolean
}>`
  position: absolute;
  top: 11px;
  left: 0;
  max-width: 100%;
  height: 2px;
  transition: all 0.5s;
`
