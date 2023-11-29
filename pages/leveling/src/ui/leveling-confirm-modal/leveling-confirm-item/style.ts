import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const LevelingConfirmItemWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`

export const ConfirmTitleUnit = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  text-align: center;
  white-space: pre-wrap;
  color: var(--text-strong);
  padding-bottom: 16px;
  ${Token.typography.subtitle_strong};
`

export const ConfirmInfoField = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const ConfirmImageBox = styled.div`
  width: 140px;
  height: 140px;
  border-radius: 8px;
  overflow: hidden;
`

export const ConfirmAmountUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.textfield_strong};
`
