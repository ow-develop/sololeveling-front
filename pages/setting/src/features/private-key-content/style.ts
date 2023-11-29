import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const PrivateKeyContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
`
export const PrivateKeyBox = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 24px;
  gap: 8px;
  border-radius: 8px;
  border: 1px solid var(--border-default, #4c5561);
`
export const PrivateKeyContentUnit = styled.span`
  color: var(--text-weak);
  ${Token.typography.body};
  word-break: break-all;
`
