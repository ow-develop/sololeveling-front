import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const HomeRewardWrapper = styled.div`
  position: relative;
  height: 884px;
  display: flex;
  padding: 80px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: flex;
    padding: 40px 0;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 600px;
  }
`

export const TitleUnit = styled.div`
  text-align: center;
  color: var(--text-strong);
  ${Token.typography.title};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    color: var(--text-default);
    ${Token.typography.subtitle}
  }
`
export const DescriptionBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: flex;
    flex-wrap: wrap;
    gap: 0 4px;
  }
`
export const DescriptionUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.display_4}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.headline_strong}
    text-align:center
  }
`
export const VideoBox = styled.video`
  object-fit: cover;
  width: 100%;
  height: 100%;
`
export const TitleBox = styled.div`
  position: absolute;
  top: 80px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    top: 40px;
  }
`
