import { Button } from '@ow-develop/ow-design-system'
import { useEffect, useState } from 'react'

import BlockStepper from '~/common/block-stepper'
import ModalLayout from '~/common/modal/modal-layout'
import { ERC1155CollectionType } from '~/constants/contracts'
import Config from '~/config'
import ERC1155Contract from '~/contracts/erc1155'
import useIsApprovedQuery from '~/hooks/queries/useIsApprovedQuery'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useI18next } from '~/lib/i18n'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

interface Props {
  title: string
  onClickConfirm: () => Promise<void>
}

const LevelingApproveModal = ({ title, onClickConfirm }: Props) => {
  const { data: isApproved, refetch } = useIsApprovedQuery(
    ERC1155CollectionType.ESSENCE_STONE,
    Config.System
  )
  const { t } = useI18next()
  const [step, setStep] = useState(1)
  const { loading, transaction } = useTransactionHandler()
  const { signer } = useWeb3AuthContext()

  const approveCollection = async () => {
    const essenceStoneContract = await new ERC1155Contract(
      ERC1155CollectionType.ESSENCE_STONE
    ).initialize(signer)

    await essenceStoneContract.setApproveForAll(Config.System)
    setStep((prev) => prev + 1)
  }

  const handleApproveCollection = async () => {
    await transaction({
      onSuccess: approveCollection
    })
  }

  const confirmHandler = async () => {
    await transaction({
      onSuccess: onClickConfirm
    })
  }

  const list = [
    {
      header: 'Approve collection',
      description:
        'Each of the collections from your wallet needs to be approved only once.',
      isButton: true,
      loading,
      buttonText: 'Continue',
      onClick: handleApproveCollection
    },
    {
      header: 'Confirm',
      description: 'You’ll be asked to review and confirm from your wallet.',
      isButton: true,
      loading,
      buttonText: 'Continue',
      onClick: confirmHandler
    }
  ]

  useEffect(() => {
    setStep(isApproved ? 2 : 1)
  }, [isApproved])

  return (
    <ModalLayout contentWidth='md' onClose={refetch}>
      <ModalLayout.Header
        title={title}
        onPrev={() => {}}
        onClose={refetch}
        description={`To complete ${title}, follow these steps.`}
      />
      <BlockStepper activeStep={step}>
        {list.map(
          (
            { header, description, isButton, loading, buttonText, onClick },
            i
          ) => {
            return (
              <BlockStepper.Item
                key={i + 1}
                step={i + 1}
                header={t(header)}
                description={t(description)}
              >
                {isButton && (
                  <Button onClick={onClick} loading={loading}>
                    {t(buttonText)}
                  </Button>
                )}
              </BlockStepper.Item>
            )
          }
        )}
      </BlockStepper>
    </ModalLayout>
  )
}

export default LevelingApproveModal
