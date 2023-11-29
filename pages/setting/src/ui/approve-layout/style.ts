import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

interface TypographyType {
  isTypoTypeStrong?: boolean
}
export const ApproveLayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const ContentField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  gap: 8px;
  border: 1px solid var(--border-default);
  border-radius: 8px;
`

export const ContentTextBox = styled.div`
  display: flex;
  flex-direction: column;
`
export const ToggleBox = styled.div`
  margin-left: 16px;
`
export const ContentTitleUnit = styled.div`
  ${Token.typography.title_strong};
  margin-bottom: 8px;
`
export const ContentDescriptionUnit = styled.div<TypographyType>`
  display: flex;
  align-items: center;
  ${({ isTypoTypeStrong }) =>
    isTypoTypeStrong ? Token.typography.body_strong : Token.typography.body}
`
