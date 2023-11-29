import styled, { css } from 'styled-components'

export const SvgIconWrapper = styled.div<{
  size: number
  fill: string
  hasClickEvent: boolean
}>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ size }) => size}px;
  height: ${({ size }) => size}px;
  min-width: ${({ size }) => size}px;

  > svg {
    width: 100%;

    ${({ fill }) =>
      fill &&
      css`
        fill: var(--${fill}) !important;

        > path {
          fill: var(--${fill}) !important;
        }
      `}
  }

  ${({ hasClickEvent }) =>
    hasClickEvent &&
    css`
      cursor: pointer;
    `}
`
