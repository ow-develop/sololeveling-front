import { SeasonLeaderboardEmptyWrapper } from './style'

import RankImg from '~/assets/image/rank/rank_s.webp'
import FullWidthImage from '~/common/image/full-width-image'
import { useI18next } from '~/lib/i18n'

const SeasonLeaderboardEmpty = () => {
  const { t } = useI18next()

  return (
    <SeasonLeaderboardEmptyWrapper>
      <FullWidthImage src={RankImg.src} size={180} />

      {t('Be the first S-Rank Hunter.')}
    </SeasonLeaderboardEmptyWrapper>
  )
}

export default SeasonLeaderboardEmpty
