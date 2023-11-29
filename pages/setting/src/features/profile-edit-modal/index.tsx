import { Button } from '@ow-develop/ow-design-system'
import React, { useState } from 'react'

import {
  ItemCardList,
  DefaultImgField,
  DefaultImgBox,
  DefaultImgText,
  ButtonBox,
  ProfileGuideUnit
} from './style'

import ItemCard from '~/common/item-card'
import ScrollableModal from '~/common/modal/scrollable-modal'
import { useGetHunterProfileTokenBalanceQuery } from '../../hooks/useGetHunterProfileTokenBalanceQuery'
import { useTranslation } from 'react-i18next'
import FullWidthImage from '~/common/image/full-width-image'
import { getProfileImg } from '~/lib/image'
import { useInView } from 'react-intersection-observer'
import ProfileEditModalSkeleton from './profile-edit-modal-skeleton'

interface Props {
  onClickSetProfile: (imgUrl: string) => void
}

const DEFAULT_IMG_INDEX = -1
const ProfileEditModal = ({ onClickSetProfile }: Props) => {
  const { monsterCollectionList, isLoading } =
    useGetHunterProfileTokenBalanceQuery()
  const { t } = useTranslation()
  const { ref: bottomRef, inView: bottomInview } = useInView()

  const [selectedProfileIndex, setSelectedProfileIndex] = useState(undefined)

  const handleCardClick = (index: number) => {
    setSelectedProfileIndex(index)
  }
  const selectedItem = monsterCollectionList[selectedProfileIndex]

  return (
    <ScrollableModal
      fixedWidth={false}
      title={t('Edit Profile')}
      bottomInView={bottomInview}
      action={
        <ButtonBox>
          <ProfileGuideUnit>
            {t(
              'Only items from the Monster, Shadow Army, and Shadow Monarch can be set as profile image.'
            )}
          </ProfileGuideUnit>
          <Button
            width='fill'
            size={'sm'}
            disabled={selectedProfileIndex === undefined}
            onClick={() => {
              if (selectedProfileIndex === DEFAULT_IMG_INDEX) {
                onClickSetProfile(null)
                return
              }
              onClickSetProfile(
                selectedItem.profileCf ||
                  selectedItem.profile ||
                  selectedItem.gifUrlCf ||
                  selectedItem.gifUrl ||
                  selectedItem.imgUrlCf ||
                  selectedItem.imgUrl
              )
            }}
          >
            {t('Set as a profile')}
          </Button>
        </ButtonBox>
      }
    >
      <ItemCardList>
        {isLoading ? (
          <ProfileEditModalSkeleton />
        ) : (
          <>
            <DefaultImgField
              selected={selectedProfileIndex === DEFAULT_IMG_INDEX}
              onClick={() => setSelectedProfileIndex(DEFAULT_IMG_INDEX)}
              disabled={false}
            >
              <DefaultImgBox hasNoProfile={!monsterCollectionList.length}>
                <DefaultImgText>{t('Default image')}</DefaultImgText>
                <FullWidthImage src={getProfileImg(null)} />
              </DefaultImgBox>
            </DefaultImgField>
            {monsterCollectionList?.map((item, index) => {
              return (
                <ItemCard
                  key={`${item.imgUrlCf ?? item.imgUrl}_${index}`}
                  thumbnailUrl={
                    item.profileCf ||
                    item.profile ||
                    item.gifUrlCf ||
                    item.gifUrl ||
                    item.imgUrlCf ||
                    item.imgUrl
                  }
                  title={t(item.title)}
                  subtitle={t(item.collectionType)}
                  onClick={() => {
                    handleCardClick(index)
                  }}
                  selected={selectedProfileIndex === index}
                />
              )
            })}
            <div ref={bottomRef}></div>
          </>
        )}
      </ItemCardList>
    </ScrollableModal>
  )
}

export default ProfileEditModal
