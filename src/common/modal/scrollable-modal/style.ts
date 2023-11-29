import styled from 'styled-components'

import { insideScroll } from '~/styles/mixin'

export const ScrollContentBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 700px;
  flex: 1;
  overflow-y: auto;
  ${insideScroll};
`
