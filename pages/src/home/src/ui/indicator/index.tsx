import {
  IndicatorBox,
  IndicatorField,
  ProgressBarUnit,
  ProgressBarUnitBox,
  ProgressBarUnitField
} from './style'
import { HomeBannerResponse } from '~/api/home'

interface Props {
  data: HomeBannerResponse[]
  activeIndex: number
  handleActiveSwiper: (index: number) => void
  isLocatedInBanner: boolean
  percent: number
  isFullWidth: boolean
}
const Indicator = ({
  data,
  activeIndex,
  handleActiveSwiper,
  isLocatedInBanner,
  percent,
  isFullWidth
}: Props) => {
  return (
    <IndicatorField isLocatedInBanner={isLocatedInBanner}>
      <IndicatorBox isLocatedInBanner={isLocatedInBanner}>
        {data?.map((item, index) => {
          return (
            <ProgressBarUnitField
              key={item.idx}
              onClick={() => handleActiveSwiper(index)}
            >
              <ProgressBarUnitBox>
                <ProgressBarUnit
                  isActive={activeIndex === index}
                  percent={percent}
                  isFullWidth={isFullWidth}
                />
              </ProgressBarUnitBox>
            </ProgressBarUnitField>
          )
        })}
      </IndicatorBox>
    </IndicatorField>
  )
}

export default Indicator
