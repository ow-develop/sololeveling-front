import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'
import { insideScroll } from '~/styles/mixin'

export const DesktopInventoryLayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  width: 100%;
  height: 100%;
  padding-right: 16px;
  max-height: 568px;
  overflow-y: auto;
  ${insideScroll};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.XL)} {
    padding-right: 0;
    overflow: visible;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: none;
  }
`
