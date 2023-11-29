import { Button } from '@ow-develop/ow-design-system'
import { useEffect, useState } from 'react'

import useRankStore from '../../hooks/useRankStore'
import useRankUp from '../../hooks/useRankup'
import useRankUpStore from '../../hooks/useRankUpStore'

import BlockStepper from '~/common/block-stepper'
import ModalLayout from '~/common/modal/modal-layout'
import { ERC1155CollectionType } from '~/constants/contracts'
import Config from '~/config'
import ERC1155Contract from '~/contracts/erc1155'
import useIsApprovedQuery from '~/hooks/queries/useIsApprovedQuery'
import { getContractExceptionText } from '~/lib/ethers-error-handler'
import { useI18next } from '~/lib/i18n'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

const RankApproveModal = () => {
  const { hasShadowItem } = useRankStore()
  const { monsterSelect, setMonsterSelect, resetItemList } = useRankUpStore()
  const { data: isApproved, refetch } = useIsApprovedQuery(
    hasShadowItem
      ? ERC1155CollectionType.SHADOW_ARMY
      : ERC1155CollectionType.MONSTER,
    Config.Season
  )
  const { t } = useI18next()
  const [step, setStep] = useState(1)
  const [isLoading, setLoading] = useState(false)
  const { handleRankUp } = useRankUp()
  const { signer } = useWeb3AuthContext()

  const approveCollection = async () => {
    try {
      setLoading(true)
      const seasonContract = await new ERC1155Contract(
        hasShadowItem
          ? ERC1155CollectionType.SHADOW_ARMY
          : ERC1155CollectionType.MONSTER
      ).initialize(signer)

      await seasonContract.setApproveForAll(Config.Season)

      setStep((prev) => prev + 1)
    } catch (err) {
      console.error(getContractExceptionText(err))
    } finally {
      setLoading(false)
    }
  }

  const confirmHandler = async () => {
    try {
      setLoading(true)
      await handleRankUp(monsterSelect)
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
        title='Rank Up'
        description='To complete Rank Up, follow these steps.'
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

export default RankApproveModal
