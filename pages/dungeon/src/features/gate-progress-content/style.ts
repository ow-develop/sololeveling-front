import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const GateProgressContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`

export const ContentField = styled.div`
  overflow: hidden;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 600px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    flex-direction: column;
    gap: 24px;
  }
`

export const ContentBox = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  height: 100%;
  max-height: 286px;
  padding: 24px 0;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    justify-content: center;
    flex-direction: column;

    gap: 24px;
    max-height: 100%;
  }
`

export const TitleUnit = styled.div`
  color: var(--text-on-accent);
  ${Token.typography.headline_strong}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.title_strong}
  }
`

export const SlideContentItemBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 12px;
  width: 100%;
  height: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    gap: 8px;
  }
`

export const SlideContentItemTitleUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--white-70);
  ${Token.typography.body_stronger}
`
export const SlideContentItemValueBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

export const ExpandInfoItemValueUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
  color: var(--text-on-accent);
  ${Token.typography.headline_strong}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.title_strong}
  }
`
export const ExpandInfoItemSubValueUnit = styled.div`
  color: var(--white-70);
  ${Token.typography.body_strong}
`

export const GateExpandActionWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  align-self: flex-end;
  width: 100%;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    padding: 0 4px;
  }
`

export const ActionTextBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 20px;
  gap: 4px;
  color: var(--text-on-accent);
  letter-spacing: -0.5px;
  ${Token.typography.body}
`
