import { Button } from '@ow-develop/ow-design-system'
import React from 'react'
import { useRecoilValue } from 'recoil'
import Config from '~/config'
import { keyImgSet } from '../gate-key-enter/data'
import GateEnterModal from '../index'
import { ContentField, ImageBox, TextField, TextUnit } from '../style'

import { dungeonState } from '~/atoms/dungeon'
import FullWidthImage from '~/common/image/full-width-image'
import { ERC1155CollectionType } from '~/constants/contracts'
import ERC1155Contract from '~/contracts/erc1155'
import useModal from '~/hooks/useModal'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const GateEnterApprove = () => {
  const { selectedRank } = useRecoilValue(dungeonState)
  const { openModal } = useModal()
  const { transaction } = useTransactionHandler()
  const { t } = useI18next()
  const { signer } = useWeb3AuthContext()

  const approveGateKey = async () => {
    const gateKeyContract = new ERC1155Contract(
      ERC1155CollectionType.GATE_KEY
    ).initialize(signer)
    await gateKeyContract.setApproveForAll(Config.DungeonGate)
  }

  const onClick = async () => {
    await transaction({
      onSuccess: async () => {
        await approveGateKey()

        openModal(<GateEnterModal type='enter' />)
      }
    })
  }

  return (
    <ContentField>
      <ImageBox>
        <FullWidthImage src={keyImgSet[selectedRank]} />
      </ImageBox>

      <TextField>
        <TextUnit>
          {t('Would you like to obtain permission to use the item?')}
        </TextUnit>
      </TextField>

      <Button variant='primary' width='fill' onClick={onClick}>
        {t('Continue')}
      </Button>
    </ContentField>
  )
}

export default GateEnterApprove
