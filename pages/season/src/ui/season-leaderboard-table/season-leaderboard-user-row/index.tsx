import { Button, useDownCustom } from '@ow-develop/ow-design-system'
import React from 'react'

import { DescriptionUnit, NeedLoginField, RankUnit } from './style'
import MobileSeasonLeaderboardRow from '../mobile-season-leaderboard-row'
import SeasonLeaderboardRow from '../season-leaderboard-row'
import { TableCellUnit } from '../style'
import { LeaderboardRowsById, LeaderboardTableRow } from '../type'

import { useThemeStore } from '~/atoms/common'
import { Breakpoint } from '~/constants/style'
import { useI18next } from '~/lib/i18n'
import { InternalPath } from '~/constants/route'
import { useRouter } from 'next/router'

interface Props {
  user?: LeaderboardTableRow[]
  userRowsById: LeaderboardRowsById
}

const SeasonLeaderboardUserRow = ({ user, userRowsById }: Props) => {
  const { t } = useI18next()
  const isSmallBreakpoint = useDownCustom(Breakpoint.S)
  const { isDarkMode } = useThemeStore()
  const router = useRouter()

  if (!user) {
    return (
      <NeedLoginField dark={isDarkMode}>
        {!isSmallBreakpoint && (
          <TableCellUnit width={56} align='center'>
            <RankUnit dark={isDarkMode}>-</RankUnit>
          </TableCellUnit>
        )}
        <TableCellUnit>
          <DescriptionUnit>{t('Must login to check my rank.')}</DescriptionUnit>
        </TableCellUnit>

        <TableCellUnit width={160}>
          <Button
            variant='primary'
            size='sm'
            width='fill'
            fixedWidth={160}
            onClick={() => router.push(InternalPath.SIGN_IN)}
          >
            {t('Login')}
          </Button>
        </TableCellUnit>
      </NeedLoginField>
    )
  }

  return isSmallBreakpoint ? (
    <MobileSeasonLeaderboardRow
      highlight
      key={user[0].id}
      score={{
        questScore: user[0].questScore as number,
        collectionScore: user[0].collectionScore as number,
        activityScore: user[0].activityScore as number,
        seasonScore: user[0].seasonScore as number
      }}
    >
      {userRowsById[user[0].id].cells.map((cell) => {
        return (
          <TableCellUnit key={cell.id} align={cell.align} width={cell.width}>
            {cell.value}
          </TableCellUnit>
        )
      })}
    </MobileSeasonLeaderboardRow>
  ) : (
    <SeasonLeaderboardRow
      highlight
      score={{
        questScore: user[0].questScore as number,
        collectionScore: user[0].collectionScore as number,
        activityScore: user[0].activityScore as number,
        seasonScore: user[0].seasonScore as number
      }}
    >
      {userRowsById[user[0].id].cells.map((cell) => {
        return (
          <TableCellUnit key={cell.id} align={cell.align} width={cell.width}>
            {cell.value}
          </TableCellUnit>
        )
      })}
    </SeasonLeaderboardRow>
  )
}

export default SeasonLeaderboardUserRow
