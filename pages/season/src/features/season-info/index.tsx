import { useMemo } from 'react'

import useSeasonQuery from '../../hooks/useSeasonQuery'
import {
  SeasonInfoBoard,
  SeasonInfoBoardProps
} from '../../ui/season-info-board'

import Config from '~/config'
import { seasonSet } from '~/constants/season'
import useCurrentBlockNumber from '~/hooks/queries/useCurrentBlockNumber'
import useIsCurrentSeasonQuery from '~/hooks/queries/useIsCurrentSeasonQuery'
import { convertBlockToDays } from '~/lib/dayjs'

const SeasonInfo = () => {
  const { data: currentBlockNumber } = useCurrentBlockNumber()
  const { data: isCurrentSeason } = useIsCurrentSeasonQuery()
  const { data: season } = useSeasonQuery(Config.CURRENT_SEASON_ID)
  const { data: nextSeason } = useSeasonQuery(Config.CURRENT_SEASON_ID + 1)

  const boardProps = useMemo((): SeasonInfoBoardProps => {
    const currentSeasonDays = convertBlockToDays(
      season ? season?.endBlock - season?.startBlock : 0
    )

    const {
      name: currentSeasonName,
      banner: currentSeasonBanner,
      mobileBanner: currentSeasonMobileBanner
    } = seasonSet[Config.CURRENT_SEASON_ID]

    switch (true) {
      case isCurrentSeason: {
        const calculatedProgress =
          (currentBlockNumber - season?.startBlock) /
          (season?.endBlock - season?.startBlock)
        const progress = isNaN(calculatedProgress)
          ? 0
          : Math.ceil(calculatedProgress * 100)

        return {
          leftTitle: currentSeasonName,
          rightTitle: `${progress}%`,
          leftDescription: `${season?.startBlock.toLocaleString()} Block - ${season?.endBlock.toLocaleString()} Block`,
          rightDescription: `${(
            season?.endBlock - currentBlockNumber
          ).toLocaleString()} Block left`,
          leftText: currentSeasonName,
          leftSmall: `≈ ${currentSeasonDays} days`,
          rightText: 'Season-off',
          leftProgress: progress,
          banner: currentSeasonBanner,
          mobileBanner: currentSeasonMobileBanner
        }
      }

      case Boolean(nextSeason): {
        if (!nextSeason) return
        const calculatedProgress =
          (currentBlockNumber - nextSeason?.startBlock) /
          (nextSeason?.endBlock - nextSeason?.startBlock)
        const progress = Math.ceil(calculatedProgress * 100)

        return {
          leftTitle: 'Season-off',
          leftDescription: `Claim Season reward.`,
          rightDescription: `${(
            nextSeason.startBlock - currentBlockNumber
          ).toLocaleString()} Block left until ${
            seasonSet[Config.CURRENT_SEASON_ID + 1].name
          }`,
          leftText: currentSeasonName,
          leftSmall: `≈ ${currentSeasonDays} days`,
          rightText: 'Season-off',
          leftProgress: 100,
          rightProgress: progress,
          type: 'multiple',
          banner: 'sky'
        }
      }

      default:
        return {
          leftTitle: 'Season-off',
          leftDescription: `Claim Season reward.`,
          leftProgress: 100,
          leftText: currentSeasonName,
          leftSmall: `≈ ${currentSeasonDays} days`,
          rightText: 'Season-off',
          banner: 'sky',
          type: 'multiple'
        }
    }
  }, [season, nextSeason])

  return <SeasonInfoBoard {...boardProps} />
}

export default SeasonInfo
