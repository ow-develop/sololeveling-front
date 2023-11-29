import { Top1Icon, Top2Icon, Top3Icon } from '@ow-develop/ow-icons/react/solo'

import { RankNumberBadgeWrapper } from './style'

import { useThemeStore } from '~/atoms/common'
import SvgIcon from '~/common/svg-icon'

export interface Props {
  rank?: number
}

const iconMap = {
  1: <Top1Icon />,
  2: <Top2Icon />,
  3: <Top3Icon />
}

export const RankNumberBadge = ({ rank }: Props) => {
  const isTop = [1, 2, 3].includes(rank)
  const rankText = rank > 0 ? rank : '-'
  const { isDarkMode } = useThemeStore()

  return (
    <RankNumberBadgeWrapper dark={isDarkMode}>
      {isTop ? <SvgIcon icon={iconMap[rank]} size={26} /> : rankText}
    </RankNumberBadgeWrapper>
  )
}
