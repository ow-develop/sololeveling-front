import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

import { CardStyle } from '~/styles/global-style'
import { ellipsis, noneDraggable } from '~/styles/mixin'
import { Breakpoint } from '~/constants/style'

export const LevelingInventoryItemWrapper = styled.div<{
  disabled: boolean
  selected: boolean
  insufficient: boolean
}>`
  overflow: hidden;
  display: flex;
  position: relative;
  align-items: center;
  gap: 12px;
  height: 112px;
  padding: 16px;
  border: 2px solid transparent;
  cursor: pointer;
  transition: box-shadow 0.3s ease;

  ${CardStyle};
  ${noneDraggable};

  :hover {
    ${Token.shadow.lg};
  }

  ${({ selected }) =>
    selected &&
    css`
      border-color: var(--accent-button-default);
    `}

  ${({ insufficient }) =>
    insufficient &&
    css`
      cursor: default;
    `}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    width: 100%;
    height: auto;
    flex-wrap: wrap;
  }
`

export const ItemImageBox = styled.div<{ disabled: boolean }>`
  display: flex;
  position: relative;
  width: 80px;
  min-width: 80px;
  height: auto;
  border-radius: 8px;
  overflow: hidden;

  ${({ disabled }) =>
    disabled &&
    css`
      opacity: 0.5;
    `}
`

export const ItemInfoField = styled.div<{ disabled: boolean }>`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: calc(100% - 104px);
  height: 80px;

  color: var(--text-default);
  ${Token.typography.body};

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--text-weaker);
    `}
`

export const ItemTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

export const AmountBox = styled.div`
  display: flex;
  gap: 4px;
`

export const TitleUnit = styled.div<{ disabled: boolean }>`
  color: var(--text-strong);
  ${Token.typography.subtitle_strong};
  ${ellipsis}

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--text-weak);
    `}
`

export const InsufficientBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
  color: var(--status-danger-default);
`

export const AmountControlField = styled.div`
  position: absolute;
  right: 16px;
  display: flex;
  gap: 8px;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.S)} {
    position: relative;
    right: 0;
    width: 100%;
    justify-content: flex-end;
  }
`

export const AmountControlBox = styled.div`
  ${CardStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 114px;
  height: 30px;
  background-color: var(--surface-floated);
  border: 1px solid var(--border-default);
  border-radius: 32px;
  cursor: default;

  > button {
    height: auto;
    padding: 0;
  }
`

export const MaxControlBox = styled.div`
  ${CardStyle};
  display: flex;
  justify-content: center;
  align-items: center;
  width: 58px;
  height: 30px;
  padding: 4px 8px;
  background-color: var(--surface-floated);
  border: 1px solid var(--border-default);
  border-radius: 32px;
  cursor: default;
  ${Token.typography.body_strong};
`

export const AmountNumberUnit = styled.div`
  min-width: 40px;
  color: var(--text-strong);
  ${Token.typography.subtitle_strong};
  text-align: center;
`
