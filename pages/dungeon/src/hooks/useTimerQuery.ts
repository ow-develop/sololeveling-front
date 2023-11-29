import { useQuery } from '@tanstack/react-query'
import dayjs from 'dayjs'

import { QueryKey } from '~/constants/query'
import { MILLISECONDS_A_SECOND } from '~/constants/time'

const getCurrentTime = () => {
  return dayjs()
}

const useTimerQuery = () => {
  const queryState = useQuery([QueryKey.SET_INTERVAL], getCurrentTime, {
    refetchInterval: MILLISECONDS_A_SECOND
  })

  return {
    ...queryState
  }
}

export default useTimerQuery
