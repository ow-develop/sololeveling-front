import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const SummaryRewardWrapper = styled.div`
  display: flex;
  width: 60px;
  height: 60px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 48px;
    height: 48px;
  }
`
