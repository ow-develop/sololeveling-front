import styled from 'styled-components'

export const LoadingWrapper = styled.div<{ width?: number; height?: number }>`
  width: ${({ width }) => (width ? `${width}px` : '100%')};
  height: ${({ height }) => (height ? `${height}px` : '100%')};
`
