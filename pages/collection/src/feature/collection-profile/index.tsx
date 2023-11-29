import {
  BgCollectionGlow,
  ClipBoard,
  NameUnit,
  ProfileImgBox,
  ProfileField,
  ProfileFrame,
  ProfileImg,
  ProfileInfoBox
} from './style'
import React from 'react'
import { Button } from '@ow-develop/ow-design-system'
import { RankProfileFrameSet } from '~/constants/collection'
import { isSupported } from 'clipboard'
import SvgIcon from '~/common/svg-icon'
import { ContentCopyIcon } from '@ow-develop/ow-icons/react/material'
import { splitAddress } from '~/utils/formatText'
import TempProfileImg from '~/assets/image/collection/temp_profile.webp'
import bgGlow from '~/assets/image/collection/bg_glow.webp'
import { useTranslation } from 'react-i18next'

const CollectionProfile = () => {
  const { t } = useTranslation()
  const RankProfileSet = RankProfileFrameSet['S']

  return (
    <ProfileField>
      <ProfileInfoBox>
        <NameUnit>Cherry_otherworld</NameUnit>

        <ClipBoard>
          {splitAddress('0xABE...b9e5')}
          {isSupported() && (
            <SvgIcon
              icon={<ContentCopyIcon />}
              color='icon-default'
              size={14}
            />
          )}
        </ClipBoard>

        <Button variant='tertiary' width={'fixed'} fixedWidth={160}>
          {t('Go to Inventory')}
        </Button>
      </ProfileInfoBox>

      <BgCollectionGlow src={bgGlow.src} alt='glow_bg' />

      <ProfileImgBox>
        <ProfileImg src={TempProfileImg.src} alt='profile_img' />
        <ProfileFrame src={RankProfileSet.src} alt='profile_frame' />
      </ProfileImgBox>
    </ProfileField>
  )
}

export default CollectionProfile
