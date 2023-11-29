import styled, { css, keyframes } from 'styled-components'
import { ZIndex } from '~/constants/style'

const SkeletonLoading = keyframes`
  0% {
    opacity: 0;
    
  }
  100% {
    opacity: 0.5;
  }
`

export const SkeletonStyles = css`
  --base-color: var(--surface-default);
  --highlight-color: var(--surface-floated);

  position: relative;
  overflow: hidden;
  z-index: ${ZIndex.OVERLAY};
  background-color: var(--base-color);

  ::after {
    content: ' ';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 100%;
    background-color: var(--highlight-color);

    animation: ${SkeletonLoading} 1.2s linear infinite alternate;
  }
`

export const SkeletonItem = styled.div`
  ${SkeletonStyles};
  border-radius: 8px;
`
