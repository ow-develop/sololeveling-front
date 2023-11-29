import styled from 'styled-components'

import { SlotWrapper } from '../style'
import { LastUpdateUnit } from '../../dungeon-gate/style'

export const GateSlotSkeletonItem = styled(SlotWrapper)`
  background: var(--surface-default);
`

export const GateSlotSkeletonRightItem = styled(LastUpdateUnit)`
  margin-left: auto;
  width: 100px;
  height: 24px;
  background: var(--surface-default);
  border-radius: 8px;
`
