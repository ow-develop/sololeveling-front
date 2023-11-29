import Skeleton from '~/common/skeleton'
import {
  ImageBox,
  InfoBox,
  InfoField,
  ProfileBox,
  ProfileField,
  ProfileUnit,
  ProfileWrapper
} from '../style'
import React from 'react'

const HunterProfileSkeleton = () => {
  return (
    <Skeleton>
      <ProfileWrapper>
        <ProfileField>
          <ProfileBox>
            <ImageBox>
              <Skeleton.Circle size={132} />
            </ImageBox>
            <ProfileUnit>
              <Skeleton.Rect
                width={190}
                height={32}
                style={{ marginBottom: 4 }}
                borderRadius={4}
              />
              <Skeleton.Rect
                width={190}
                height={24}
                style={{ marginBottom: 32 }}
                borderRadius={4}
              />
              {/*<Skeleton.Rect width={160} height={40} />*/}
            </ProfileUnit>
          </ProfileBox>
        </ProfileField>

        <InfoField>
          <InfoBox>
            <Skeleton.Rect borderRadius={4} height={24} />
          </InfoBox>
          <InfoBox>
            <Skeleton.Rect borderRadius={4} height={24} />
          </InfoBox>
          <InfoBox>
            <Skeleton.Rect borderRadius={4} height={24} />
          </InfoBox>
          <InfoBox>
            <Skeleton.Rect borderRadius={4} height={24} />
          </InfoBox>
        </InfoField>
      </ProfileWrapper>
    </Skeleton>
  )
}
export default HunterProfileSkeleton
