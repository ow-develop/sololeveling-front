import { Button, Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const ModalHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
`
export const HeadingField = styled.div`
  display: flex;
  justify-content: space-between;
`

export const TitleBox = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  min-width: 20px;
  max-width: calc(100% - 40px);
`

export const TitleUnit = styled.b`
  display: block;
  color: var(--text-strong);
  ${Token.typography.title_strong}

  &::selection {
    background: transparent;
  }
`

export const DescriptionBox = styled.div`
  color: var(--text-default);
  ${Token.typography.body}
`

export const CloseButtonUnit = styled(Button)`
  position: relative;
  right: -4px;
  height: auto;
  padding: 0;
`
