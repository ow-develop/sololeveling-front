import { InfoOutlineIcon } from '@ow-develop/ow-icons/react/material'
import { useEffect, useState } from 'react'

import { RankNumberBadge } from '../rank-number-badge'

import SeasonLeaderboardTable from './index'

import { AccountProfile } from '~/common/profile/account-profile'
import SvgIcon from '~/common/svg-icon'
import { Breakpoint } from '~/constants/style'
import { StoryWrapper } from '~/styles/global-style'

export default {
  title: 'season/Leaderboard Table'
}

const headersMap = {
  large: [
    { key: 'rank', header: 'Rank', align: 'center', width: 56 },
    {
      key: 'hunterName',
      header: 'Hunter name',
      align: 'flex-start',
      width: 206.4
    },
    {
      key: 'questScore',
      header: 'Quest score',
      align: 'center'
    },
    {
      key: 'activityScore',
      header: 'Activity score',
      align: 'center'
    },
    {
      key: 'collectionScore',
      header: 'Collection score',
      align: 'center'
    },
    {
      key: 'seasonScore',
      header: (
        <>
          <SvgIcon icon={<InfoOutlineIcon />} size={18} color='icon-default' />
          Season score
        </>
      ),
      align: 'flex-end'
    }
  ],
  medium: [
    { key: 'rank', header: 'Rank', align: 'center', width: 56 },
    {
      key: 'hunterName',
      header: 'Hunter name',
      align: 'flex-start',
      width: 144
    },
    {
      key: 'seasonScore',
      header: (
        <>
          <SvgIcon icon={<InfoOutlineIcon />} size={18} color='icon-default' />
          Season score
        </>
      ),
      align: 'flex-end'
    }
  ],
  small: [
    { key: 'rank', header: 'Rank', align: 'center', width: 56 },
    {
      key: 'hunterName',
      header: 'Hunter name',
      align: 'flex-start'
    }
  ]
}
const rowsMap = {
  large: [
    {
      id: 'b',
      hunterName: (
        <AccountProfile
          imageSize={48}
          name='hank1'
          address='0xef46D5fe753c988606E6F703260D816AF53B03EB'
        />
      ),
      rank: <RankNumberBadge rank={1} />,
      seasonScore: 3_320_634,
      collectionScore: 1_010_234,
      activityScore: 1_010_234,
      questScore: '-',
      expandValue: <div>222</div>
    },
    {
      id: 'c',
      hunterName: (
        <AccountProfile
          imageSize={48}
          name='hank2'
          address='0xef46D5fe753c988606E6F703260D816AF53B03EB'
        />
      ),
      rank: <RankNumberBadge rank={2} />,
      seasonScore: 3_320_634,
      collectionScore: 1_010_234,
      activityScore: 1_010_234,
      questScore: '-'
    },
    {
      id: 'd',
      hunterName: (
        <AccountProfile
          imageSize={48}
          name='hank3'
          address='0xef46D5fe753c988606E6F703260D816AF53B03EB'
        />
      ),
      rank: <RankNumberBadge rank={3} />,
      seasonScore: 3_320_634,
      collectionScore: 1_010_234,
      activityScore: 1_010_234,
      questScore: '-'
    }
  ],
  medium: [
    {
      id: 'b',
      hunterName: (
        <AccountProfile
          imageSize={48}
          name='hank1'
          address='0xef46D5fe753c988606E6F703260D816AF53B03EB'
        />
      ),
      rank: <RankNumberBadge rank={1} />,
      seasonScore: 3_320_634,
      collectionScore: 1_010_234,
      activityScore: 1_010_234
    },
    {
      id: 'c',
      hunterName: (
        <AccountProfile
          imageSize={48}
          name='hank2'
          address='0xef46D5fe753c988606E6F703260D816AF53B03EB'
        />
      ),
      rank: <RankNumberBadge rank={2} />,
      seasonScore: 3_320_634,
      collectionScore: 1_010_234,
      activityScore: 1_010_234
    },
    {
      id: 'd',
      hunterName: (
        <AccountProfile
          imageSize={48}
          name='hank3'
          address='0xef46D5fe753c988606E6F703260D816AF53B03EB'
        />
      ),
      rank: <RankNumberBadge rank={3} />,
      seasonScore: 3_320_634,
      collectionScore: 1_010_234,
      activityScore: 1_010_234
    }
  ],
  small: [
    {
      id: 'b',
      hunterName: (
        <AccountProfile
          imageSize={48}
          name='hank1'
          address='0xef46D5fe753c988606E6F703260D816AF53B03EB'
        />
      ),
      rank: <RankNumberBadge rank={1} />,
      seasonScore: 3_320_634,
      collectionScore: 1_010_234,
      activityScore: 1_010_234
    },
    {
      id: 'c',
      hunterName: (
        <AccountProfile
          imageSize={48}
          name='hank2'
          address='0xef46D5fe753c988606E6F703260D816AF53B03EB'
        />
      ),
      rank: <RankNumberBadge rank={2} />,
      seasonScore: 3_320_634,
      collectionScore: 1_010_234,
      activityScore: 1_010_234
    },
    {
      id: 'd',
      hunterName: (
        <AccountProfile
          imageSize={48}
          name='hank3'
          address='0xef46D5fe753c988606E6F703260D816AF53B03EB'
        />
      ),
      rank: <RankNumberBadge rank={3} />,
      seasonScore: 3_320_634,
      collectionScore: 1_010_234,
      activityScore: 1_010_234
    }
  ]
}

export const Default = () => {
  const [viewport, setViewport] = useState(window.innerWidth)
  const isLargeBreakpoint = viewport >= Breakpoint.L
  const isMediumBreakpoint = viewport < Breakpoint.L
  const isSmallBreakpoint = viewport < Breakpoint.S
  const large = isLargeBreakpoint ? 'large' : false
  const medium = isMediumBreakpoint ? 'medium' : false
  const small = isSmallBreakpoint ? 'small' : false

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', (e) => {
        setViewport(window.innerWidth)
      })
    }
  }, [])

  return (
    <StoryWrapper>
      <SeasonLeaderboardTable
        headers={
          small || medium || large
            ? headersMap[`${small || medium || large}`]
            : headersMap.large
        }
        rows={rowsMap[`${small || medium || large || 'large'}`]}
        expand={!!medium}
        user={[
          {
            id: '0x5b198118390D775a188D5470E11E63CFb7A15602',
            hunterName: (
              <AccountProfile
                imageSize={48}
                name='hank2'
                address='0x5b198118390D775a188D5470E11E63CFb7A15602'
              />
            ),
            rank: <RankNumberBadge rank={100} />,
            seasonScore: 3_320_634,
            collectionScore: 1_010_234,
            activityScore: 1_010_234,
            questScore: '-'
          }
        ]}
      />
    </StoryWrapper>
  )
}

export const Disabled = () => {
  const [viewport, setViewport] = useState(window.innerWidth)
  const isLargeBreakpoint = viewport >= Breakpoint.L
  const isMediumBreakpoint = viewport < Breakpoint.L
  const isSmallBreakpoint = viewport < Breakpoint.S
  const large = isLargeBreakpoint ? 'large' : false
  const medium = isMediumBreakpoint ? 'medium' : false
  const small = isSmallBreakpoint ? 'small' : false

  useEffect(() => {
    if (window) {
      window.addEventListener('resize', (e) => {
        setViewport(window.innerWidth)
      })
    }
  }, [])

  return (
    <StoryWrapper>
      <SeasonLeaderboardTable
        headers={
          small || medium || large
            ? headersMap[`${small || medium || large}`]
            : headersMap.large
        }
        expand={!!medium}
      />
    </StoryWrapper>
  )
}
