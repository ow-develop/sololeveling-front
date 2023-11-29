import { Button, Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'
import { Breakpoint } from '~/constants/style'

export const TitleField = styled.div`
  display: flex;
  justify-content: center;
  color: var(--text-strong);
  ${Token.typography.title_strong}
`
export const ContentField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`
export const ContentBox = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;

  border-radius: 8px;
  border: 1px solid var(--border-weak);
  background: var(--surface-floated);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    padding: 16px;
  }
`
export const ContentTextUnit = styled.p`
  color: var(--text-default);
  ${Token.typography.body}
`

export const RowBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 8px;
`
export const ButtonBox = styled(RowBox)`
  gap: 16px;
`
export const DeleteAgreeUnit = styled.div`
  color: var(--text-default);
  ${Token.typography.body_strong}
`
export const DeleteButtonUnit = styled(Button)<{ disable?: boolean }>`
  border: 1px solid var(--status-danger-default);
  background: var(--status-danger-default);
  color: var(--text-on-accent);

  :disabled {
    background: var(--status-danger-weak);
    border-color: var(--status-danger-weak);
    color: var(--white-30);
  }
`
