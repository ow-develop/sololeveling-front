import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const SeasonLeaderboardEmptyWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 16px;
  width: 100%;
  height: 312px;
  color: var(--text-weak);
  ${Token.typography.body_stronger};

  > div {
    opacity: 0.2;
  }
`
