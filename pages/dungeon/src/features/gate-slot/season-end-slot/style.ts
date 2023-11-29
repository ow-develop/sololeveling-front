import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { SlotWrapper } from '../style'

import { ZIndex } from '~/constants/style'

export const SeasonEndSlotWrapper = styled(SlotWrapper)`
  z-index: 0;
  background: var(--surface-default);

  button {
    color: var(--text-on-accent);
  }
`

export const BackgroundUnit = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const BackgroundBox = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ZIndex.BACKGROUND};
  width: 100%;
  height: 100%;

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.3);
  }
`

export const TextUnit = styled.p`
  padding: 0 25% 8px;
  word-break: break-word;
  text-align: center;
  color: var(--white-70);
  ${Token.typography.button_l};
`
