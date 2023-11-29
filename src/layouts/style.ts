import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'

const DefaultMainStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: 48px;
`

export const CommonMainLayout = styled.div`
  ${DefaultMainStyle};
  max-width: 1200px;
  padding-top: 48px;
  padding-bottom: 48px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.XL)} {
    padding-left: 24px;
    padding-right: 24px;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    padding-top: 32px;
    padding-bottom: 64px;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    padding-left: 16px;
    padding-right: 16px;
  }
`

export const BannerMainLayout = styled.div`
  ${DefaultMainStyle};
  padding-bottom: 96px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    padding-bottom: 64px;
  }
`
