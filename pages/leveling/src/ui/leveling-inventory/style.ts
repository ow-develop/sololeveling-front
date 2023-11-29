import styled from 'styled-components'

export const LevelingInventoryWrapper = styled.div<{ column: number }>`
  display: grid;
  position: relative;
  width: 100%;
  grid-template-columns: ${({ column }) => `repeat(${column}, 1fr)`};
  grid-gap: 16px;
`
