import styled from 'styled-components'
import { Token } from '@ow-develop/ow-design-system'

export const HunterInventoryNoListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 24px;
  min-height: 370px;
`
export const DescriptionUnit = styled.div`
  ${Token.typography.subtitle}
  color: var(--text-weak);
  text-align: center;
`
