import { Button } from '@ow-develop/ow-design-system'
import React, { useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import { keyImgSet } from './data'
import useEnterGate from '../../../hooks/useEnterGate'
import useGateKeyQuery from '../../../hooks/useGateKeyQuery'
import GateEnterModal from '../index'
import {
  ContentField,
  HeadingUnit,
  ImageBox,
  MyBalanceUnit,
  TextField,
  ValueUnit
} from '../style'

import { dungeonState } from '~/atoms/dungeon'
import FullWidthImage from '~/common/image/full-width-image'
import useModal from '~/hooks/useModal'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'

const GateKeyEnter = () => {
  const { selectedRank } = useRecoilValue(dungeonState)
  const { transaction } = useTransactionHandler()
  const { t } = useI18next()
  const { openModal, closeModal } = useModal()
  const { enterGate } = useEnterGate()
  const { keyBalanceByRank } = useGateKeyQuery()
  const keyBalance = keyBalanceByRank(selectedRank)

  const handleClick = async () => {
    await transaction({
      onSuccess: () => enterGate(selectedRank),
      onSettled: closeModal
    })
  }

  useEffect(() => {
    if (!keyBalance) openModal(<GateEnterModal type='buy-enter' />)
  }, [keyBalance])

  return (
    <ContentField>
      <ImageBox>
        <FullWidthImage src={keyImgSet[selectedRank]} />
      </ImageBox>

      <TextField>
        <HeadingUnit>{t('Require Gate key')}</HeadingUnit>
        <ValueUnit>1</ValueUnit>
        <MyBalanceUnit>
          {t('Owned')}: {keyBalanceByRank(selectedRank)}
        </MyBalanceUnit>
      </TextField>

      <Button variant='primary' width='fill' onClick={handleClick}>
        {t('Use Gate Key')}
      </Button>
    </ContentField>
  )
}

export default GateKeyEnter
