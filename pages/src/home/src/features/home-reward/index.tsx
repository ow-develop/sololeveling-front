import { useTranslation } from 'react-i18next'
import {
  DescriptionBox,
  DescriptionUnit,
  TitleUnit,
  HomeRewardWrapper,
  TitleBox,
  VideoBox
} from './style'
import React from 'react'
const rewardVideo = '/home_season_reward.mp4'
const HomeReward = () => {
  const { t } = useTranslation()

  return (
    <HomeRewardWrapper>
      <TitleBox>
        <TitleUnit>{t('Season Reward')}</TitleUnit>
        <DescriptionBox>
          <DescriptionUnit>
            {t('Generative Artwork by Jang Sung Rak')}
          </DescriptionUnit>
        </DescriptionBox>
      </TitleBox>

      <VideoBox autoPlay playsInline muted loop>
        <source src={rewardVideo} />
      </VideoBox>
    </HomeRewardWrapper>
  )
}

export default HomeReward
