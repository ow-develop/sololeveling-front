import { useRef, useState } from 'react'
import Swiper from 'swiper'

const useSwiper = (initialIndex = 0) => {
  const swiperRef = useRef(null)
  const [currentIndex, setCurrentIndex] = useState(initialIndex)
  const defaultOptions = {
    initialSlide: currentIndex,
    allowTouchMove: false,
    loop: true,
    onSwiper: (swiper: Swiper) => {
      swiperRef.current = swiper
    },
    onSlideChange: ({ realIndex }: Swiper) => {
      setCurrentIndex(realIndex)
    }
  }

  const onPrev = () => {
    if (!swiperRef || !swiperRef.current) return
    swiperRef.current.slidePrev()
  }

  const onNext = () => {
    if (!swiperRef || !swiperRef.current) return
    swiperRef.current.slideNext()
  }

  return {
    swiper: swiperRef.current,
    defaultOptions,
    onPrev,
    onNext,
    currentIndex
  }
}

export default useSwiper
