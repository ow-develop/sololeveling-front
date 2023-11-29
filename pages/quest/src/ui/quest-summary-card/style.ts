import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'
import { CardStyle } from '~/styles/global-style'

export const QuestSummaryCardWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: var(--surface-default);
  padding: 24px;
  gap: 16px;
  ${CardStyle};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    flex-direction: column;
    justify-content: flex-start;
  }
`

export const ContentField = styled.div`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  gap: 8px;
`

export const InfoBox = styled.div`
  display: flex;
  gap: 8px;
`

export const TitleUnit = styled.div<{ disabled: boolean }>`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: var(--text-strong);

  ${Token.typography.title_strong};
  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--text-weaker);
    `}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.subtitle_strong};
  }
`

export const RewardBox = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    gap: 4px;
  }
`
