import { Token } from '@ow-develop/ow-design-system'
import styled from 'styled-components'

import { SeasonRewardCardProps } from './index'

import { Breakpoint } from '~/constants/style'

export const SeasonRewardCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  padding: 24px;
  width: 340px;
  height: 540px;
  background: var(--surface-background);
  border-radius: 8px;
  border: 1px solid var(--border-weak);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 240px;
    height: 480px;
    padding: 16px;
  }
`

export const ImageBox = styled.div`
  width: 200px;
  height: 200px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 160px;
    height: 160px;
  }
`

export const ButtonBox = styled.div`
  margin-top: auto;
  width: 100%;
`

export const TextUnit = styled.p<{
  qualified: SeasonRewardCardProps['qualified']
}>`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 44px;
  font-weight: bold;
  color: var(
    ${({ qualified }) => (qualified ? '--status-info-strong' : '--text-weaker')}
  );
`

export const TitleUnit = styled.div`
  overflow: hidden;
  width: 100%;
  text-align: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--text-strong);
  ${Token.typography.title_strong}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    ${Token.typography.subtitle_strong}
  }
`

export const DescriptionUnit = styled.div`
  height: 172px;
  color: var(--text-weak);
  ${Token.typography.body_strong}
`
