import React from 'react'

import { SummaryRewardWrapper } from './style'

import FullWidthImage from '~/common/image/full-width-image'
import { QuestRewardType } from '~/types/quest'

export interface Props {
  rewardType: QuestRewardType
}

const SummaryReward = ({ rewardType }: Props) => {
  const rewardSet: Record<Props['rewardType'], string> = {
    quest_score: 'QuestScoreImage.src',
    gate_key: 'DungeonKeyImage.src'
  }

  return (
    <SummaryRewardWrapper>
      <FullWidthImage src={rewardSet[rewardType]} />
    </SummaryRewardWrapper>
  )
}

export default SummaryReward
