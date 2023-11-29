import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const AccordionItemWrapper = styled.li<{ extend: boolean }>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  max-height: ${({ extend }) => (extend ? '100vh' : '76px')};
  border-bottom: 1px solid var(--border-default);
  transition: max-height 0.3s ease-in-out;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    max-height: ${({ extend }) => (extend ? '100vh' : '104px')};
  }
`

export const ItemHeaderBox = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  padding: 16px 0;
  min-height: 76px;
  gap: 16px;
  cursor: pointer;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    min-height: 104px;
  }
`

export const ItemBadge = styled.div`
  display: flex;
  color: var(--text-on-accent);
  justify-content: center;
  align-items: center;
  min-width: 22px;
  width: 22px;
  height: 22px;
  border-radius: 16px;
  background-color: var(--icon-strong);
  ${Token.typography.caption_strong}
`

export const ItemTitle = styled.div`
  color: var(--text-strong);
  max-width: 1000px;
  padding-right: 40px;
  ${Token.typography.subtitle}
`

export const ItemExpand = styled.div<{ extend: boolean }>`
  position: absolute;
  right: 10px;
  transition: transform 0.3s ease;
  transform: ${({ extend }) => (extend ? 'rotateX(180deg)' : '')};
`

export const ItemContentBox = styled.div`
  display: flex;
  color: var(--text-default);
  padding: 0 40px 24px;
  ${Token.typography.subtitle}
`
