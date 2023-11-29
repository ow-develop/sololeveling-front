import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

export const AccountSectionWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const AccountTitleUnit = styled.div`
  ${Token.typography.title_strong};
  color: var(--text-strong);
`

export const AccountListBox = styled.div`
  display: flex;
  flex-direction: column;
`

export const ItemTitleBox = styled.div<{ selected?: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(--text-default);
  ${Token.typography.subtitle};

  ${({ selected }) =>
    selected &&
    css`
      ${Token.typography.subtitle_strong};
    `}
`

export const ItemDescriptionUnit = styled.div`
  color: var(--text-strong);
  ${Token.typography.subtitle_strong};
`
