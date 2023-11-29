import { Button } from '@ow-develop/ow-design-system'

import useEssenceStoneQuery from '../../../../../leveling/src/hooks/useEssenceStoneQuery'
import useClearGate from '../../../hooks/useClearGate'
import useDungeonStore from '../../../hooks/useDungeonStore'
import {
  BalanceUnit,
  ContentField,
  ImageBox,
  NeedStoneUnit,
  TextField,
  TitleUnit
} from '../style'

import useGateQuery from 'pages/dungeon/src/hooks/useGateQuery'
import BackgroundImg from '~/assets/image/stone/essence_stone.webp'
import FullWidthImage from '~/common/image/full-width-image'
import { HunterRank } from '~/constants/hunter'
import useModal from '~/hooks/useModal'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'
import { findKeyByValue } from '~/utils/formatEnum'
import useErrorHandler from '~/hooks/useErrorHandler'

const GateClearNow = () => {
  const { selectedGateId } = useDungeonStore()
  const { stoneBalance } = useEssenceStoneQuery()
  const { getGateDetail, refetch } = useGateQuery()
  const { clearGate } = useClearGate()
  const { transaction } = useTransactionHandler()
  const { showErrorToast } = useErrorHandler()

  const { t } = useI18next()
  const { closeModal } = useModal()

  const gate = getGateDetail(selectedGateId)

  const refetchWhenClose = () => {
    closeModal()
    refetch()
  }

  const handleClick = async () => {
    const gateRank = findKeyByValue(gate.gateRank, HunterRank)

    await transaction({
      onSuccess: () =>
        clearGate({
          gateId: selectedGateId,
          callBack: refetchWhenClose,
          rank: gateRank
        })
    })
  }

  return (
    <ContentField>
      <ImageBox>
        <FullWidthImage src={BackgroundImg.src} />
      </ImageBox>

      <TextField>
        <TitleUnit>{t('Require Essence Stone')}</TitleUnit>
        <NeedStoneUnit>{gate?.required.toLocaleString()}</NeedStoneUnit>
        <BalanceUnit>
          {t(`Owned amount`)} : {stoneBalance}
        </BalanceUnit>
      </TextField>

      <Button variant='primary' width='fill' onClick={handleClick}>
        {t('Continue')}
      </Button>
    </ContentField>
  )
}

export default GateClearNow
