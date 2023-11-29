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

export const PriceField = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 8px;
`

export const TitleUnit = styled.p`
  padding-bottom: 12px;
  color: var(--text-default);
  ${Token.typography.body_stronger};
`

export const PriceBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const NeedStoneUnit = styled.div`
  padding-bottom: 8px;
  color: var(--text-default);
  ${Token.typography.headline_strong};
`

export const EqualUnit = styled.div`
  flex: none;
  color: var(--text-default);
  ${Token.typography.body_stronger}
`
export const BalanceUnit = styled.div`
  color: var(--text-weak);
  ${Token.typography.body_strong};
`

export const TextUnit = styled.p`
  color: var(--text-default);
  ${Token.typography.subtitle}
`
