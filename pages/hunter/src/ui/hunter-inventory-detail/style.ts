import { Button, TextButton, Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'
import { Breakpoint, ZIndex } from '~/constants/style'

export const HunterModalWrapper = styled.div`
  display: flex;
  max-width: 1200px;
  width: 100%;
  height: 100%;
  position: relative;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    flex-direction: column;
    align-items: flex-start;
  }
  border-radius: 8px;
`
export const HunterProfileWrapper = styled.div`
  width: 50%;
  display: flex;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    height: 100%;
  }
  ${({ theme }) => theme.breakpoints.down(Breakpoint.MINIMUM)} {
    padding: 32px;
    max-height: 296px;
    & img {
      object-fit: contain;
    }
  }
`
export const HunterInfoWrapper = styled.div`
  width: 50%;
  overflow-y: auto;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    width: 100%;
    height: 100%;
    overflow-y: visible;
  }
  display: flex;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
`
export const Title = styled.div`
  ${Token.typography.display_4};
  color: var(--text-on-accent);
`
export const SubTitle = styled.div`
  ${Token.typography.subtitle};
  color: var(--text-on-accent);
`
export const InfoUnit = styled.div`
  ${Token.typography.body_strong};
  color: var(--text-on-accent);
`
export const InfoField = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  align-self: stretch;
`
export const InfoBox = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
`
export const HunterShortsUnit = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    grid-template-columns: repeat(1, 1fr);
  }
`
export const ShortsUnit = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  flex: 1 0 0;
  border-radius: 4px;
  background: var(--white-10, rgba(255, 255, 255, 0.1));
  backdrop-filter: blur(4px);
`
export const InfoStrong = styled.div`
  ${Token.typography.body_stronger};
  color: var(--text-on-accent);
`
export const CloseButtonUnit = styled(Button)`
  position: absolute;
  top: 24px;
  right: 24px;
  width: 32px;
  height: 32px;
  z-index: ${ZIndex.MODAL + 1};
`
export const ButtonInfoUnit = styled(TextButton)`
  ${Token.typography.body_strong};
  color: var(--text-on-accent);
`
