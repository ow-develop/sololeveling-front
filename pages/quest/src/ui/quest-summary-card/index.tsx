import { CheckCircleIcon } from '@ow-develop/ow-icons/react/material'
import React, { ReactNode } from 'react'

import {
  ContentField,
  InfoBox,
  QuestSummaryCardWrapper,
  RewardBox,
  TitleUnit
} from './style'
import SummaryReward from './summary-reward'

import AccentBadge from '~/common/accent-badge'
import SvgIcon from '~/common/svg-icon'
import { useI18next } from '~/lib/i18n'

export interface Props {
  questType: string
  title: string
  completed?: boolean
  reward?: ReactNode
}
const QuestSummaryCard = ({ questType, title, completed, reward }: Props) => {
  const { t } = useI18next()

  return (
    <QuestSummaryCardWrapper>
      <ContentField>
        <AccentBadge disabled={completed}>{questType}</AccentBadge>
        <InfoBox>
          <TitleUnit disabled={completed}>{t(title)}</TitleUnit>
          {completed && (
            <SvgIcon
              icon={<CheckCircleIcon />}
              size={20}
              color='status-success-default'
            />
          )}
        </InfoBox>
      </ContentField>
      <RewardBox>{reward}</RewardBox>
    </QuestSummaryCardWrapper>
  )
}

export default Object.assign(QuestSummaryCard, {
  Reward: SummaryReward
})
