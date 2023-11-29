import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

export const FooterWrapper = styled.footer`
  position: relative;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  padding: 32px 0;

  > svg {
    cursor: pointer;
  }
`

export const LogoBox = styled.div<{ dark: boolean }>`
  svg {
    color: #fff;
  }
`

export const DropdownBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`

export const PolicyBox = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  a {
    position: relative;
    display: inline-block;
    color: var(--text-default);
    ${Token.typography.caption};
  }

  a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 2px;
    width: 100%;
    height: 1px;
    background: var(--text-default);
  }
`

export const CopyrightBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const SocialIconBox = styled.div`
  display: flex;

  a {
    display: block;
    padding: 10px;
  }
`

export const CopyRightUnit = styled.p`
  display: flex;
  align-items: center;
  text-align: center;
  gap: 8px;
  color: var(--text-default);
  ${Token.typography.caption};
`
