import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { ellipsis } from '~/styles/mixin'

export const DashboardInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  gap: 4px;
  border: 1px solid var(--border-default);
  border-radius: 8px;
`

export const TitleUnit = styled.div`
  color: var(--text-weak);
  min-width: 150px;
  text-align: center;
  ${Token.typography.body_strong};
  ${ellipsis};
`

export const ValueUnit = styled.div`
  color: var(--text-strong);
  min-width: 150px;
  text-align: center;
  ${Token.typography.body_stronger};
  ${ellipsis};
`
