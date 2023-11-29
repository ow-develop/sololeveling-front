import {
  PrivateKeyBox,
  PrivateKeyContentUnit,
  PrivateKeyContentWrapper
} from './style'

import { useI18next } from '~/lib/i18n'
import SubTitle from '../../ui/subtitle'
import { isSupported } from 'clipboard'
import SvgIcon from '~/common/svg-icon'
import { ContentCopyIcon } from '@ow-develop/ow-icons/react/material'
import React from 'react'

interface Props {
  onClick: () => void
  privateKey: string
}
const PrivateKeyContent = ({ onClick, privateKey }: Props) => {
  const { t } = useI18next()

  return (
    <PrivateKeyContentWrapper>
      <SubTitle title='Private Key' />
      <PrivateKeyContentUnit>
        {t(
          "Your private key is your responsibility. Losing it means losing control over your assets. We can't recover it for you. Store it securely and never share it with anyone. Proceed with caution."
        )}
      </PrivateKeyContentUnit>

      <PrivateKeyBox>
        <PrivateKeyContentUnit>{privateKey}</PrivateKeyContentUnit>
        {isSupported() && (
          <SvgIcon
            onClick={onClick}
            icon={<ContentCopyIcon />}
            color='icon-default'
            size={16}
          />
        )}
      </PrivateKeyBox>
    </PrivateKeyContentWrapper>
  )
}

export default PrivateKeyContent
