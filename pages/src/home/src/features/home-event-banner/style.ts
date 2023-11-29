import { Button, Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const HomeEventBannerWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    gap: 16px;
  }
`
export const EventBannerField = styled.div`
  display: flex;
  width: calc(100% - 48px);
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
  border-radius: 8px;
  background: linear-gradient(90deg, #001e49 0%, #001129 100%);
  padding: 24px;
  margin: 0 24px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: calc(100% - 32px);
  }
`
export const ContentField = styled.div`
  display: flex;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`
export const ImgBox = styled.div`
  width: 44px;
`
export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 24px;
  justify-content: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    padding: 24px;
    margin-left: 0;
  }
  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    padding: 16px;
  }
`
export const TitleUnit = styled.div`
  color: var(--text-on-accent);
  ${Token.typography.title_strong}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    text-align: center;
    ${Token.typography.subtitle_strong}
  }
`
export const DescriptionUnit = styled.div`
  color: var(--text-on-accent);
  ${Token.typography.body}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    text-align: center;
  }
`
export const ButtonBox = styled.div`
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
  }
`
export const ButtonUnit = styled(Button)`
  width: 160px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
  }
`
