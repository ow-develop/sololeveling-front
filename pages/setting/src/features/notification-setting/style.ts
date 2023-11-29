import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const ContentSideField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0;
  gap: 16px;
`
export const DescriptionBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0;
  gap: 8px;
`
export const DescriptionRowBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0;
    gap: 16px;
  }
`
export const DescriptionUnit = styled.div`
  ${Token.typography.body}
  color: var(--text-default);
`
