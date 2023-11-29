import { useDownCustom } from '@ow-develop/ow-design-system'

import MobileSeasonLeaderboardRow from './mobile-season-leaderboard-row'
import SeasonLeaderboardEmpty from './season-leaderboard-empty'
import SeasonLeaderboardRow from './season-leaderboard-row'
import SeasonLeaderboardUserRow from './season-leaderboard-user-row'
import {
  SeasonLeaderboardTableWrapper,
  TableBodyField,
  TableCellUnit,
  TableHeaderCellUnit,
  TableHeaderRowUnit,
  TableHeadField
} from './style'
import {
  LeaderboardRowsById,
  LeaderboardTableHeader,
  LeaderboardTableRow
} from './type'

import { Breakpoint } from '~/constants/style'
import { useI18next } from '~/lib/i18n'

interface Props {
  headers?: LeaderboardTableHeader[]
  rows?: LeaderboardTableRow[]
  expand?: boolean
  user?: LeaderboardTableRow[]
}

const getRowsData = (
  rows: Props['rows'],
  headers: Props['headers']
): LeaderboardRowsById => {
  const rowsById = {}

  rows?.forEach((row, i) => {
    const { id } = row

    rowsById[id] = {
      id,
      cells: new Array(headers.length)
    }

    headers.forEach(({ key, width, align }, i) => {
      const id = `${row.id}:${key}`

      rowsById[row.id].cells[i] = {
        id,
        value: row[key],
        width,
        align
      }
    })
  })

  return rowsById
}

const SeasonLeaderboardTable = ({ headers, rows, expand, user }: Props) => {
  const { t } = useI18next()
  const isSmallBreakpoint = useDownCustom(Breakpoint.S)
  const rowsById = getRowsData(rows, headers)
  const userRowsById = getRowsData(user, headers)

  const Row = isSmallBreakpoint
    ? MobileSeasonLeaderboardRow
    : SeasonLeaderboardRow

  return (
    <SeasonLeaderboardTableWrapper>
      <TableHeadField expand={expand}>
        <TableHeaderRowUnit>
          {headers.map((item) => {
            return (
              <TableHeaderCellUnit
                key={item.key}
                width={item.width}
                align={item.align}
              >
                {t(item.header)}
              </TableHeaderCellUnit>
            )
          })}
        </TableHeaderRowUnit>
      </TableHeadField>

      <TableBodyField>
        <SeasonLeaderboardUserRow user={user} userRowsById={userRowsById} />

        {rows && rows.length > 0 ? (
          rows.map((row) => {
            return (
              <Row
                key={row.id}
                score={{
                  questScore: row.questScore as number,
                  collectionScore: row.collectionScore as number,
                  activityScore: row.activityScore as number,
                  seasonScore: row.seasonScore as number
                }}
              >
                {rowsById[row.id].cells.map((cell) => {
                  return (
                    <TableCellUnit
                      key={cell.id}
                      align={cell.align}
                      width={cell.width}
                    >
                      {cell.value}
                    </TableCellUnit>
                  )
                })}
              </Row>
            )
          })
        ) : (
          <SeasonLeaderboardEmpty />
        )}
      </TableBodyField>
    </SeasonLeaderboardTableWrapper>
  )
}

export default SeasonLeaderboardTable
