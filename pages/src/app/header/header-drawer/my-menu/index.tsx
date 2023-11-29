import { Accordion } from '@ow-develop/ow-design-system'
import { CheckIcon } from '@ow-develop/ow-icons/react/material'
import { useRouter } from 'next/router'
import React from 'react'
import { useRecoilState } from 'recoil'

import { IconBox, LanguageBox } from '../balance-menu/style'

import { languageState } from '~/atoms/common'
import Menu from '~/common/menu'
import useAuth from '~/hooks/useAuth'

const MyMenu = () => {
  const { push } = useRouter()
  const [language, setLanguage] = useRecoilState(languageState)
  const { isLoggedIn } = useAuth()

  const links = [
    {
      name: 'Language',
      drops: [
        {
          text: (
            <LanguageBox isActive={language === 'EN'}>
              EN
              {language === 'EN' && (
                <IconBox>
                  <CheckIcon width={20} height={20} />
                </IconBox>
              )}
            </LanguageBox>
          ),
          isActive: language === 'EN',
          onClick: () => setLanguage('EN')
        },
        {
          text: (
            <LanguageBox isActive={language === 'KR'}>
              KR
              {language === 'KR' && (
                <IconBox>
                  <CheckIcon width={20} height={20} />
                </IconBox>
              )}
            </LanguageBox>
          ),
          isActive: language === 'KR',
          onClick: () => setLanguage('KR')
        }
      ]
    },

    ...(isLoggedIn
      ? [
          {
            url: '/setting',
            name: 'Setting'
          }
        ]
      : [])
  ]

  return (
    <Menu title='Preference'>
      {links.map(({ drops, name, url }) => {
        if (drops) return <Accordion key={name} title={name} list={drops} />

        return <Menu.Item key={name} title={name} onClick={() => push(url)} />
      })}
    </Menu>
  )
}
export default MyMenu
