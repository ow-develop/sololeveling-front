import { Button } from '@ow-develop/ow-design-system'
import { ArrowBackIcon } from '@ow-develop/ow-icons/react/material'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'

import { cardImgSet, rankImgSet, rankTitleSet } from './data'
import useSystemStore from '../../../../src/hooks/useSystemStore'
import {
  RankUpInformationLayout,
  SystemActionBox,
  SystemCardBox,
  SystemIconUnit
} from '../../../../src/ui/style'
import useRankUp from '../../hooks/useRankup'
import useRankUpStore from '../../hooks/useRankUpStore'
import RankInformation from '../../ui/rank-information'
import RankUpInputCard from '../rank-input-card'

import SvgIcon from '~/common/svg-icon'
import { InternalPath } from '~/constants/route'
import useHunterRankQuery from '~/hooks/queries/useHunterRankQuery'
import useAuth from '~/hooks/useAuth'
import useModal from '~/hooks/useModal'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import useBreakpoint from '~/hooks/useBreakpoint'
import BottomSheetModal from '../../../../src/ui/bottom-sheet-modal'
import RankUpInventory from '../rank-inventory'
import useIsCurrentSeasonQuery from '~/hooks/queries/useIsCurrentSeasonQuery'

const RankUpInformation = () => {
  const { selectSystemItem, selectAllCount, setSelectSystemItem, onResetData } =
    useSystemStore()
  const { monsterSelect, setMonsterSelect, resetItemList } = useRankUpStore()
  const { isLoggedIn } = useAuth()
  const { handleRankUp } = useRankUp()
  const { rank } = useHunterRankQuery()
  const { data: isCurrentSeason } = useIsCurrentSeasonQuery()

  const { openModal } = useModal()
  const { transaction } = useTransactionHandler()
  const { belowMediumWidth } = useBreakpoint()
  const { push } = useRouter()
  const { t } = useTranslation()

  const isMaximumRank = rank === 'S'

  const cardImgUrls = selectSystemItem.length > 0 ? [cardImgSet[rank]] : []

  const handleRankUpClick = async () => {
    await transaction({
      onSuccess: async () => await handleRankUp(monsterSelect)
    })
  }

  const handleMobileAction = () =>
    openModal(
      <BottomSheetModal onClear={onResetData}>
        <RankUpInventory />
      </BottomSheetModal>
    )

  const handleRoutingClick = () => {
    push(InternalPath.SEASON)
  }

  useEffect(() => {
    if (!isCurrentSeason) {
      push(InternalPath.LEVELING)
    }
  }, [isLoggedIn])

  useEffect(() => {
    return () => {
      resetItemList()
    }
  }, [])

  useEffect(() => {
    setMonsterSelect(
      selectSystemItem.map((item) => ({
        monsterId: Number(item.idx),
        isShadow: false,
        ...item
      }))
    )
  }, [selectSystemItem])

  return (
    <RankUpInformationLayout finished={isMaximumRank}>
      {isMaximumRank ? (
        <RankInformation
          title={rankTitleSet[rank]}
          currentImgUrl={rankImgSet[rank]}
          disabled={false}
        />
      ) : (
        <SystemCardBox>
          <RankUpInputCard
            title={t(`${rank}-Rank Monster`)}
            imgUrls={cardImgUrls}
            count={selectAllCount}
            increase={1}
            action={belowMediumWidth && handleMobileAction}
          />
          <SystemIconUnit>
            <SvgIcon icon={<ArrowBackIcon />} color='icon-weak' size={20} />
          </SystemIconUnit>
          <RankInformation
            title={rankTitleSet[rank]}
            previewImgUrl={rankImgSet[rank]}
            disabled={selectSystemItem.length === 0}
          />
        </SystemCardBox>
      )}

      <SystemActionBox>
        {isMaximumRank ? (
          <Button
            variant='secondary'
            width='fill'
            size='sm'
            onClick={handleRoutingClick}
          >
            {t('Go to Leaderboard')}
          </Button>
        ) : (
          <>
            <Button
              variant='secondary'
              width='fill'
              size='sm'
              onClick={() => setSelectSystemItem([])}
              disabled={selectSystemItem.length === 0}
            >
              {t('Clear')}
            </Button>

            <Button
              width='fill'
              size='sm'
              disabled={selectAllCount !== 10}
              onClick={handleRankUpClick}
            >
              {t('Continue')}
            </Button>
          </>
        )}
      </SystemActionBox>
    </RankUpInformationLayout>
  )
}

export default RankUpInformation
