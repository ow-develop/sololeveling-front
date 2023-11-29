import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint } from '~/constants/style'
import { CommonMainLayout } from '~/layouts/style'

export const LevelingMainLayout = styled(CommonMainLayout)`
  gap: 24px;
  align-items: flex-start;
`

export const LevelingContentLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.XL)} {
    flex-direction: column;
  }
`

export const SystemInformationLayout = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  min-width: 740px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.XL)} {
    min-width: auto;
    width: 100%;
  }
`

export const RankUpInformationLayout = styled.div<{ finished: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 48px;
  min-width: 740px;

  ${({ finished }) => {
    if (finished) {
      return css`
        align-items: center;
        max-width: 592px;
        margin: 0 auto;
      `
    } else {
      return css``
    }
  }};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.XL)} {
    min-width: auto;
    width: 100%;
  }
`

export const SystemCardBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  gap: 48px;
  min-height: 404px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    flex-direction: column;
    gap: 32px;
  }
`

export const SystemIconUnit = styled.div`
  svg {
    transform: rotate(180deg);

    ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
      transform: rotate(270deg);
    }
  }
`

export const SystemActionBox = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    flex-direction: column;
  }
`

export const SystemWarningUnit = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  ${Token.typography.subtitle};
  color: var(--status-danger-default);
`

export const SystemMessageUnit = styled.div`
  ${Token.typography.body_strong};
  color: var(--text-weaker);
  text-align: center;
  white-space: pre-wrap;
`
