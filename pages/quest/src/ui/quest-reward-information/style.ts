import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { Breakpoint } from '~/constants/style'

export const QuestRewardInformationWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 24px;
  gap: 24px;
  background-color: var(--surface-default);
`

export const ThumbnailBox = styled.div`
  width: 160px;
  height: 160px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 120px;
    height: 120px;
  }
`

export const InformationBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: center;
  justify-content: center;
`

export const TitleUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.subtitle_strong};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.body_stronger};
  }
`

export const SubtitleUnit = styled.div`
  color: var(--text-default);
  ${Token.typography.subtitle};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.body_strong};
  }
`
