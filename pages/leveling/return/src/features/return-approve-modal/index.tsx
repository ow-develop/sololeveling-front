import { Button } from '@ow-develop/ow-design-system'
import { useEffect, useState } from 'react'

import useSystemStore from 'pages/leveling/src/hooks/useSystemStore'
import BlockStepper from '~/common/block-stepper'
import ModalLayout from '~/common/modal/modal-layout'
import { ERC1155CollectionType } from '~/constants/contracts'
import Config from '~/config'
import ERC1155Contract from '~/contracts/erc1155'
import useIsApprovedQuery from '~/hooks/queries/useIsApprovedQuery'
import { getContractExceptionText } from '~/lib/ethers-error-handler'
import { useI18next } from '~/lib/i18n'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

interface Props {
  title: string
  onClickConfirm: () => Promise<void>
}

const ReturnApproveModal = ({ title, onClickConfirm }: Props) => {
  const { selectRank } = useSystemStore()
  const { data: isApproved, refetch } = useIsApprovedQuery(
    selectRank.includes('Shadow')
      ? ERC1155CollectionType.SHADOW_ARMY
      : ERC1155CollectionType.MONSTER,
    Config.System
  )
  const { t } = useI18next()
  const [step, setStep] = useState(1)
  const [isLoading, setLoading] = useState(false)
  const { signer } = useWeb3AuthContext()

  const approveCollection = async () => {
    try {
      let monsterContract: ERC1155Contract

      if (selectRank.includes('Shadow')) {
        monsterContract = await new ERC1155Contract(
          ERC1155CollectionType.SHADOW_ARMY
        ).initialize(signer)
      } else {
        monsterContract = await new ERC1155Contract(
          ERC1155CollectionType.MONSTER
        ).initialize(signer)
      }

      setLoading(true)
      await monsterContract.setApproveForAll(Config.System)
      setLoading(false)
      setStep((prev) => prev + 1)
    } catch (err) {
      console.error(getContractExceptionText(err))
    }
  }

  const confirmHandler = async () => {
    try {
      setLoading(true)
      await onClickConfirm()
    } finally {
      setLoading(false)
    }
  }

  const list = [
    {
      header: 'Approve collection',
      description:
        'Each of the collections from your wallet needs to be approved only once.',
      isButton: true,
      loading: isLoading,
      buttonText: 'Continue',
      onClick: async () => await approveCollection()
    },
    {
      header: 'Confirm',
      description: 'You’ll be asked to review and confirm from your wallet.',
      isButton: true,
      loading: isLoading,
      buttonText: 'Continue',
      onClick: confirmHandler
    }
  ]

  useEffect(() => {
    setStep(isApproved ? 2 : 1)
  }, [isApproved])

  return (
    <ModalLayout contentWidth='md' onClose={refetch} persistent={isLoading}>
      <ModalLayout.Header
        title={title}
        onPrev={() => {}}
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

export default ReturnApproveModal
