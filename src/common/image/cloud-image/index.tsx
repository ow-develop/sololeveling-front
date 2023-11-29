import React, { useEffect, useState } from 'react'

import ErrorImage from '../error-image'
import { CloudImageWrapper } from './style'

interface CloudImageProps {
  src: string
  alt: string
  position?: 'center' | 'fill'
  radius?: boolean
}

const CloudImage = ({
  src,
  alt,
  position = 'fill',
  radius = false
}: CloudImageProps) => {
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsError(false)
  }, [src])

  if (isError) return <ErrorImage />

  return (
    <CloudImageWrapper position={position} hasRadius={radius}>
      <img
        src={src}
        alt={alt}
        onError={() => {
          setIsError(true)
        }}
      />
    </CloudImageWrapper>
  )
}

export default CloudImage
