import { Button } from '@ow-develop/ow-design-system'

import GateClearModal from '../index'
import { ContentField, ImageBox, TextField, TextUnit } from '../style'

import BackgroundImg from '~/assets/image/stone/essence_stone.webp'
import FullWidthImage from '~/common/image/full-width-image'
import { ERC1155CollectionType } from '~/constants/contracts'
import ERC1155Contract from '~/contracts/erc1155'
import useModal from '~/hooks/useModal'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import Config from '~/config'

const GateClearApprove = () => {
  const { t } = useI18next()
  const { openModal } = useModal()
  const { transaction } = useTransactionHandler()
  const { signer } = useWeb3AuthContext()

  const approveGateKey = async () => {
    const gateKeyContract = await new ERC1155Contract(
      ERC1155CollectionType.ESSENCE_STONE
    ).initialize(signer)

    await gateKeyContract.setApproveForAll(Config.DungeonGate)

    openModal(<GateClearModal type='clear' />)
  }

  const onClick = async () => {
    await transaction({
      onSuccess: approveGateKey
    })
  }

  return (
    <ContentField>
      <ImageBox>
        <FullWidthImage src={BackgroundImg.src} />
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

export default GateClearApprove
