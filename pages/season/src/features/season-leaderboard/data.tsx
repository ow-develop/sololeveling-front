import { InfoOutlineIcon } from '@ow-develop/ow-icons/react/material'

import { LeaderboardTableHeader } from '../../ui/season-leaderboard-table/type'

import SvgIcon from '~/common/svg-icon'

export const headersMap: Record<string, LeaderboardTableHeader[]> = {
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
