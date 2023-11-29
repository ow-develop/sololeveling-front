import { Props } from '~/types/common'
import {
  AppWrapper,
  BottomImgBox,
  Main,
  SideImageBox
} from '~/stories/Layout.styled'
import BottomImg from '~/assets/image/background/bg_bottom.webp'
import SideImg from '~/assets/image/background/bg_right.webp'

import FullWidthImage from '~/common/image/full-width-image'
import { CommonMainLayout } from '~/layouts/style'
import SectionLayout from '~/layouts/section-layout'

export interface StoryLayout extends Props {
  title?: string
  description?: string
}

const Layout = ({ children, title, description }: StoryLayout) => {
  return (
    <>
      <AppWrapper>
        <BottomImgBox>
          <img src={BottomImg.src} alt='' />
        </BottomImgBox>

        <SideImageBox>
          <FullWidthImage src={SideImg.src} />
        </SideImageBox>

        <Main>
          <CommonMainLayout>
            <SectionLayout title={title} description={description}>
              {children}
            </SectionLayout>
          </CommonMainLayout>
        </Main>
      </AppWrapper>
    </>
  )
}

export default Layout
