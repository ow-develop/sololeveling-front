import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { Breakpoint, ZIndex } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'

export const ItemCardList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 16px;
  grid-auto-rows: minmax(max-content, 1fr);
  padding: 0 8px 8px;
  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    grid-template-columns: repeat(2, 1fr);
  }
`
export const DefaultImgField = styled.div<{
  disabled: boolean
  selected: boolean
}>`
  display: flex;
  position: relative;
  flex-direction: column;
  height: 100%;
  border-radius: 8px;
  background-color: var(--surface-default);
  padding: 0;
  cursor: pointer;
  overflow: hidden;
  box-sizing: border-box;

  ${noneDraggable};
  ${Token.shadow.md};

  ${({ disabled }) =>
    disabled &&
    css`
      cursor: default;
    `}

  ${({ selected }) =>
    selected &&
    css`
      border: 2px solid var(--accent-button-default);
    `}

  :hover {
    ${Token.shadow.lg};
  }
`
export const DefaultImgBox = styled.div<{ hasNoProfile: boolean }>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  ${({ hasNoProfile }) =>
    hasNoProfile &&
    css`
      width: 156px;
      height: 236px;
    `}

  background: var(--status-neutral-weak);
`
export const DefaultImgText = styled.div`
  position: absolute;
  z-index: ${ZIndex.DEFAULT};
  color: var(--text-weak);
  ${Token.typography.body_strong}
`
export const ButtonBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`
export const ProfileGuideUnit = styled.div`
  text-align: center;
  color: var(--text-weak);
  ${Token.typography.body}
`
