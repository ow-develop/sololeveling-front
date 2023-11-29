import styled from 'styled-components'

export const AccountSectionButtonWrapper = styled.button`
  display: flex;
  width: 100%;
  padding: 12px 0;
  align-items: center;
  gap: 8px;
  background-color: transparent;
  border: 0;
  border-radius: 4px;
  transition: background 0.3s ease;

  &:hover {
    background-color: var(--button-hover);
  }
`
