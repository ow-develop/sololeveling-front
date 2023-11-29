import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const SignInContentsWrapper = styled.div`
  width: 220px;
  height: 240px;
  position: absolute;
  z-index: 1;
`

export const SignInTitleUnit = styled.h3`
  ${Token.typography.headline_strong}
  color: var(--text-strong);
  text-align: center;
`

export const SignInTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin-bottom: 16px;
`

export const SignInSubTitle = styled.div`
  ${Token.typography.body_strong};
  color: var(--text-default);
  text-align: center;
`

export const SignInContentsBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const SignInButtonText = styled.span`
  ${Token.typography.button_l};
  color: var(--text-default);
`
