import { Token } from '@ow-develop/ow-design-system'
import { useState } from 'react'

import { ReactiveImageBox } from './style'
import ErrorImage from '../error-image'

export interface ReactiveImageProps {
  src: string
  alt?: string
  shadow?: keyof (typeof Token)['shadow']
  rounded?: number
  onClick?: () => void
}

const ReactiveImage = ({
  src,
  alt,
  shadow,
  rounded,
  onClick
}: ReactiveImageProps) => {
  const [isError, setIsError] = useState(false)

  if (isError) return <ErrorImage />

  return (
    <ReactiveImageBox shadow={shadow} rounded={rounded}>
      <img
        src={src}
        alt={alt}
        onClick={onClick}
        onError={() => setIsError(true)}
      />
    </ReactiveImageBox>
  )
}

export default ReactiveImage
