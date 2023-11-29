import styled from 'styled-components'

export const LoadingBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: var(--surface-background);
  text-align: center;

  img {
    max-width: 300px;
    width: 100%;
    margin: 0 auto;
    object-fit: contain;
  }
`
