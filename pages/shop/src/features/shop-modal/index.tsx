import { Button } from '@ow-develop/ow-design-system'
import React, { useState } from 'react'

import { ContentField, TextField, TextUnit } from './style'

import ModalLayout from '~/common/modal/modal-layout'
import useModal from '~/hooks/useModal'
import { useI18next } from '~/lib/i18n'

const ShopModal = () => {
  const [isLoading, setIsLoading] = useState(false)
  const { t } = useI18next()
  const { closeModal } = useModal()

  return (
    <ModalLayout contentWidth='sm'>
      <ModalLayout.Header title='Buy Key' />
      <ContentField>
        <TextField>
          <TextUnit>{t('구매가 완료되었습니다.')}</TextUnit>
        </TextField>

        <Button
          variant='primary'
          width='fill'
          onClick={closeModal}
          loading={isLoading}
        >
          {t('Confirm')}
        </Button>
      </ContentField>
    </ModalLayout>
  )
}

export default ShopModal
