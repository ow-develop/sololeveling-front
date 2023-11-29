import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const ConfirmInfoField = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 48px;
  height: 224px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    flex-direction: column;
    height: fit-content;
  }
`

export const ConfirmActionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const NotificationBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 4px;
  color: var(--text-weak);
`
