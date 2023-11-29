import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const RewardField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const ClaimItemBox = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ImgUnit = styled.div`
  overflow: hidden;
  width: 64px;
  height: 64px;
  border-radius: 8px;
`

export const TextUnit = styled.div`
  flex: 1;
  color: var(--text-strong);
  ${Token.typography.body_stronger}
`

export const ListInfoField = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ListImageBox = styled.div`
  overflow: hidden;
  width: 64px;
  height: 64px;
  border-radius: 8px;
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
