import { RankSIcon } from '@ow-develop/ow-icons/react/solo'
import React from 'react'

import { AccountProfileWrapper, NameUnit, ProfileInfoBox } from './style'

import CommonAvatar from '~/common/avatar/common-avatar'
import FullWidthImage from '~/common/image/full-width-image'
import SvgIcon from '~/common/svg-icon'
import { InternalPath } from '~/constants/route'
import { splitAddress } from '~/utils/formatText'
import { TextButton } from '@ow-develop/ow-design-system'

export interface Props {
  /**
   * 사용자의 프로필 사진을 의미합니다.
   */
  imageUrl?: string
  /**
   * 사용자의 프로필 사진 UI의 사이즈를 결정합니다.
   */
  imageSize?: number
  /**
   * 사용자의 닉네임을 의미합니다.
   */
  name?: string
  /**
   * 지갑 주소를 의미하며 맨 앞 다섯자리와 뒤 네 자리로 축약되어 표시됩니다.
   * 값이 없거나 자릿수가 맞지 않을 때 "Null Address"로 표시됩니다.
   *
   */
  address?: string
}

const RankerProfile = ({ imageUrl, imageSize = 40, name, address }: Props) => {
  return (
    <AccountProfileWrapper href={`${InternalPath.HUNTER}/${address}`}>
      <CommonAvatar size={imageSize} dense>
        <FullWidthImage src={imageUrl} />
      </CommonAvatar>
      <ProfileInfoBox>
        <NameUnit>
          <SvgIcon icon={<RankSIcon />} size={18} />
          {name ?? 'Unnamed'}
        </NameUnit>
        <TextButton>{splitAddress(address)}</TextButton>
      </ProfileInfoBox>
    </AccountProfileWrapper>
  )
}

export default RankerProfile
