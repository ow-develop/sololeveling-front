import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const ContentField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;

  > * {
    text-align: center;
  }
`

export const ImageBox = styled.div`
  width: 240px;
  height: 240px;
`

export const TextField = styled.div``

export const TextUnit = styled.p`
  color: var(--text-default);
  ${Token.typography.subtitle};
`

export const HeadingUnit = styled.h4`
  padding-bottom: 12px;
  color: var(--text-default);
  ${Token.typography.body_stronger}
`

export const ValueUnit = styled.p`
  padding-bottom: 8px;
  color: var(--text-strong);
  ${Token.typography.headline_strong}
`

export const MyBalanceUnit = styled.p`
  color: var(--text-weak);
  ${Token.typography.body_strong}
`
