import { Button } from '@ow-develop/ow-design-system'
import React from 'react'
import { useTranslation } from 'react-i18next'
import { InternalPath } from '~/constants/route'
import { useRouter } from 'next/router'

interface LoginButtonProps {
  text?: string
  onClick?: () => void
}

const LoginButton = ({ text, onClick }: LoginButtonProps) => {
  const { push } = useRouter()
  const { t } = useTranslation()

  const onClickButton = () => {
    push(InternalPath.SIGN_IN)
    onClick?.()
  }

  return (
    <Button
      variant='primary'
      width='fixed'
      size='sm'
      fixedWidth={105}
      onClick={onClickButton}
    >
      {t(text)}
    </Button>
  )
}

export default LoginButton
