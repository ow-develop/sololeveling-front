import { CommonProfileImage, CommonProfileWrapper } from './style'

interface Props {
  thumbImg: string
  alt?: string
  size?: 'lg' | 'md' | 'sm'
}

// TODO avatar 컴포넌트랑 정리 필요
const CommonProfile = ({ size = 'lg', alt, thumbImg }: Props) => {
  return (
    <CommonProfileWrapper size={size}>
      <CommonProfileImage src={thumbImg} alt={alt} />
    </CommonProfileWrapper>
  )
}

export default CommonProfile
