import { ExpandMoreIcon } from '@ow-develop/ow-icons/react/material'
import React, { ReactNode, useState } from 'react'

import {
  AccordionField,
  CellField,
  ExpandValueBox,
  ExpandValueUnit,
  MobileSeasonLeaderboardRowWrpaper
} from './style'

import { useThemeStore } from '~/atoms/common'
import { AnimateShow } from '~/common/animate-show'
import SvgIcon from '~/common/svg-icon'
import { useI18next } from '~/lib/i18n'

export interface Props {
  children?: ReactNode
  score: {
    seasonScore?: number
    questScore?: number
    activityScore?: number
    collectionScore?: number
  }
  highlight?: boolean
}

const MobileSeasonLeaderboardRow = ({ children, score, highlight }: Props) => {
  const [open, setOpen] = useState(false)
  const { isDarkMode } = useThemeStore()
  const { t } = useI18next()

  const expandValueList = [
    {
      title: 'Quest score',
      text: score.questScore?.toLocaleString() ?? '-'
    },
    {
      title: 'Activity score',
      text: score.activityScore?.toLocaleString() ?? '-'
    },
    {
      title: 'Collection score',
      text: score.collectionScore?.toLocaleString() ?? '-'
    }
  ]

  return (
    <MobileSeasonLeaderboardRowWrpaper highlight={highlight}>
      <CellField>{children}</CellField>

      <AccordionField isExpand={open}>
        {score.seasonScore?.toLocaleString() ?? '-'}

        <SvgIcon
          icon={<ExpandMoreIcon />}
          size={20}
          color={isDarkMode ? 'text-strong' : 'icon-weak'}
          onClick={() => setOpen((prev) => !prev)}
        />
      </AccordionField>

      <AnimateShow on={open}>
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
    </MobileSeasonLeaderboardRowWrpaper>
  )
}

export default MobileSeasonLeaderboardRow
