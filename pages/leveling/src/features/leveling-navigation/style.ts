import styled from 'styled-components'

import { hideScroll } from '~/styles/mixin'

export const LevelingNavigationWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  overflow-x: auto;
  ${hideScroll};
`
