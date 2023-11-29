import React, { ReactNode, useEffect } from 'react'

import useSystemStore from '../hooks/useSystemStore'

import { InternalPath } from '~/constants/route'
import RedirectContainer from '~/container/redirect-container'

export interface Props {
  children?: ReactNode
}

const LevelingContainer = ({ children }: Props) => {
  const { onResetData } = useSystemStore()

  useEffect(() => {
    return () => {
      onResetData()
    }
  }, [])

  return (
    <RedirectContainer redirect={InternalPath.LEVELING}>
      {children}
    </RedirectContainer>
  )
}

export default LevelingContainer
