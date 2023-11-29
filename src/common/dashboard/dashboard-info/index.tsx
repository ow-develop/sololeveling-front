import React from 'react'

import {
  DashboardInfoWrapper,
  TitleUnit,
  ValueUnit
} from '~/common/dashboard/dashboard-info/style'

export interface Props {
  name: string
  value: string | number
}

const DashboardInfo = ({ name, value }: Props) => {
  return (
    <DashboardInfoWrapper>
      <TitleUnit>{name}</TitleUnit>
      <ValueUnit>{value}</ValueUnit>
    </DashboardInfoWrapper>
  )
}

export default DashboardInfo
