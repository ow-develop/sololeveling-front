import React from 'react'
import { useTranslation } from 'react-i18next'

import { RewardField } from './style'

import LegendarySceneImg from '~/assets/image/season/reward_legendary_scene.webp'
import SeasonScoreImg from '~/assets/image/season/reward_season_score.webp'
import FullWidthImage from '~/common/image/full-width-image'
import { CommonLink } from '~/common/link/common-link'
import ModalLayout from '~/common/modal/modal-layout'
import {
  ContentTitleUnit,
  ContentTypeUnit,
  ListContentBox,
  ListImageBox,
  ListInfoField
} from '~/common/modal/receipt-modal/receipt-list-item/style'
import { TransactionReceipt } from '~/common/transaction-receipt'
import { InternalPath } from '~/constants/route'
import useModal from '~/hooks/useModal'

interface Props {
  txHash?: string
  rewardScore?: number
  rewardLegendaryId?: number
  onClose?: () => void
}

const SeasonRewardModal = ({
  txHash,
  rewardScore,
  rewardLegendaryId = 0,
  onClose
}: Props) => {
  const { t } = useTranslation()
  const { closeModal } = useModal()

  const handleClose = () => {
    onClose()
    closeModal()
  }

  return (
    <ModalLayout contentWidth='sm'>
      <ModalLayout.Header
        title='Claim'
        description='Season Reward has been successfully claimed.'
        onClose={handleClose}
      />

      <RewardField>
        {rewardLegendaryId !== 0 && (
          <ListInfoField>
            <ListImageBox>
              <FullWidthImage src={LegendarySceneImg.src} />
            </ListImageBox>
            <ListContentBox>
              <ContentTypeUnit>{t('Legendary Scene')}</ContentTypeUnit>
              <ContentTitleUnit>#{rewardLegendaryId}</ContentTitleUnit>
            </ListContentBox>
          </ListInfoField>
        )}

        <ListInfoField>
          <ListImageBox>
            <FullWidthImage src={SeasonScoreImg.src} />
          </ListImageBox>
          <ListContentBox>
            <ContentTypeUnit>{t('Season Score')}</ContentTypeUnit>
            <ContentTitleUnit>{`${rewardScore.toLocaleString()}`}</ContentTitleUnit>
          </ListContentBox>
        </ListInfoField>
      </RewardField>

      <TransactionReceipt txHash={txHash} status='complete' />

      <CommonLink href={InternalPath.HUNTER} text='Go to Inventory' />
    </ModalLayout>
  )
}

export default SeasonRewardModal
