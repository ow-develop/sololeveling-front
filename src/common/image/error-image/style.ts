import styled from 'styled-components'

export const ErrorImageWrapper = styled.div<{ transparent: boolean }>`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  background-color: ${({ transparent }) =>
    transparent ? 'transparent' : 'var(--border-weak)'};
`

export const ErrorImageBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  max-width: 40px;
  align-items: center;
  justify-content: center;

  > svg {
    max-height: 50px;
    background-color: var(--icon-default) !important;
  }
`
