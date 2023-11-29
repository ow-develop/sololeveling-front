import { StaticImageData } from 'next/image'
import { useEffect, useState } from 'react'

import { FullImageWrapper, ImageUnit } from './style'
import ErrorImage from '../error-image'

export interface Props {
  src: string | StaticImageData
  size?: number
  variant?: 'none' | 'card'
  defaultSrc?: string
  alt?: string
}

const FullWidthImage = ({
  src,
  alt,
  size,
  variant = 'none',
  defaultSrc
}: Props) => {
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsError(!src)
  }, [src])

  if (isError) return <ErrorImage />

  return (
    <FullImageWrapper variant={variant} size={size}>
      <ImageUnit
        src={src?.toString() || defaultSrc}
        alt={alt ?? ''}
        onError={() => setIsError(true)}
      />
    </FullImageWrapper>
  )
}

export default FullWidthImage
