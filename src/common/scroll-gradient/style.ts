import styled, { css } from 'styled-components'

import { ZIndex } from '~/constants/style'

export const ScrollGradientWrapper = styled.div<{ height?: number }>`
  display: flex;
  position: relative;
  width: 100%;
  overflow-y: auto;
  ${({ height }) =>
    height &&
    css`
      max-height: ${height}px;
    `}
`

const darkBackground = (dark?: boolean) => {
  return dark ? 'var(--surface-default)' : 'var(--surface-background)'
}

const positionStyle = {
  top: (dark?: boolean) => css`
    width: 100%;
    height: 60px;
    top: 0;
    background: linear-gradient(
      180deg,
      ${darkBackground(dark)} 0%,
      rgba(255, 255, 255, 0) 100%
    );
  `,
  bottom: (dark?: boolean) => css`
    width: 100%;
    height: 60px;
    bottom: 0;
    background: linear-gradient(
      360deg,
      ${darkBackground(dark)} 0%,
      rgba(255, 255, 255, 0) 100%
    );
  `,
  left: (dark?: boolean) => css`
    width: 60px;
    height: 100%;
    top: 0;
    left: 0;
    background: linear-gradient(
      90deg,
      ${darkBackground(dark)} 0%,
      rgba(255, 255, 255, 0) 100%
    );
  `,
  right: (dark?: boolean) => css`
    width: 60px;
    height: 100%;
    top: 0;
    right: 0;
    background: linear-gradient(
      270deg,
      var(--surface-background) 0%,
      rgba(255, 255, 255, 0) 100%
    );
  `
}

export const GradientUnit = styled.div<{
  disabled: boolean
  position: 'top' | 'bottom' | 'left' | 'right'
  dark?: boolean
}>`
  visibility: ${({ disabled }) => (disabled ? 'hidden' : 'visible')};
  position: absolute;
  z-index: ${ZIndex.MODAL};
  ${({ position, dark }) => positionStyle[position](dark)};
`
