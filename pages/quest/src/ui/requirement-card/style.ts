import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { CardStyle } from '~/styles/global-style'

const CardBackgroundStyle = {
  preceding: css`
    background-color: var(--surface-default);
  `,
  requirement: css`
    background-color: var(--status-neutral-weak);
  `,
  complete: css`
    background-color: var(--status-success-weak);
  `
}

export const RequirementCardWrapper = styled.div<{
  status: 'preceding' | 'requirement' | 'complete'
}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  gap: 16px;
  width: 100%;
  min-height: 112px;

  border: 1px solid var(--border-default);
  border-radius: 8px;

  ${({ status }) => CardBackgroundStyle[status]};
`

export const InformationField = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`

export const ThumbnailBox = styled.div<{ completed: boolean }>`
  ${CardStyle};
  display: flex;
  width: 80px;
  height: 80px;
  border-radius: 8px;
  overflow: hidden;

  ${({ completed }) =>
    completed &&
    css`
      opacity: 0.5;
    `}
`

export const TitleUnit = styled.div<{ completed: boolean }>`
  ${Token.typography.subtitle_strong};
  color: var(--text-strong);

  ${({ completed }) =>
    completed &&
    css`
      color: var(--text-weak);
    `}
`

export const ActionBox = styled.div``
