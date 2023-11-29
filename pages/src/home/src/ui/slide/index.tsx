import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import SwiperCore, { Autoplay, EffectFade, Navigation } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import {
  BottomGradient,
  ButtonBox,
  ButtonUnit,
  CenterField,
  ContentBox,
  ContentInnerBox,
  Cover,
  ItemImg,
  ItemImgBox,
  Label,
  LeftGradient,
  MainTitle,
  SlideField,
  SlideWrapper,
  SubTitle
} from './style'
import Indicator from '../indicator'
import SlideArrow from '../slide-arrow/index.page'

import { useThemeStore } from '~/atoms/common'
import FullWidthImage from '~/common/image/full-width-image'
import { BannerType, HomeBannerResponse, HomeResourceType } from '~/api/home'
import useBreakpoint from '~/hooks/useBreakpoint'

SwiperCore.use([Navigation, Autoplay, EffectFade])
const EXTRA_MS = 3000
interface Props {
  data: HomeBannerResponse[]
  height?: number
  hasGradient?: boolean
  hasCover?: boolean
  isAutoPlay?: boolean
  hasArrow?: boolean
  isPaginationInBanner?: boolean
}
const Slide = ({
  data,
  height = 600,
  hasGradient = false,
  hasCover = false,
  isAutoPlay = false,
  hasArrow = false,
  isPaginationInBanner = true
}: Props) => {
  const [currentVideo, setCurrentVideo] = useState<HTMLMediaElement>(null)
  const [percent, setPercent] = useState(0)
  const [activeIndex, setActiveIndex] = useState(0)

  const currentItem = data?.[activeIndex]
  const swiperRef = useRef(null)
  const { isDarkMode } = useThemeStore()
  const { belowMediumWidth } = useBreakpoint()

  const router = useRouter()
  const { t } = useTranslation()

  const delayMs = currentItem?.playTime || 8000
  const handleClickLink = (url: string) => {
    if (url.includes('http') || url.includes('https')) {
      return window.open(url, '_blank')
    } else {
      return router.push(url)
    }
  }

  const handleClickSlidePrev = () => swiperRef.current.swiper.slidePrev()
  const handleClickSlideNext = () => swiperRef.current.swiper.slideNext()
  const handleActiveSwiper = (index: number) => {
    setActiveIndex(index)
    setPercent(0)
    swiperRef.current.swiper.slideToLoop(index, 500)
  }

  useEffect(() => {
    const videoEvent = (e: Event) => {
      if (currentVideo.currentTime >= delayMs + EXTRA_MS / 1000) {
        currentVideo.pause()
      }
    }

    if (currentVideo) {
      currentVideo.play()
      currentVideo.addEventListener('timeupdate', videoEvent)

      return () => {
        currentVideo.currentTime = 0
        currentVideo.removeEventListener('timeupdate', videoEvent)
      }
    }
  }, [currentVideo, delayMs])

  useEffect(() => {
    let animationFrameReqId: number
    let start: number
    const step = (timestamp: number) => {
      if (!start) start = timestamp
      const elapsedMs = timestamp - start
      const percent = (elapsedMs / delayMs) * 100
      setPercent(percent)
      if (percent <= 100) {
        animationFrameReqId = window.requestAnimationFrame(step)
      }
    }

    if (isAutoPlay) {
      animationFrameReqId = window.requestAnimationFrame(step)

      return () => {
        window.cancelAnimationFrame(animationFrameReqId)
        setPercent(0)
      }
    }
  }, [activeIndex, delayMs, isAutoPlay])

  return (
    <SlideWrapper height={height}>
      <Swiper
        ref={swiperRef}
        autoplay={
          isAutoPlay
            ? { delay: delayMs, disableOnInteraction: false }
            : isAutoPlay
        }
        onActiveIndexChange={(e) => {
          setActiveIndex(e.realIndex ?? 0)
          setPercent(0)
        }}
        loop={true}
        observer={true}
        observeParents={true}
      >
        {data?.map((item, index) => {
          const showItemImg =
            !!item.itemImg && item.type === BannerType.Collection
          const imgUrl =
            item.type === BannerType.Home && belowMediumWidth
              ? item.m_imgCf || item.m_img
              : item.imgCf || item.img
          return (
            <SwiperSlide key={item.idx}>
              {({ isActive }) => (
                <>
                  <SlideField>
                    <CenterField hasItemImg={showItemImg}>
                      {showItemImg && (
                        <ItemImgBox>
                          <ItemImg src={item.itemImg} />
                        </ItemImgBox>
                      )}
                      <ContentBox hasItemImg={showItemImg}>
                        <ContentInnerBox hasItemImg={showItemImg}>
                          {item.label && <Label>{t(item.label)}</Label>}
                          {item.title && <MainTitle>{t(item.title)}</MainTitle>}
                          <SubTitle>{t(item.subTitle)}</SubTitle>
                          <ButtonBox>
                            {item.bannerButton.map((btnItem, btnIdx) => {
                              return (
                                <ButtonUnit
                                  onClick={() => handleClickLink(btnItem.link)}
                                  key={btnIdx}
                                  variant={!btnIdx ? 'primary' : 'tertiary'}
                                  size='sm'
                                >
                                  {t(btnItem.title)}
                                </ButtonUnit>
                              )
                            })}
                          </ButtonBox>
                        </ContentInnerBox>
                      </ContentBox>
                    </CenterField>
                  </SlideField>
                  {item.resourceType === HomeResourceType.Video && (
                    <video
                      ref={(el) => {
                        isActive ? setCurrentVideo(el) : setCurrentVideo(null)
                      }}
                      muted
                      playsInline
                      width='100%'
                      style={{ height: '100%', objectFit: 'cover' }}
                      autoPlay={true}
                    >
                      <source src={imgUrl} type='video/mp4' />
                      {t('The video cannot be played.')}
                    </video>
                  )}

                  {item.resourceType === HomeResourceType.Image && (
                    <FullWidthImage src={imgUrl} />
                  )}

                  {hasGradient && (
                    <>
                      <BottomGradient isDark={isDarkMode} />
                      <LeftGradient isDark={isDarkMode} />
                    </>
                  )}

                  {hasCover && <Cover />}
                </>
              )}
            </SwiperSlide>
          )
        })}

        {hasArrow && (
          <SlideArrow
            onClickSlidePrev={handleClickSlidePrev}
            onClickSlideNext={handleClickSlideNext}
          />
        )}
      </Swiper>
      <Indicator
        data={data}
        isLocatedInBanner={isPaginationInBanner}
        handleActiveSwiper={handleActiveSwiper}
        activeIndex={activeIndex}
        percent={percent}
        isFullWidth={!isAutoPlay}
      />
    </SlideWrapper>
  )
}

export default Slide
