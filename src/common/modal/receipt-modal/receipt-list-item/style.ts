import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const ReceiptListItemWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 12px;
`

export const ListInfoField = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ListImageBox = styled.div`
  position: relative;
  overflow: hidden;
  width: 64px;
  min-width: 64px;
  height: 64px;
  border-radius: 8px;
`
export const Marking = styled.div<{
  isShadow?: boolean
}>`
  position: absolute;
  bottom: 0;
  display: flex;
  width: 100%;
  height: 20px;
  justify-content: center;
  align-items: center;
  color: var(--text-on-accent);
  ${Token.typography.body_stronger}
  background: ${({ isShadow }) =>
    isShadow ? `var(--rank-shadow-s)` : 'var(--blue-gray-500)'};
`

export const ListContentBox = styled.div``

export const ContentTypeUnit = styled.div`
  color: var(--text-default);
  ${Token.typography.body};
`

export const ContentTitleUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.body_stronger};
`

export const ListAmountUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.body_stronger};
`

export const ListBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`
