import { LinkButton, Token } from '@ow-develop/ow-design-system'

import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const DescriptionBox = styled.div`
  display: flex;
  align-items: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    flex-wrap: wrap;
    gap: 8px;
  }
`
export const DescriptionUnit = styled.div`
  ${Token.typography.body_strong}
  color: var(--text-default);
  margin-right: 8px;
  word-break: break-all;
`
export const DescriptionColumnBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
