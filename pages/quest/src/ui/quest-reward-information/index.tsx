import {
  InformationBox,
  QuestRewardInformationWrapper,
  SubtitleUnit,
  ThumbnailBox,
  TitleUnit
} from './style'

import DungeonKeyImage from '~/assets/image/quest/dungeon_key.png'
import QuestScoreImage from '~/assets/image/quest/quest_score.png'
import FullWidthImage from '~/common/image/full-width-image'
import { useI18next } from '~/lib/i18n'
import { QuestRewardType } from '~/types/quest'

export interface Props {
  rewardType: QuestRewardType
  title: string
  subtitle: string
}

const QuestRewardInformation = ({
  rewardType = 'quest_score',
  title,
  subtitle
}: Props) => {
  const { t } = useI18next()

  const rewardSet: Record<Props['rewardType'], string> = {
    quest_score: QuestScoreImage.src,
    gate_key: DungeonKeyImage.src
  }

  return (
    <QuestRewardInformationWrapper>
      <ThumbnailBox>
        <FullWidthImage src={rewardSet[rewardType]} />
      </ThumbnailBox>
      <InformationBox>
        <TitleUnit>{t(title)}</TitleUnit>
        <SubtitleUnit>{t(subtitle)}</SubtitleUnit>
      </InformationBox>
    </QuestRewardInformationWrapper>
  )
}

export default QuestRewardInformation
