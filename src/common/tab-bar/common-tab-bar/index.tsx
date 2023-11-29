import { useDownCustom } from '@ow-develop/ow-design-system'
import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  CommonTabBarWrapper,
  TabSliderUnit,
  TabUnit
} from '~/common/tab-bar/common-tab-bar/style'
import { Breakpoint } from '~/constants/style'

interface Props {
  list: string[]
  onChange?: (arg: string) => void
  mountIndex?: number
}

const CommonTabBar = ({ list, onChange, mountIndex = 0 }: Props) => {
  const isDownMediumSize = useDownCustom(Breakpoint.M)
  const [tabIndex, setTabIndex] = useState<number>(mountIndex)
  const wrapperRef = useRef<HTMLUListElement>()
  const sliderRef = useRef<HTMLLIElement>()
  const { t } = useTranslation()

  const setSliderCoordinate = (width: number = 0, left: number = 0) => {
    sliderRef.current.style.width = `${width}px`
    sliderRef.current.style.transform = `translateX(${left}px)`
  }

  const resizeTabSlider = (index: number) => {
    const activeElement = wrapperRef.current.querySelectorAll('li')[index]

    setSliderCoordinate(activeElement?.offsetWidth, activeElement?.offsetLeft)
  }

  const handleTab = (index: number, e: React.MouseEvent<HTMLLIElement>) => {
    if (tabIndex === index) return

    const target = e.target as HTMLLIElement

    setSliderCoordinate(target.offsetWidth, target.offsetLeft)
    setTabIndex(index)
    onChange?.(list[index])
  }

  const handleTabOnMount = () => {
    if (!wrapperRef.current || !sliderRef.current) return
    resizeTabSlider(mountIndex)
    onChange?.(list[tabIndex])
  }

  useEffect(() => {
    handleTabOnMount()
  }, [])

  useEffect(() => {
    resizeTabSlider(tabIndex)
  }, [isDownMediumSize])

  return (
    <CommonTabBarWrapper ref={wrapperRef}>
      {list.map((item, index) => {
        return (
          <TabUnit
            key={index}
            active={tabIndex === index}
            onClick={(e) => handleTab(index, e)}
          >
            {t(item)}
          </TabUnit>
        )
      })}

      <TabSliderUnit ref={sliderRef} />
    </CommonTabBarWrapper>
  )
}

export default CommonTabBar
