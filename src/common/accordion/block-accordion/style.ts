import styled, { css } from 'styled-components'

const itemBottomBorderStyle = css`
  & > div:not(:last-child) {
    border-bottom: 1px solid var(--border-default);
  }
`

const lastItemBlockStyle = css`
  & > div:last-child > div:last-child {
    padding: 0 0 16px;

    > div {
      border-bottom: 1px solid var(--border-default);
    }
  }
`

export const BlockAccordionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  width: 100%;

  ${itemBottomBorderStyle}
  ${lastItemBlockStyle}
`
