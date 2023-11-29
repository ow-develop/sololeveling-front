import styled from 'styled-components'

export const LoadingIconWrapper = styled.div<{ size: number }>`
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;

  img {
    width: 100%;
    height: 100%;
  }
`
