import { ReactNode } from 'react'

import { GradientUnit, ScrollGradientWrapper } from './style'

import { useThemeStore } from '~/atoms/common'

export interface Props {
  children?: ReactNode
  bottom?: boolean
  top?: boolean
  left?: boolean
  right?: boolean
  height?: number
}

const ScrollGradient = ({
  top = true,
  bottom = true,
  left = true,
  right = true,
  height,
  children
}: Props) => {
  const { isDarkMode } = useThemeStore()

  return (
    <ScrollGradientWrapper height={height}>
      {children}
      <GradientUnit position='bottom' disabled={bottom} dark={isDarkMode} />
      <GradientUnit position='top' disabled={top} dark={isDarkMode} />
      <GradientUnit position='left' disabled={left} dark={isDarkMode} />
      <GradientUnit position='right' disabled={right} dark={isDarkMode} />
    </ScrollGradientWrapper>
  )
}

export default ScrollGradient
