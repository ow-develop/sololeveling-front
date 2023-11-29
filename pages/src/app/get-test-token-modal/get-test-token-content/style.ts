import styled from 'styled-components'
import { Token } from '@ow-develop/ow-design-system'

export const GetTestTokenWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
`
export const ContentField = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: row;
  align-items: flex-start;
  gap: 24px;
  border-radius: 8px;
  border: 1px solid var(--border-default);
`
export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`
export const ContentUnit = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`
export const TitleUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.body_stronger}
`
export const DescriptionUnit = styled.div`
  color: var(--text-default);
  ${Token.typography.body_strong}
`
export const AmountField = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const AmountBox = styled.div`
  display: flex;
  gap: 2px;
`
export const ButtonBox = styled.div`
  display: flex;
  justify-content: flex-end;
`
export const GuideTextUnit = styled.div`
  color: var(--status-danger-default);
  ${Token.typography.body_strong};
  text-align: center;
`
