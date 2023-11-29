import { Button, Tooltip } from '@ow-develop/ow-design-system'
import { useTranslation } from 'react-i18next'

import {
  AddressUnit,
  ImageBox,
  Info,
  InfoBox,
  InfoField,
  InfoNameUnit,
  InfoUnit,
  NickNameUnit,
  ProfileBox,
  ProfileField,
  ProfileUnit,
  ProfileWrapper
} from './style'

import FullWidthImage from '~/common/image/full-width-image'
import SvgIcon from '~/common/svg-icon'

import { RankIconSet } from '~/constants/hunter'
import {
  ContentCopyIcon,
  InfoOutlineIcon
} from '@ow-develop/ow-icons/react/material'
import React from 'react'
import { useGetHunterInfoQuery } from '../../hooks/useGetHunterInfoQuery'
import { splitAddress } from '~/utils/formatText'
import { MESSAGE } from '~/constants/message'
import useToastAction from '~/hooks/useToastAction'
import { getProfileImg } from '~/lib/image'
import { useRouter } from 'next/router'
import { InternalPath } from '~/constants/route'
import { isSupported } from 'clipboard'

interface Props {
  address: string | string[]
}
const HunterProfile = ({ address }: Props) => {
  const { data: hunterInfo } = useGetHunterInfoQuery(address)
  const { copyToast } = useToastAction()
  const { t } = useTranslation()
  const router = useRouter()

  if (!hunterInfo) return
  const RankIcon = RankIconSet[hunterInfo.rank ?? 'E']

  const handleCopyClick = () => {
    copyToast(hunterInfo.address, MESSAGE.WALLET_ADDRESS_COPY)
  }

  return (
    <ProfileWrapper>
      <ProfileField>
        <ProfileBox>
          <ImageBox>
            <FullWidthImage src={getProfileImg(hunterInfo)} size={138} />
          </ImageBox>
          <ProfileUnit>
            <NickNameUnit>{hunterInfo.name}</NickNameUnit>
            <AddressUnit>
              {splitAddress(hunterInfo.address)}
              {isSupported() && (
                <SvgIcon
                  onClick={handleCopyClick}
                  icon={<ContentCopyIcon />}
                  color='icon-default'
                  size={16}
                />
              )}
            </AddressUnit>

            {/*<Button*/}
            {/*  size='sm'*/}
            {/*  variant='tertiary'*/}
            {/*  width={'fixed'}*/}
            {/*  fixedWidth={160}*/}
            {/*  onClick={() => router.push(InternalPath.COLLECTION + address)}*/}
            {/*>*/}
            {/*  {t('Go to Collecting')}*/}
            {/*</Button>*/}
          </ProfileUnit>
        </ProfileBox>
      </ProfileField>

      <InfoField>
        <InfoBox>
          <InfoNameUnit>{t('Hunter Rank')}</InfoNameUnit>
          <Info>
            <SvgIcon icon={<RankIcon />} size={20} />
          </Info>
        </InfoBox>
        <InfoBox>
          <InfoNameUnit>{t('Activity Score')}</InfoNameUnit>
          <Info>{hunterInfo.activityScore}</Info>
        </InfoBox>
        <InfoBox>
          <InfoNameUnit>{t('Collection Score')}</InfoNameUnit>
          <Info>{hunterInfo.collectionScore}</Info>
        </InfoBox>
        <InfoBox>
          <InfoUnit>
            <InfoNameUnit>{t('Season Score')}</InfoNameUnit>
            <InfoNameUnit>
              <Tooltip
                text={t(
                  'This is a score that is naturally accumulated by performing various hunter activities in <Solo Leveling: Unlimited>. The points can be received at once at the end of the season, and the user can directly participate in designing the next season with this score.'
                )}
              >
                <SvgIcon
                  icon={<InfoOutlineIcon />}
                  color='icon-weaker'
                  size={16}
                />
              </Tooltip>
            </InfoNameUnit>
          </InfoUnit>
          <Info>{hunterInfo.seasonScore}</Info>
        </InfoBox>
      </InfoField>
    </ProfileWrapper>
  )
}
export default HunterProfile
