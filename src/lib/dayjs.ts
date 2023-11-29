import dayjs, { extend } from 'dayjs'
import duration from 'dayjs/plugin/duration'
import isSameOrAfter from 'dayjs/plugin/isSameOrAfter'
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore'
import localeData from 'dayjs/plugin/localeData'
import relativeTime from 'dayjs/plugin/relativeTime'
import updateLocale from 'dayjs/plugin/updateLocale'

import { SECONDS_A_DAY } from '~/constants/time'
import { DateTime } from 'next-auth/providers/kakao'

import(`dayjs/locale/en`).then(() => {
  dayjs().locale('en')
})

extend(duration)
extend(isSameOrBefore)
extend(isSameOrAfter)
extend(relativeTime)
extend(localeData)
extend(updateLocale)

export const convertBlockToDays = (block: number) => {
  return Math.ceil((2.5 * block) / SECONDS_A_DAY)
}

export const isDayExpired = (date: string | Date | DateTime) => {
  const now = dayjs()
  const day = dayjs(date)

  return now.isAfter(day)
}

export default dayjs
