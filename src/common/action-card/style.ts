import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const ActionCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 128px;
  padding: 24px;
  border-radius: 8px;
  background: var(--surface-default);
  ${Token.shadow.md}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    flex-direction: column;
    height: auto;
    padding: 16px;
    gap: 32px;
  }
`

export const LeftField = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    flex-direction: column;
  }
`

export const TextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    text-align: center;
  }
`

export const HeadingUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.title_strong}
`

export const TextUnit = styled.div`
  color: var(--text-weak);
  ${Token.typography.body_strong}
`

export const RightField = styled.div`
  width: 200px;
`
