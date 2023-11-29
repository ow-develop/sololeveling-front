import { useDownCustom } from '@ow-develop/ow-design-system'
import { ExpandMoreIcon } from '@ow-develop/ow-icons/react/material'
import React, { ReactNode, useState } from 'react'

import { CellField, SeasonLeaderboardRowWrpaper } from './style'
import { AccordionBox, ExpandValueBox, ExpandValueUnit } from '../style'

import { AnimateShow } from '~/common/animate-show'
import SvgIcon from '~/common/svg-icon'
import { Breakpoint } from '~/constants/style'
import { useI18next } from '~/lib/i18n'
import { convertZero } from '~/utils/formatNumber'

export interface Props {
  score: {
    seasonScore?: number
    questScore?: number
    activityScore?: number
    collectionScore?: number
  }
  children?: ReactNode
  highlight?: boolean
}

const SeasonLeaderboardRow = ({ children, score, highlight }: Props) => {
  const { t } = useI18next()
  const isBreakpoint = useDownCustom(Breakpoint.L)
  const [open, setOpen] = useState(false)
  const expandValueList = [
    {
      title: 'Quest score',
      text: convertZero(score.questScore)?.toLocaleString()
    },
    {
      title: 'Activity score',
      text: convertZero(score.activityScore)?.toLocaleString()
    },
    {
      title: 'Collection score',
      text: convertZero(score.collectionScore)?.toLocaleString()
    }
  ]

  return (
    <SeasonLeaderboardRowWrpaper highlight={highlight}>
      <CellField>
        {children}
        {isBreakpoint && (
          <AccordionBox isExpand={open}>
            <SvgIcon
              icon={<ExpandMoreIcon />}
              size={20}
              color='icon-default'
              onClick={() => setOpen((prev) => !prev)}
            />
          </AccordionBox>
        )}
      </CellField>

      <AnimateShow on={isBreakpoint && open}>
        <ExpandValueBox>
          {expandValueList.map((item) => {
            return (
              <ExpandValueUnit key={item.title}>
                <span>{t(item.title)}</span>
                <b>{item.text}</b>
              </ExpandValueUnit>
            )
          })}
        </ExpandValueBox>
      </AnimateShow>
    </SeasonLeaderboardRowWrpaper>
  )
}

export default SeasonLeaderboardRow
