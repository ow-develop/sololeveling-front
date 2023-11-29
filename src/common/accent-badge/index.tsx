import React, { ReactNode } from 'react'

import { AccentBadgeWrapper } from '~/common/accent-badge/style'

export interface Props {
  disabled?: boolean
  children?: ReactNode
}

const AccentBadge = ({ disabled, children }: Props) => {
  return <AccentBadgeWrapper disabled={disabled}>{children}</AccentBadgeWrapper>
}

export default AccentBadge
