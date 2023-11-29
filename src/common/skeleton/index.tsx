import { CSSProperties, ReactNode } from 'react'
import { SkeletonItem } from '~/common/skeleton/style'

const Skeleton = ({ children }: { children: ReactNode }) => {
  return <>{children}</>
}

const SkeletonCircle = ({
  size,
  style
}: {
  size?: number
  style?: CSSProperties
}) => {
  return (
    <SkeletonItem
      style={{
        width: size ? `${size}px` : '100%',
        height: size ? `${size}px` : '100%',
        borderRadius: '50%',
        ...style
      }}
    />
  )
}

const SkeletonRectangle = ({
  width,
  height,
  borderRadius,
  style
}: {
  width?: number
  height?: number
  borderRadius?: number
  style?: CSSProperties
}) => {
  return (
    <SkeletonItem
      style={{
        width: width ? `${width}px` : '100%',
        height: height ? `${height}px` : '20px',
        borderRadius: borderRadius ? `${borderRadius}px` : '8px',
        ...style
      }}
    />
  )
}

export default Object.assign(Skeleton, {
  Item: SkeletonItem,
  Circle: SkeletonCircle,
  Rect: SkeletonRectangle
})
