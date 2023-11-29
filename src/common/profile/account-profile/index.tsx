import CommonAvatar from '~/common/avatar/common-avatar'
import FullWidthImage from '~/common/image/full-width-image'
import {
  AccountProfileWrapper,
  AddressUnit,
  HunterNameUnit,
  NameUnit,
  ProfileInfoBox
} from '~/common/profile/account-profile/style'
import SvgIcon from '~/common/svg-icon'
import { RankIconSet } from '~/constants/hunter'
import { InternalPath } from '~/constants/route'
import useUserQuery from '~/hooks/queries/useUserQuery'
import { getProfileImg } from '~/lib/image'
import { HunterRankType } from '~/types/common'
import { splitAddress } from '~/utils/formatText'
import Link from 'next/link'

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
  /**
   * 사용자의 헌터 랭크를 의미합니다.
   */
  rank?: HunterRankType
}

export const AccountProfile = ({
  imageUrl,
  imageSize = 40,
  name,
  address,
  rank
}: Props) => {
  const RankIcon = RankIconSet[rank]
  const { data: userInfo } = useUserQuery()

  return (
    <Link href={InternalPath.HUNTER + '/' + address}>
      <a>
        <AccountProfileWrapper>
          <CommonAvatar size={imageSize} dense>
            <FullWidthImage src={getProfileImg(userInfo)} />
          </CommonAvatar>

          <ProfileInfoBox>
            <NameUnit>
              {rank && <SvgIcon icon={<RankIcon />} size={18} />}
              {name ? <HunterNameUnit>{name}</HunterNameUnit> : 'Unnamed'}
            </NameUnit>

            <AddressUnit>{splitAddress(address)}</AddressUnit>
          </ProfileInfoBox>
        </AccountProfileWrapper>
      </a>
    </Link>
  )
}
