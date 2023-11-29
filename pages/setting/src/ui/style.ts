import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const SettingMainLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    flex-direction: column;
  }
`
export const SettingContentLayout = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 48px;
`
export const TabListLayout = styled.div`
  flex-direction: column;
  width: 264px;
  margin-right: 48px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
`
export const SettingSideContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`
