import { Button, Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const HomeGetStartedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 120px;
  max-width: 1200px;
  width: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    width: 100%;
    gap: 60px;
    padding: 0 24px;
    flex-direction: column;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.MINIMUM)} {
    gap: 24px;
  }
`
export const TitleField = styled.span`
  color: var(--text-strong);
  ${Token.typography.display_4}
`
export const ContentField = styled.div`
  display: flex;
  width: 100%;
  padding: 0 24px;
  justify-content: space-between;
  align-items: flex-start;
  align-content: flex-start;
  row-gap: 24px;
  align-self: stretch;
  flex-wrap: wrap;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    display: grid;
    max-width: 1200px;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 60px;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    grid-template-columns: repeat(1, 1fr);
    justify-content: center;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    display: flex;
    padding: 0 16px;
    row-gap: 24px;
  }
`
export const InfoBox = styled.div`
  width: 243px;
  justify-self: center;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    width: 260px;
  }
`
export const StepUnit = styled.div`
  color: var(--text-default);
  ${Token.typography.headline_strong}
  margin-bottom: 8px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    text-align: center;
  }
`
export const TitleUnit = styled.div`
  color: var(--text-default);
  ${Token.typography.headline_strong}
  margin-bottom: 16px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    text-align: center;
    ${Token.typography.title_strong}
    margin-bottom: 8px;
  }
`
export const DescriptionUnit = styled.div`
  color: var(--text-weak);
  ${Token.typography.subtitle}
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    text-align: center;
    ${Token.typography.body_strong}
  }
`
export const ButtonBox = styled.div`
  display: flex;
  max-width: 1200px;
  justify-content: center;
  align-items: center;
  gap: 16px;
  align-self: stretch;
  margin-bottom: 96px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: flex;
    max-width: 768px;
    flex-direction: column;
    align-items: center;
    align-self: stretch;
  }
`
export const ButtonUnit = styled(Button)`
  width: 264px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
  }

  > a {
    width: 100%;
  }
`
