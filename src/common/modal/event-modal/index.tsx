import React, { useState } from 'react'
import useModal from '~/hooks/useModal'
import usePreventBodyScroll from '~/hooks/usePreventBodyScroll'
import ModalLayout from '~/common/modal/modal-layout'
import { ImgBox } from '../../../../pages/src/app/rank-claim/rank-claim-modal/style'
import FullWidthImage from '~/common/image/full-width-image'
import RankEImg from '~/assets/image/key/gate_key_e.webp'
import { Button } from '@ow-develop/ow-design-system'
import { useI18next } from '~/lib/i18n'
import { useRouter } from 'next/router'
import { ButtonBox, TextUnit } from '~/common/modal/event-modal/style'
import useGateKeyQuery from '../../../../pages/dungeon/src/hooks/useGateKeyQuery'
import { useKeyMinted } from '../../../../pages/shop/src/hooks/useKeyMinted'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { InternalPath } from '~/constants/route'
import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'
import useUserQuery from '~/hooks/queries/useUserQuery'
import { eventModalState } from '~/atoms/common'
import { useRecoilState } from 'recoil'

const EventModal = () => {
  const { closeModal } = useModal()
  const { push } = useRouter()
  const { t } = useI18next()
  usePreventBodyScroll()
  const { refetch: refetchUser } = useUserQuery()
  const { refetch: refetchGateKeyBalance } = useGateKeyQuery()
  const { refetch: refetchWalletBalance } = useMaticBalanceQuery()
  const { keyMinted } = useKeyMinted()
  const { transaction } = useTransactionHandler()
  const [isIsMinted, setIsMinted] = useState(false)
  const [isClosed, setIsClosed] = useRecoilState(eventModalState)

  const onClick = async () => {
    await transaction({
      onSuccess: async () => {
        await keyMinted()
        refetchGateKeyBalance()
        setIsMinted(true)
      },
      onSettled: () => {
        refetchWalletBalance()
        refetchUser()
      }
    })
  }

  const onClose = async () => {
    closeModal()
    setIsClosed(false)
  }

  return (
    <ModalLayout contentWidth='sm' isBottom={true}>
      <ModalLayout.Header title='Free item of the day' onClose={onClose} />

      <ImgBox>
        <FullWidthImage src={RankEImg.src} />
      </ImgBox>
      <TextUnit>
        {isIsMinted ? (
          <>{t('Want to go Dungeon to use an item?')}</>
        ) : (
          <>
            {t(
              'A Gate key to open E-Rank Dungeon. Want to get today’s free item?'
            )}
          </>
        )}
      </TextUnit>

      {isIsMinted ? (
        <Button
          width='fill'
          variant='primary'
          size='sm'
          onClick={() => push(InternalPath.DUNGEON)}
        >
          {t('Go to Dungeon')}
        </Button>
      ) : (
        <ButtonBox>
          <Button width='fill' variant='tertiary' size='sm' onClick={onClose}>
            {t('Get from Shop later')}
          </Button>
          <Button width='fill' variant='primary' size='sm' onClick={onClick}>
            {t('Claim')}
          </Button>
        </ButtonBox>
      )}
    </ModalLayout>
  )
}

export default EventModal
