import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const DungeonGateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const LastUpdateUnit = styled.div`
  display: flex;
  justify-content: flex-end;
  color: var(--text-weak);
  ${Token.typography.body_strong}

  > b {
    color: var(--text-default);
  }
`
