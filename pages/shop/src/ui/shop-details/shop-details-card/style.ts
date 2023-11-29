import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const ShopDetailsWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 48px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    flex-direction: column;
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    gap: 32px;
  }
`

export const ThumbnailBox = styled.div`
  position: relative;
  max-width: 576px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    margin: 0 auto;
  }
`

export const InformationField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
  width: 100%;
  max-width: 576px;
  height: 100%;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.L)} {
    max-width: none;
  }
`

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    gap: 8px;
  }
`

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const SubTitleUnit = styled.div`
  ${Token.typography.subtitle};
  color: var(--text-default);
`

export const TitleUnit = styled.h3`
  ${Token.typography.display_4};
  color: var(--text-strong);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.title_strong};
  }
`

export const DescriptionUnit = styled.div`
  ${Token.typography.subtitle};
  color: var(--text-default);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.body_strong};
  }
`

export const ContentBox = styled.div`
  display: flex;
  justify-content: space-between;
`

export const ContentUnit = styled.div`
  min-width: 50px;
  ${Token.typography.title_strong};
  color: var(--text-strong);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.body_stronger};
  }
`

export const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  text-align: right;
  gap: 4px;
`

export const FreePriceBox = styled.div`
  position: relative;
  display: flex;
  justify-content: flex-end;
  align-items: baseline;
  gap: 4px;
`

export const PriceUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  ${Token.typography.headline_strong};
  color: var(--text-strong);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.title_strong};
  }
`

export const FreePriceUnit = styled.div`
  color: var(--text-weakest, #666d77);
  font-size: 12px;
  font-weight: 500;
  text-decoration-line: line-through;
`

export const PricePaymentBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 4px;
  ${Token.typography.subtitle_strong};
  color: var(--text-strong);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.body_stronger};
  }
`

export const BalanceUnit = styled.span`
  ${Token.typography.subtitle};
  color: var(--text-strong);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.body};
  }
`

export const ConfirmField = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const WarningBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  ${Token.typography.body};
  color: var(--text-default);
  text-align: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    align-items: flex-start;
    ${Token.typography.body};
  }
`

export const FreeBadge = styled.div`
  position: absolute;
  top: 12px;
  left: 12px;
  z-index: 1;
  padding: 6px 10px;
  background-color: var(--text-accent);
  border-radius: 8px;
  color: var(--text-default);
  ${Token.typography.body_stronger};
`
