import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const SectionContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const TitleField = styled.h4`
  ${Token.typography.headline_strong}
  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.title_strong}
  }
  color: var(--text-strong);
`

export const ContentField = styled.div`
  width: 100%;
`
