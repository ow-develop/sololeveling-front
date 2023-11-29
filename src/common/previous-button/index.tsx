import { ArrowBackIcon } from '@ow-develop/ow-icons/react/material'
import React, { ReactNode } from 'react'

import SvgIcon from '~/common/svg-icon'
import { useI18next } from '~/lib/i18n'
import { TextButton } from '@ow-develop/ow-design-system'

export interface Props {
  children?: ReactNode
}

const PreviousButton = () => {
  const { t } = useI18next()

  return (
    <TextButton>
      <SvgIcon icon={<ArrowBackIcon />} size={20} color='icon-weak' />
      {t('Back to list')}
    </TextButton>
  )
}

export default PreviousButton
