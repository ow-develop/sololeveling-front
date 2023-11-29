import Skeleton from '~/common/skeleton'
import { DescriptionBox } from '../style'
import React from 'react'
import { TitleWrapper } from '../../../ui/title/style'
import { SettingContentLayoutWrapper } from '../../../ui/setting-content-layout/style'
import { SettingContentLayout } from '../../../ui/style'

const AccountSettingSkeleton = () => {
  return (
    <Skeleton>
      <SettingContentLayout>
        <SettingContentLayoutWrapper>
          <TitleWrapper>
            <Skeleton.Rect width={80} borderRadius={4} />
          </TitleWrapper>
          <DescriptionBox>
            <Skeleton.Rect width={350} borderRadius={4} />
          </DescriptionBox>
        </SettingContentLayoutWrapper>
        <SettingContentLayoutWrapper>
          <TitleWrapper>
            <Skeleton.Rect width={150} borderRadius={4} />
          </TitleWrapper>
          <DescriptionBox>
            <Skeleton.Rect width={350} borderRadius={4} />
          </DescriptionBox>
          <DescriptionBox>
            <Skeleton.Rect width={90} borderRadius={4} />
          </DescriptionBox>
        </SettingContentLayoutWrapper>
        <Skeleton.Rect width={100} borderRadius={4} />
      </SettingContentLayout>
    </Skeleton>
  )
}
export default AccountSettingSkeleton
