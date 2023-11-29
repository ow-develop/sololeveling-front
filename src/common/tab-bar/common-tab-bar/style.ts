import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const CommonTabBarWrapper = styled.ul`
  position: relative;
  display: flex;
  gap: 24px;
`

export const TabUnit = styled.li<{ active?: boolean }>`
  padding: 8px 0 12px;
  color: var(${({ active }) => (active ? '--text-strong' : '--text-weak')});
  cursor: pointer;
  transition: color 0.2s ease;

  ${Token.typography.headline_strong}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.title_strong}
  }

  &:hover {
    color: var(--text-strong);
  }
`

export const TabSliderUnit = styled.li`
  position: absolute;
  left: 0;
  bottom: 0;
  height: 4px;
  background-color: var(--icon-strong);
  transition: all 0.3s ease;
`
