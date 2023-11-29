import styled, {
  css,
  FlattenSimpleInterpolation,
  keyframes
} from 'styled-components'

import { ProgressProps } from '.'

const colorMap: {
  [key in ProgressProps['color']]: FlattenSimpleInterpolation
} = {
  light: css`
    background-color: rgba(84, 84, 84, 0.4);
    > div {
      background-color: var(--icon-on-accent);
    }
  `,
  dark: css`
    background-color: var(--border-default);
    > div {
      background-color: var(--border-strong);
    }
  `
}

export const ProgressLinearWrapper = styled.div<{
  location?: ProgressProps['location']
}>`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 12px;

  ${({ location }) => {
    switch (location) {
      case 'bottomRight':
        return css`
          flex-direction: column;
          align-items: flex-end;
        `
      default:
        return
    }
  }}
`

export const ProgressBar = styled.div<{
  color?: ProgressProps['color']
}>`
  width: 100%;
  height: 4px;
  border-radius: 4px;
  ${({ color }) => (color ? colorMap[color] : colorMap['light'])}
`

const loading = (x: number = 100) => keyframes`
  from {
    width: 0;
  }
  to {
    width: ${x}%;
  }
`

export const Indicator = styled.div<{ progress?: number; dynamic?: boolean }>`
  height: 100%;
  border-radius: 4px;

  ${({ dynamic, progress }) =>
    dynamic
      ? css`
          animation: ${loading(progress)} 3000ms forwards;
        `
      : css`
          width: ${progress ?? 100}%;
        `}
`
