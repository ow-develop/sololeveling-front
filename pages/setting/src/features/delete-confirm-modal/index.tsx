import { Button, Checkbox } from '@ow-develop/ow-design-system'
import { useTranslation } from 'react-i18next'

import {
  ButtonBox,
  ContentBox,
  ContentField,
  ContentTextUnit,
  DeleteAgreeUnit,
  DeleteButtonUnit,
  RowBox,
  TitleField
} from './style'

import DeleteImg from '~/assets/image/setting/delete.webp'

import ModalLayout from '~/common/modal/modal-layout'
import FullWidthImage from '~/common/image/full-width-image'
import { useEffect, useState } from 'react'
import ModalHeader from '~/common/modal/modal-layout/modal-header'

interface Props {
  title: string
  confirmBtnName: string
  cancelBtnName: string
  onConfirm: () => void
  onCancel: () => void
  onChangeAgreement: (isAgree: boolean) => void
}
const DeleteConfirmModal = ({
  title,
  onCancel,
  onConfirm,
  confirmBtnName,
  cancelBtnName,
  onChangeAgreement
}: Props) => {
  const { t } = useTranslation()
  const [isChecked, setIsChecked] = useState(false)

  useEffect(() => {
    onChangeAgreement(isChecked)
  }, [isChecked, onChangeAgreement])

  return (
    <ModalLayout contentWidth='md' fixedwidth={true}>
      <ModalHeader title={t(title)} />
      <ContentField>
        <FullWidthImage src={DeleteImg.src} size={150} />
        <ContentBox>
          <ContentTextUnit>
            {t(
              'If you cancel your account, you will no longer be able to use the service.'
            )}
          </ContentTextUnit>
          <ContentTextUnit>
            {t(
              'If you leave without exporting your wallet, your account will not be recoverable.'
            )}
          </ContentTextUnit>
          <ContentTextUnit>
            {t("You can't re-sign up with the same email.")}
          </ContentTextUnit>
          <ContentTextUnit>
            {t(
              "You can't earn seasonal rewards based on your activity history."
            )}
          </ContentTextUnit>
        </ContentBox>
      </ContentField>
      <RowBox>
        <Checkbox
          checked={isChecked}
          onChange={() => setIsChecked((prev) => !prev)}
        />
        <DeleteAgreeUnit>
          {t(
            'I have read all of the above and agree that my account will not be recoverable upon withdrawal.'
          )}
        </DeleteAgreeUnit>
      </RowBox>
      <ButtonBox>
        <DeleteButtonUnit
          variant='tertiary'
          width='fill'
          size='sm'
          onClick={onConfirm}
          disabled={!isChecked}
          disable={!isChecked}
        >
          {t(confirmBtnName)}
        </DeleteButtonUnit>
        <Button variant='secondary' width='fill' size='sm' onClick={onCancel}>
          {t(cancelBtnName)}
        </Button>
      </ButtonBox>
    </ModalLayout>
  )
}
export default DeleteConfirmModal
