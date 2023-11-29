import { Tab } from '@ow-develop/ow-design-system'
import useSystemStore from '../../hooks/useSystemStore'
import { LevelingNavigationWrapper } from './style'

interface Props {
  tabList: string[]
}
const LevelingNavigation = ({ tabList }: Props) => {
  const { selectRank, setSelectRank, setSelectSystemItem } = useSystemStore()

  const handleRankTabClick = (data: string) => {
    setSelectRank(data)
    setSelectSystemItem([])
  }

  return (
    <LevelingNavigationWrapper>
      <Tab variant='filled' list={tabList} onChange={handleRankTabClick} />
    </LevelingNavigationWrapper>
  )
}

export default LevelingNavigation
