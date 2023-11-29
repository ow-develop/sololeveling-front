import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { CardStyle } from '~/styles/global-style'
import { ellipsis } from '~/styles/mixin'
import { Breakpoint } from '~/constants/style'

export const ShopListItemWrapper = styled.div`
  position: relative;
  display: flex;
  max-height: 168px;
  ${CardStyle};
  cursor: pointer;

  :hover {
    ${Token.shadow.xl};
  }

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    max-height: none;
  }
`

export const FreeItemWrapper = styled.div<{ disabled?: boolean }>`
  display: flex;
  max-height: 168px;
  ${CardStyle};
  cursor: pointer;

  :hover {
    ${Token.shadow.xl};
  }

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.1;
      cursor: not-allowed;
    `}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    max-height: none;
  }
`

export const FreeItemDisabled = styled.div`
  position: relative;
`

export const CardImageBox = styled.div`
  position: relative;
  width: 100%;
  max-width: 168px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    max-width: 128px;
  }
`

export const CardContentField = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  gap: 16px;
  padding: 24px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    gap: 8px;
    padding: 16px;
  }
`

export const TitleBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2px;
`

export const SubTitleUnit = styled.div`
  ${Token.typography.body_strong}
  color: var(--text-weak);
  ${ellipsis}
`
export const TitleUnit = styled.div`
  ${Token.typography.subtitle_strong};
  color: var(--text-strong);
  ${ellipsis}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.body_stronger};
  }
`

export const DescriptionUnit = styled.div`
  ${Token.typography.body_strong};
  color: var(--text-default);
  white-space: pre-wrap;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.caption_strong};
  }
`

export const PriceBox = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
`

export const PaymentUnit = styled.div`
  width: 20px;
  height: 20px;
`

export const PriceUnit = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  ${Token.typography.subtitle_strong};
  color: var(--text-strong);
  text-align: right;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.body_stronger};
  }
`

export const TimeUnit = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  color: var(--text-default);
  ${Token.typography.body_strong};
`

export const TimeBgUnit = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 100%;
  ${CardStyle};
`
