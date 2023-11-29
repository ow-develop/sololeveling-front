import { SocialIconIcon } from '@ow-develop/ow-icons/react/material'
import {
  DiscordIcon,
  TwitterIcon
} from '@ow-develop/ow-icons/react/social/brand'
import Link from 'next/link'
import { useTranslation } from 'react-i18next'

import {
  CopyrightBox,
  CopyRightUnit,
  DropdownBox,
  FooterWrapper,
  LogoBox,
  PolicyBox,
  SocialIconBox
} from './style'
import LanguageDropdown from '../language-dropdown'

import HeaderLogo from '~/assets/image/logo.svg'
import { useThemeStore } from '~/atoms/common'
import SvgIcon from '~/common/svg-icon'
import { InternalPath } from '~/constants/route'

const serviceList = [
  { id: 1, name: 'Terms of Service', urlAddress: InternalPath.TERMS },
  { id: 2, name: 'Privacy Policy', urlAddress: InternalPath.PRIVACY }
]

const socialIcons = [
  { id: 1, src: <DiscordIcon />, name: 'Discord', linkUrl: '' },
  { id: 2, src: <TwitterIcon />, name: 'Twitter', linkUrl: '' },
  { id: 3, src: <SocialIconIcon />, name: 'SocialIcon', linkUrl: '' }
]

const Footer = () => {
  const { t } = useTranslation()
  const { isDarkMode } = useThemeStore()

  return (
    <FooterWrapper>
      <LogoBox dark={isDarkMode}>
        <Link href={InternalPath.HOME}>
          <a>
            <HeaderLogo fill={isDarkMode ? '#fff' : '#00050D'} />
          </a>
        </Link>
      </LogoBox>

      <SocialIconBox>
        {socialIcons.map((socialIcon) => {
          const { id, src, linkUrl } = socialIcon
          return (
            <Link href={linkUrl} key={id}>
              <a target='_blank' rel='noreferrer'>
                <SvgIcon color='icon-default' size={20} icon={src} />
              </a>
            </Link>
          )
        })}
      </SocialIconBox>

      <DropdownBox>
        <LanguageDropdown />
        {/*<ThemeDropdown />*/}
      </DropdownBox>

      <PolicyBox>
        {serviceList.map((service) => {
          const { id, name, urlAddress } = service

          return (
            <Link href={urlAddress} key={id}>
              {t(name)}
            </Link>
          )
        })}
      </PolicyBox>

      <CopyrightBox>
        <CopyRightUnit>
          ⓒ DUBU(REDICE STUDIO), CHUGONG(D&C WEBTOON Biz)
        </CopyRightUnit>
        <CopyRightUnit>©otherworld Inc. All Right Reserved.</CopyRightUnit>
      </CopyrightBox>
    </FooterWrapper>
  )
}

export default Footer
