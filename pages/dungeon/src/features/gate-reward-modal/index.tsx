import {
  ArrowKeyLeftIcon,
  ArrowKeyRightIcon
} from '@ow-develop/ow-icons/react/solo'
import React, { useState } from 'react'
import { Navigation } from 'swiper'
import { SwiperSlide } from 'swiper/react'

import {
  AmountUnit,
  ArrowButtonBox,
  ArrowButtonUnit,
  ContentField,
  GateRewardModalWrapper,
  GateRewardSwiper,
  GateRewardSwiperField,
  RankTotalUnit,
  RankValueUnit,
  RewardBox,
  RewardHeadingField,
  RewardHeadingWrapper,
  RewardItemBox,
  SlideImgBox
} from './style'
import FullWidthImage from '~/common/image/full-width-image'
import ModalLayout from '~/common/modal/modal-layout'
import SvgIcon from '~/common/svg-icon'
import { gateRewardImgSet, gateRewardList } from '~/constants/dungeon'
import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'
import useSwiper from '~/hooks/useSwiper'
import { useI18next } from '~/lib/i18n'
import { ViewMore } from '~/common/view-more'

const RewardHeading = ({ name }: { name: string }) => {
  const { t } = useI18next()
  return (
    <RewardHeadingWrapper>
      <div>{t(name)}</div>
    </RewardHeadingWrapper>
  )
}

const GateRewardModal = () => {
  const { t } = useI18next()
  const { rank } = useHunterRankQuery()
  const [extend, setExtend] = useState(false)

  const { defaultOptions, onPrev, onNext, currentIndex } = useSwiper(
    gateRewardList.findIndex((item) => item.rank === (rank ?? 'E'))
  )

  return (
    <ModalLayout contentWidth='sm'>
      <ModalLayout.Header title='Gate Reward' />
      <GateRewardModalWrapper>
        <ContentField>
          <GateRewardSwiperField>
            <GateRewardSwiper
              {...defaultOptions}
              modules={[Navigation]}
              allowTouchMove
            >
              <ArrowButtonBox>
                <ArrowButtonUnit variant='text' onClick={onPrev}>
                  <SvgIcon
                    size={24}
                    icon={<ArrowKeyLeftIcon />}
                    color='icon-default'
                  />
                </ArrowButtonUnit>

                <ArrowButtonUnit variant='text' onClick={onNext}>
                  <SvgIcon
                    size={24}
                    icon={<ArrowKeyRightIcon />}
                    color='icon-default'
                  />
                </ArrowButtonUnit>
              </ArrowButtonBox>
              {gateRewardList.map((rank) => {
                return (
                  <SwiperSlide key={rank.rank}>
                    <RankValueUnit>{t(`${rank.rank}-Rank Gate`)}</RankValueUnit>
                    <SlideImgBox>
                      <FullWidthImage
                        src={gateRewardImgSet[rank.rank]}
                        alt='Gate Reward'
                      />
                    </SlideImgBox>
                    <RankTotalUnit>
                      {rank.totalAmount} {t('Qty.')}
                    </RankTotalUnit>
                  </SwiperSlide>
                )
              })}
            </GateRewardSwiper>
          </GateRewardSwiperField>
        </ContentField>

        <ViewMore
          text='View more'
          extend={extend}
          onClick={() => setExtend((prev) => !prev)}
        >
          <ContentField>
            <RewardBox>
              {Object.entries(gateRewardList[currentIndex].monster).map(
                ([rank, value]) => {
                  const amount = value.amount === 0 ? '-' : value.amount
                  const disabled = value.amount === 0
                  return (
                    <RewardItemBox key={rank} disabled={disabled}>
                      <RewardHeadingField>
                        <RewardHeading name={`${rank}-Rank Monster`} />
                      </RewardHeadingField>
                      <AmountUnit>{amount}</AmountUnit>
                    </RewardItemBox>
                  )
                }
              )}
              <RewardItemBox>
                <RewardHeadingField>
                  <RewardHeading name='Season Pack' />
                </RewardHeadingField>
                <AmountUnit>
                  {gateRewardList[currentIndex].seasonPackAmount.amount}
                </AmountUnit>
              </RewardItemBox>
            </RewardBox>
          </ContentField>
        </ViewMore>
      </GateRewardModalWrapper>
    </ModalLayout>
  )
}

export default GateRewardModal
