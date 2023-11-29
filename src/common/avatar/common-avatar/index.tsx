import React, { ReactNode } from 'react'

import { CommonAvatarWrapper } from '~/common/avatar/common-avatar/style'

export interface Props {
  size?: number
  dense?: boolean
  children?: ReactNode
  onClick?: () => void
}

const CommonAvatar = ({ size = 96, dense, children, onClick }: Props) => {
  return (
    <CommonAvatarWrapper
      size={size}
      dense={dense}
      onClick={() => onClick?.()}
      click={!!onClick}
    >
      {children}
    </CommonAvatarWrapper>
  )
}

export default CommonAvatar
