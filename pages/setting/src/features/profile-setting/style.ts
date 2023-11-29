import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const NickNameLayout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 16px;
`
export const NicknameEditField = styled.form`
  width: 480px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
  }
`
export const ButtonBox = styled.div`
  margin-top: 32px;
  width: 240px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.MINIMUM)} {
    width: 100%;
  }
`
