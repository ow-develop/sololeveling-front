import styled from 'styled-components'

import { Breakpoint, ZIndex } from '~/constants/style'

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  position: sticky;
  top: 0;
  background: var(--overlay-sticky);
  backdrop-filter: blur(12px);
  z-index: ${ZIndex.STICKY};
`

export const HeaderContentField = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 24px;
  width: 100%;
  height: 64px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    padding: 0 16px;
  }
`

export const HeaderGroupBox = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  gap: 64px;
  height: 100%;
`

export const HeaderProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 32px;

  > svg {
    cursor: pointer;
  }
`

export const HeaderDrawerBox = styled.div<{ isOpen: boolean }>`
  display: flex;
  position: relative;
  width: 100%;
  ${({ isOpen }) =>
    !isOpen &&
    `
    & * {
      pointer-events: none;
    }
  `}
`
