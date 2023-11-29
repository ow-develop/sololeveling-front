import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const LevelingMenuWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 16px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    grid-template-columns: repeat(1, 1fr);
  }
`
