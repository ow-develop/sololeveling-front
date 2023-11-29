import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { noneDraggable } from '~/styles/mixin'

export const BlockAccordionItemWrapper = styled.div<{
  extend: boolean
  height?: number
}>`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: max-height 0.3s ease-in;
  width: 100%;
  max-height: ${({ extend }) => (extend ? '100vh' : '57px')};
  ${noneDraggable}

  ${({ height }) =>
    height &&
    css`
      overflow-y: auto;
      max-height: ${height};
    `}
`

export const ItemHeaderBox = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: center;
  gap: 16px;
  padding: 12px 16px;
  min-height: 58px;
  border-bottom: 1px solid var(--border-default);
  cursor: pointer;
`

export const ItemBadge = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 22px;
  height: 22px;
  ${Token.typography.caption_strong}
`

export const ItemTitle = styled.div`
  color: var(--text-strong);
  padding-right: 40px;
  ${Token.typography.body_stronger}
`

export const ItemExpand = styled.div<{ extend: boolean }>`
  position: absolute;
  right: 10px;
  transition: transform 0.3s ease;
  transform: ${({ extend }) => (extend ? 'rotateX(180deg)' : '')};
`

export const ItemContentField = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemContentBox = styled.div`
  display: flex;
  flex-direction: column;
  background-color: var(--status-neutral-weak);
`
