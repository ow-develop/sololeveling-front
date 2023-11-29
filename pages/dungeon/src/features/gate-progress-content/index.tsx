import { Button, useDownCustom, useToast } from '@ow-develop/ow-design-system'
import { ErrorOutlineIcon } from '@ow-develop/ow-icons/react/material'
import { EssenceStoneIcon } from '@ow-develop/ow-icons/react/solo'
import React from 'react'
import Config from '~/config'
import {
  ActionTextBox,
  ContentBox,
  ContentField,
  ExpandInfoItemSubValueUnit,
  ExpandInfoItemValueUnit,
  GateExpandActionWrapper,
  GateProgressContentWrapper,
  SlideContentItemBox,
  SlideContentItemTitleUnit,
  SlideContentItemValueBox,
  TitleUnit
} from './style'
import GateClearModal from '../../../../dungeon/src/features/gate-clear-modal'
import useDungeonStore from '../../../../dungeon/src/hooks/useDungeonStore'
import useEssenceStoneQuery from '../../../../leveling/src/hooks/useEssenceStoneQuery'
import { gateInfoList } from '../gate-enter-content/data'
import {
  MultiValueBox,
  SlideContentField,
  SlideContentItemMultiValueBox
} from '../gate-enter-content/style'
import GateRewardModal from '../gate-reward-modal'

import SvgIcon from '~/common/svg-icon'
import { ERC1155CollectionType } from '~/constants/contracts'
import { HunterRank } from '~/constants/hunter'
import { ErrorMessage } from '~/constants/message'
import { Breakpoint } from '~/constants/style'
import useIsApprovedQuery from '~/hooks/queries/useIsApprovedQuery'
import useModal from '~/hooks/useModal'
import { useI18next } from '~/lib/i18n'
import { GateWithBlock } from '~/types/dungeon'
import { findKeyByValue } from '~/utils/formatEnum'

interface Props {
  gate: GateWithBlock
  remainBlock: number
  time?: {
    hour: string
    min: string
    sec: string
    expired: boolean
  }
}

const GateProgressContent = ({ gate, remainBlock, time }: Props) => {
  const { setGateId } = useDungeonStore()
  const { stoneBalance } = useEssenceStoneQuery()
  const { data: isApproved } = useIsApprovedQuery(
    ERC1155CollectionType.ESSENCE_STONE,
    Config.DungeonGate
  )
  const { t } = useI18next()
  const { openModal } = useModal()
  const { setToast } = useToast()
  const isSmallBreakPoint = useDownCustom(Breakpoint.S)

  const rankName = findKeyByValue(gate.gateRank, HunterRank)

  const gateInfo = gateInfoList.find((info) => info.rankName === rankName)

  const monsterAmount = gateInfo?.monsterAmount || 0
  const seasonPackAmount = gateInfo?.seasonPackAmount || 0

  const showGateRewardModal = () => {
    openModal(<GateRewardModal />)
  }

  const handleClick = () => {
    setGateId(gate.id)

    if (stoneBalance < gate.required) {
      return setToast(t(ErrorMessage.INSUFFICIENT_STONE), {
        autoClose: 2000,
        type: 'warning'
      })
    }

    if (isApproved) {
      openModal(<GateClearModal type='clear' />)
    } else {
      openModal(<GateClearModal type='approve' />)
    }
  }
  return (
    <GateProgressContentWrapper>
      <ContentField>
        <ContentBox>
          <TitleUnit>{t(`${rankName}-Rank Gate`)}</TitleUnit>

          <SlideContentField>
            <SlideContentItemBox>
              <SlideContentItemTitleUnit>
                {t('Gate reward')}
                <SvgIcon
                  icon={<ErrorOutlineIcon />}
                  size={13}
                  color='white-70'
                  onClick={showGateRewardModal}
                />
              </SlideContentItemTitleUnit>

              <SlideContentItemMultiValueBox>
                <MultiValueBox>
                  <ExpandInfoItemValueUnit>
                    {monsterAmount}
                  </ExpandInfoItemValueUnit>
                  <ExpandInfoItemSubValueUnit>
                    {t('Monster')}
                  </ExpandInfoItemSubValueUnit>
                </MultiValueBox>

                <MultiValueBox>
                  <ExpandInfoItemValueUnit>
                    {seasonPackAmount}
                  </ExpandInfoItemValueUnit>
                  <ExpandInfoItemSubValueUnit>
                    {t('Season Pack')}
                  </ExpandInfoItemSubValueUnit>
                </MultiValueBox>
              </SlideContentItemMultiValueBox>
            </SlideContentItemBox>

            <SlideContentItemBox>
              <SlideContentItemTitleUnit>
                {t('Gate clear time')}
              </SlideContentItemTitleUnit>
              <SlideContentItemValueBox>
                <ExpandInfoItemValueUnit>
                  {`${remainBlock.toLocaleString()} ${t('Block')}`}
                </ExpandInfoItemValueUnit>
                <ExpandInfoItemSubValueUnit>
                  {`≈ ${time.hour} : ${time.min} : ${time.sec}`}
                </ExpandInfoItemSubValueUnit>
              </SlideContentItemValueBox>
            </SlideContentItemBox>

            <SlideContentItemBox>
              <SlideContentItemTitleUnit>
                {t('Require Essence Stone')}
              </SlideContentItemTitleUnit>
              <SlideContentItemValueBox>
                <ExpandInfoItemValueUnit>
                  <SvgIcon icon={<EssenceStoneIcon />} size={20} />
                  {gate?.required.toLocaleString()}
                </ExpandInfoItemValueUnit>
                <ExpandInfoItemSubValueUnit>
                  {t('Owned amount')} : {stoneBalance}
                </ExpandInfoItemSubValueUnit>
              </SlideContentItemValueBox>
            </SlideContentItemBox>
          </SlideContentField>

          <GateExpandActionWrapper>
            <ActionTextBox color={'text-on-accent'}>
              {t('Items will be deleted after gate clear.')}
            </ActionTextBox>

            <Button
              width='fixed'
              size='sm'
              onClick={handleClick}
              fixedWidth={isSmallBreakPoint ? 196 : 250}
            >
              {t('Clear now')}
            </Button>
          </GateExpandActionWrapper>
        </ContentBox>
      </ContentField>
    </GateProgressContentWrapper>
  )
}

export default GateProgressContent
