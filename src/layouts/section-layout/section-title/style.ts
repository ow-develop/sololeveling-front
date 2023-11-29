import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'

export const SectionTitleWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 4px;
  ${({ theme }) => theme.breakpoints.up(Breakpoint.S)} {
    gap: 8px;
  }
  ${noneDraggable}
`

export const TitleField = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
`

export const TitleBox = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`

export const TitlePrevBox = styled.div``

export const TitleUnit = styled.h3`
  color: var(--text-strong);
  ${Token.typography.display_4}

  ${({ theme }) =>
    `${theme.breakpoints.down(Breakpoint.S)} {
      ${Token.typography.headline_strong}    
    }`};
`

export const TitleActionBox = styled.div``

export const DescriptionUnit = styled.p`
  color: var(--text-default);
  ${Token.typography.subtitle}
  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.body_strong}
  }
`
