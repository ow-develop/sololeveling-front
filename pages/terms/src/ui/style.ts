import styled from 'styled-components'
import { Token } from '@ow-develop/ow-design-system'

export const TermsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 48px;
`
export const ArticleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const ArticleTitleUnit = styled.h3`
  ${Token.typography.subtitle_strong};
  color: var(--text-strong);
`

export const ArticleContentsUnit = styled.div`
  ${Token.typography.body};
  color: var(--text-default);
  white-space: pre-wrap;
`

export const TableWrapper = styled.div`
  overflow-x: scroll;

  table {
    ${Token.typography.body};
    color: var(--text-default);

    th {
      min-width: 200px;
      max-width: 200px;
      width: 200px;
      padding: 10px;
      ${Token.typography.body_stronger};
      color: var(--text-default);
      border: 1px solid var(--border-weak);
    }

    td {
      min-width: 200px;
      max-width: 200px;
      width: 200px;
      padding: 10px;
      border: 1px solid var(--border-weak);
    }
  }
`
