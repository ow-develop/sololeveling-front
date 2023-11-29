import React, { useMemo } from 'react'
import { useInView } from 'react-intersection-observer'
import { SwiperSlide } from 'swiper/react'

import { InViewUnit, SeasonRewardWrapper, SwiperField } from './style'
import useIsSeasonRewardClaimedQuery from '../../hooks/useIsSeasonRewardClaimedQuery'
import useSeasonMyRankingQuery from '../../hooks/useSeasonMyRankingQuery'
import {
  SeasonRewardCard,
  SeasonRewardCardProps
} from '../../ui/season-reward-card'
import SeasonRewardModal from '../../ui/season-reward-modal'

import LegendarySceneImg from '~/assets/image/season/reward_legendary_scene.webp'
import SeasonScoreImg from '~/assets/image/season/reward_season_score.webp'
import ShadowMonarchImg from '~/assets/image/season/reward_shadow_monarch.webp'
import Top100Img from '~/assets/image/season/reward_top_100.webp'
import ScrollGradient from '~/common/scroll-gradient'
import SeasonSettlementContract from '~/contracts/season-settlement'
import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'
import useIsCurrentSeasonQuery from '~/hooks/queries/useIsCurrentSeasonQuery'
import useModal from '~/hooks/useModal'
import useSwiper from '~/hooks/useSwiper'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import useAuth from '~/hooks/useAuth'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const SeasonReward = () => {
  const { swiper } = useSwiper()
  const { openModal } = useModal()
  const { data: isCurrentSeason } = useIsCurrentSeasonQuery()
  const { rank } = useHunterRankQuery()
  const { data: seasonMyRanking, isTop100 } = useSeasonMyRankingQuery()
  const { data: isSeasonRewardClaimed, refetch: refetchSeasonRewardClaimed } =
    useIsSeasonRewardClaimedQuery()
  const { inView, ref: inViewRef } = useInView()
  const { transaction } = useTransactionHandler()
  const { signer } = useWeb3AuthContext()
  const { address } = useAuth()
  const isSRank = rank === 'S'
  const isSeasonEnd = !isCurrentSeason

  const getTextTypeMessage = (bool: boolean) => {
    return bool ? 'Will be airdropped' : 'Incomplete'
  }

  const claimReward = async () => {
    const contract = await new SeasonSettlementContract().initialize(signer)
    const {
      txHash,
      seasonRewardClaimed: { mintedSeasonScore, SRankRewardTokenId }
    } = await contract.claimSeasonReward()

    openModal(
      <SeasonRewardModal
        rewardScore={mintedSeasonScore}
        rewardLegendaryId={SRankRewardTokenId}
        txHash={txHash}
        onClose={refetchSeasonRewardClaimed}
      />
    )
  }

  const handleClickClaimButton = async () => {
    await transaction({
      onSuccess: claimReward
    })
  }

  const list: SeasonRewardCardProps[] = useMemo(() => {
    const isClaimShadow = isSRank && isTop100 && isSeasonEnd
    const isClaimTop100 = isTop100 && isSeasonEnd
    const isClaimLegendaryScene = isSRank && isSeasonEnd
    const isClaimSeasonScore =
      seasonMyRanking?.myRanking.totalConvertedScore > 0 && isSeasonEnd

    return [
      {
        title: 'Shadow Monarch',
        description: `This is a collection in which the creator, Seongrak Jang, the original artist <Solo Leveling>, participated in the work himself. 6 will be given to TOP 1, 5 for TOP 2, 4 for TOP 4 to 20, 2 for TOP 21 to 50, 1 for TOP 51 to 100 during season interval by airdrop.`,
        text: getTextTypeMessage(isClaimShadow),
        qualified: isClaimShadow,
        imgUrl: ShadowMonarchImg.src
      },
      {
        title: 'TOP 100',
        description: `This is a collection you can get if you achieve excellent grades within 100th place in one season of <Solo Leveling: Unlimited>. This collection will be issued with an additional 100 items per season.`,
        text: getTextTypeMessage(isClaimTop100),
        qualified: isClaimTop100,
        imgUrl: Top100Img.src
      },
      {
        title: 'Legendary Scene',
        description: `This collection is given to players who have completed a season of <Solo Leveling: Unlimited> with an S rank or higher.`,
        text: getTextTypeMessage(isClaimLegendaryScene),
        qualified: isClaimLegendaryScene,
        imgUrl: LegendarySceneImg.src,
        type: 'button',
        onClick: handleClickClaimButton,
        completed: isSeasonRewardClaimed
      },
      {
        title: 'Season score',
        description: `This is a score that is naturally accumulated by performing various hunter activities in <Solo Leveling: Unlimited>. The points can be received at once at the end of the season.`,
        text: getTextTypeMessage(isClaimSeasonScore),
        qualified: isClaimSeasonScore,
        type: 'button',
        completed: isSeasonRewardClaimed,
        imgUrl: SeasonScoreImg.src,

        onClick: handleClickClaimButton
      }
    ]
  }, [isSRank, isTop100, seasonMyRanking, isSeasonEnd, isSeasonRewardClaimed])

  return (
    <ScrollGradient right={inView}>
      <SeasonRewardWrapper>
        <SwiperField ref={swiper} spaceBetween={16} slidesPerView={'auto'}>
          {list.map((props, index, arr) => {
            return (
              <SwiperSlide key={index}>
                <InViewUnit
                  ref={index === arr.length - 1 ? inViewRef : undefined}
                />
                <SeasonRewardCard {...props} />
              </SwiperSlide>
            )
          })}
        </SwiperField>
      </SeasonRewardWrapper>
    </ScrollGradient>
  )
}

export default SeasonReward
