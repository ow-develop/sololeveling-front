import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const RankInformationWrapper = styled.div``

export const RankImageField = styled.div`
  display: flex;
  width: 100%;
  height: 288px;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 180px;
    height: 180px;
  }
`

export const BadgeImageBox = styled.div<{ disabled?: boolean }>`
  width: 160px;
  ${({ disabled }) =>
    disabled &&
    css`
      filter: grayscale(1);
      opacity: 0.5;
    `}
`
