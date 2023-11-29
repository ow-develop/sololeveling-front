import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { SlotWrapper } from '../style'

import { Breakpoint, ZIndex } from '~/constants/style'

// ${({ dark }) =>
//   dark
//     ? 'var(--surface-default)'
//     : 'linear-gradient(360deg,rgba(0, 11, 26, 0.4) 0%,rgba(0, 11, 26, 0.04) 100%)'};
export const DisabledSlotWrapper = styled(SlotWrapper)<{ $dark: boolean }>`
  z-index: 0;
  background: var(--surface-default);
  color: var(--text-on-accent);

  button {
    color: var(--text-on-accent);
  }

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    z-index: ${ZIndex.BACKGROUND};
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      rgba(0, 11, 26, 0.4) 0%,
      rgba(0, 11, 26, 0.04) 100%
    );
  }
`

export const BackgroundUnit = styled.img`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: ${ZIndex.BACKGROUND};
  transform: translate(-50%, -50%);
  opacity: 0.5;
  width: 180px;
  height: 180px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 100px;
    height: 100px;
  }
`

export const TextUnit = styled.p`
  padding: 0 15%;
  text-align: center;
  word-break: break-word;
  color: var(--white-30);
  ${Token.typography.body_strong};
`

export const IconUnit = styled.i`
  transform: rotate(180deg);
`
