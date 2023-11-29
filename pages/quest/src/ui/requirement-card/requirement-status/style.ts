import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const RequirementStatusWrapper = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  color: var(--text-default);
  ${Token.typography.button_l};
  text-transform: capitalize;
`
