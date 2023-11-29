import styled from 'styled-components'
import { Breakpoint } from '~/constants/style'

export const SignInImgUnit = styled.img`
  object-fit: cover;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    padding: 0;
  }
`
export const SignInBottomImgBox = styled.div<{ forwardPosition?: boolean }>`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  z-index: 1;
  line-height: 0;
  font-size: 0;

  > img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    > img {
      height: 300px;
    }
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    > img {
      height: 200px;
    }
  }
`
