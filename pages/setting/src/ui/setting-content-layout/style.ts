import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

interface TypographyType {
  isTypoTypeStrong?: boolean
}
export const SettingContentLayoutWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;
`

export const ContentField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const ContentTextBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
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
