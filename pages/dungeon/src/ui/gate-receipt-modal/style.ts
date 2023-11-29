import styled from 'styled-components'

export const ListBox = styled.div`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-height: 352px;
  gap: 12px;
  overflow-y: auto;

  ::-webkit-scrollbar {
    display: none;
  }
`
