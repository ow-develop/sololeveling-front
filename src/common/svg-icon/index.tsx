import { HTMLAttributes, ReactNode } from 'react'

import { SvgIconWrapper } from './style'

interface Props extends HTMLAttributes<HTMLDivElement> {
  icon: ReactNode
  size?: number
  color?: string
}

const SvgIcon = ({ size = 24, color, icon, onClick }: Props) => {
  return (
    <SvgIconWrapper
      fill={color}
      size={size}
      onClick={onClick}
      hasClickEvent={!!onClick}
    >
      {icon}
    </SvgIconWrapper>
  )
}

export default SvgIcon
