import { LinkButton, TextButton, Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const ProfileWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  gap: 48px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: flex;
    max-width: 768px;
    flex-direction: column;
    align-items: flex-start;
    gap: 32px;
    align-self: stretch;
  }
`
export const ProfileUnit = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
`
export const ProfileField = styled.div`
  display: flex;
`
export const InfoField = styled.div`
  display: flex;
  width: 282px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
  }
`
export const ProfileBox = styled.div`
  display: flex;
  gap: 32px;
  word-break: break-word;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    gap: 16px;
  }
`
export const ImageBox = styled.div`
  display: flex;
  width: 138px;
  height: 138px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 50%;
  overflow: hidden;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 100px;
    height: 100px;
  }
`
export const NickNameUnit = styled.div`
  ${Token.typography.display_4}
  color: var(--text-strong);
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.title_strong}
    color: var(--text-strong);
  }
`
export const AddressUnit = styled.div`
  ${Token.typography.subtitle}
  color: var(--text-default);
  margin-bottom: 32px;
  display: flex;
  gap: 4px;
  align-items: center;
`
export const InfoBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
export const InfoNameUnit = styled.div`
  ${Token.typography.subtitle}
  color: var(--text-default);
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.body_strong}
  }
`
export const Info = styled.div`
  ${Token.typography.title_strong}
  color: var(--text-strong);
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.body_stronger}
  }
`
export const InfoUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  flex: 1 0 0;
`
