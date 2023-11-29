import { Toast } from '@ow-develop/ow-design-system'
import { useRouter } from 'next/router'
import { ReactNode, useEffect } from 'react'
import { useRecoilValue } from 'recoil'

import Footer from './footer'
import { Header } from './header'
import {
  AppWrapper,
  BottomImgBox,
  GlobalStyle,
  Main,
  SideImageBox,
  ThemeContainer
} from './style'

import BottomImg from '~/assets/image/background/bg_bottom.webp'
import SideImgMotion from '~/assets/image/background/bg_motion.webp'
import SideImg from '~/assets/image/background/bg_right.webp'
import { languageState, useThemeStore } from '~/atoms/common'
import FullWidthImage from '~/common/image/full-width-image'
import Modal from '~/common/modal'
import { InternalPath } from '~/constants/route'
import useInternationalLanguageInit from '~/lib/i18n'
import useIsCurrentSeasonQuery from '~/hooks/queries/useIsCurrentSeasonQuery'
import useEssenceStoneQuery from '../../leveling/src/hooks/useEssenceStoneQuery'

interface Props {
  children: ReactNode
}

const hideSideImgPathList = [
  InternalPath.SIGN_IN,
  InternalPath.HOME,
  InternalPath.COLLECTION
]
const hideBottomImgPathList = [InternalPath.HOME, InternalPath.SIGN_IN]
const hideFooterPathList = [InternalPath.SIGN_IN]

const App = ({ children }: Props) => {
  const language = useRecoilValue(languageState)
  const { themeState, isDarkMode } = useThemeStore()
  const { pathname, reload, push } = useRouter()
  useInternationalLanguageInit(language)
  useIsCurrentSeasonQuery(false)
  useEssenceStoneQuery()

  const shouldHideSideImgPage = hideSideImgPathList.includes(
    pathname as InternalPath
  )
  const shouldHideBottomImgPage = hideBottomImgPathList.includes(
    pathname as InternalPath
  )

  const shouldHideFooter = hideFooterPathList.includes(pathname as InternalPath)

  useEffect(() => {
    const onStorageChange = async (e: StorageEvent) => {
      if (e.key === 'openlogin_store') {
        const newValue = JSON.parse(e.newValue)

        if (newValue?.sessionId) {
          // 로그인 시
          reload()
        } else {
          // 로그아웃 시
          push(InternalPath.HOME).then(reload)
        }
      }
    }
    window.addEventListener('storage', onStorageChange)
    return () => {
      window.removeEventListener('storage', onStorageChange)
    }
  }, [])

  return (
    <ThemeContainer mode={themeState}>
      <GlobalStyle mode={themeState} />
      <AppWrapper>
        {!shouldHideBottomImgPage && (
          <BottomImgBox>
            <img src={BottomImg.src} alt='' />
          </BottomImgBox>
        )}

        <Header />

        {!shouldHideSideImgPage && (
          <SideImageBox>
            <FullWidthImage
              src={isDarkMode ? SideImgMotion.src : SideImg.src}
            />
          </SideImageBox>
        )}

        <Main>{children}</Main>

        {!shouldHideFooter && <Footer />}
      </AppWrapper>

      <Toast />
      <Modal />
    </ThemeContainer>
  )
}

export const getLayout = (page: Props) => <App {...page} />

export default App
