import { ReactNode } from '@mdx-js/react/lib'
import { CloseIcon } from '@ow-develop/ow-icons/react/material'

import { ContentBox, DeleteButtonBox, RankInputCardWrapper } from './style'

import FullWidthImage from '~/common/image/full-width-image'
import SvgIcon from '~/common/svg-icon'

export interface Props {
  shadow?: string
  imgUrl?: string
  disabled?: boolean
  onClose?: () => void
  onClick?: () => void
  children?: ReactNode
}

const RankInputCard = ({
  children,
  shadow,
  disabled,
  imgUrl,
  onClose,
  onClick
}: Props) => {
  const handleInputClick = () => {
    if (imgUrl) return
    onClick?.()
  }
  const handleDeleteClick = () => {
    onClose?.()
  }

  return (
    <RankInputCardWrapper
      onClick={handleInputClick}
      shadow={shadow}
      disabled={disabled}
    >
      <ContentBox>
        {imgUrl ? <FullWidthImage src={imgUrl} /> : children}
      </ContentBox>
      {imgUrl && (
        <DeleteButtonBox onClick={handleDeleteClick}>
          <SvgIcon icon={<CloseIcon />} color='icon-weak' size={20} />
        </DeleteButtonBox>
      )}
    </RankInputCardWrapper>
  )
}

export default RankInputCard
