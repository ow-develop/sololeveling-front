import styled, { css } from 'styled-components'
import { Breakpoint, ZIndex } from '~/constants/style'

export const CollectionTabWrapper = styled.div<{ sticky: boolean }>`
  position: relative;
  width: 100%;
  height: 52px;

  ${({ sticky }) =>
    sticky &&
    css`
      position: fixed;
      top: 64px;
      z-index: ${ZIndex.STICKY};
      background: var(--overlay-sticky);
      backdrop-filter: blur(12px);
    `}
`

export const TabField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 1200px;
  margin: 4px auto 0;
  padding-left: 8px;
  overflow-x: auto;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    justify-content: flex-start;
  }

  ::-webkit-scrollbar {
    width: 100%;
    height: 0;
  }
`

export const MenuGradient = styled.div`
  position: absolute;
  width: 52px;
  height: 44px;
  top: 4px;
  right: 0;
  z-index: 1;
  background: linear-gradient(270deg, #1f0f5b 0%, rgba(36, 18, 95, 0) 100%);
`

export const TabBtnBox = styled.div<{
  selected?: boolean
}>`
  display: block;
  gap: 8px;
  border-radius: 6px;
  margin-right: 8px;

  ${({ selected }) =>
    selected
      ? css`
          background: rgba(46, 93, 232, 0.4);
        `
      : css`
          background: none;
        `}
`

export const TabBtnUnit = styled.button<{ selected?: boolean }>`
  min-width: 198px;
  height: 44px;
  background: transparent;
  outline: none;
  border: none;

  font-family: Cormorant, serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-transform: uppercase;

  ${({ selected }) =>
    selected
      ? css`
          color: var(--text-on-accent);
        `
      : css`
          color: var(--text-weak);
        `}
`
