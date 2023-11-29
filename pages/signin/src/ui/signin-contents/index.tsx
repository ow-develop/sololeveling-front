import React from 'react'
import { useI18next } from '~/lib/i18n'

import {
  SignInButtonText,
  SignInContentsBox,
  SignInContentsWrapper,
  SignInSubTitle,
  SignInTitleBox,
  SignInTitleUnit
} from './style'
import { Button } from '@ow-develop/ow-design-system'
import { LOGIN_PROVIDER_TYPE } from '@toruslabs/openlogin-utils/src/interfaces'
import SvgIcon from '~/common/svg-icon'
import { GoogleIcon } from '@ow-develop/ow-icons/react/social'
import {
  FacebookIcon,
  TwitterIcon
} from '@ow-develop/ow-icons/react/social/brand'
import useBreakpoint from '~/hooks/useBreakpoint'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import { isGoogleInvalidBrowser } from '~/utils/utils'
import { ErrorMessage } from '~/constants/message'
import { WALLET_ADAPTERS } from '@web3auth/base'
import useToastAction from '~/hooks/useToastAction'
import { capitalize } from '~/utils/formatText'

const SignInContents = () => {
  const { web3Auth } = useWeb3AuthContext()
  const { belowMediumWidth } = useBreakpoint()
  const { t } = useI18next()
  const { showFailToast } = useToastAction()

  const oauthList = [
    {
      name: 'google',
      text: 'Google',
      icon: <GoogleIcon />
    },
    {
      name: 'facebook',
      text: 'Facebook',
      icon: <FacebookIcon />
    },
    {
      name: 'twitter',
      text: 'Twitter',
      icon: <TwitterIcon />
    }
  ]

  const connectSocialWallet = async (loginProvider: LOGIN_PROVIDER_TYPE) => {
    const invalidList: LOGIN_PROVIDER_TYPE[] = ['google', 'facebook']

    if (invalidList.includes(loginProvider) && isGoogleInvalidBrowser()) {
      return showFailToast(
        `${capitalize(loginProvider)} ${t(ErrorMessage.INVALID_BROWSER)}`
      )
    }

    await web3Auth?.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      loginProvider,
      mfaLevel: 'none'
    })
  }

  return (
    <SignInContentsWrapper>
      <SignInTitleBox>
        <SignInTitleUnit>{t('Login')}</SignInTitleUnit>
        <SignInSubTitle>{t('Connect wallet with social login')}</SignInSubTitle>
      </SignInTitleBox>

      <SignInContentsBox>
        {oauthList.map((item) => {
          return (
            <Button
              key={item.name}
              variant='tertiary'
              size='sm'
              width='fill'
              onClick={() =>
                connectSocialWallet(item.name as LOGIN_PROVIDER_TYPE)
              }
            >
              <SignInButtonText>{t(item.text)}</SignInButtonText>
              <SvgIcon size={20} icon={item.icon} />
            </Button>
          )
        })}
      </SignInContentsBox>
    </SignInContentsWrapper>
  )
}

export default SignInContents
