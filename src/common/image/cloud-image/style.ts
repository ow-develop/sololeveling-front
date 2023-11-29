import { Token } from '@ow-develop/ow-design-system'
import styled, { css } from 'styled-components'

export const CloudImageWrapper = styled.span<{
  position: 'center' | 'fill'
  hasRadius: boolean
  isNull?: boolean
}>`
  display: block;
  position: absolute;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  background: #f5f5f5;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    user-select: none;
    -webkit-user-drag: none;
    -webkit-touch-callout: none;
    ${({ hasRadius }) =>
      hasRadius &&
      `
    overflow: hidden;
    border-radius: 50%;
    box-shadow: ${Token.shadow.lg};
  `}
  }

  ${({ isNull }) =>
    isNull &&
    css`
      display: flex;
      justify-content: center;
      align-items: center;
    `}
  ${({ position }) =>
    position === 'center' &&
    `
    z-index: 1;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `}
`
