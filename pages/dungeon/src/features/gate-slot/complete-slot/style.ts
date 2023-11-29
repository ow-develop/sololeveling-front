import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { SlotWrapper } from '../style'

import { ZIndex } from '~/constants/style'

export const CompleteSlotWrapper = styled(SlotWrapper)`
  z-index: 0;
  background: var(--surface-default);

  button {
    color: var(--text-on-accent);
  }
`

export const BackgroundUnit = styled.img`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ZIndex.BACKGROUND};
  width: 100%;
  height: 100%;
  object-fit: contain;
  opacity: 1;
`

export const TextUnit = styled.p`
  color: var(--text-on-accent);
  ${Token.typography.subtitle_strong};
  text-align: center;
`
