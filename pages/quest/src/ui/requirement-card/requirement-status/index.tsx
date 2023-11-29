import {
  CancelIcon,
  CheckCircleIcon
} from '@ow-develop/ow-icons/react/material'

import { RequirementStatusWrapper } from './style'

import SvgIcon from '~/common/svg-icon'
import { useI18next } from '~/lib/i18n'

export interface Props {
  status: 'qualified' | 'disqualified' | 'complete'
}

const RequirementStatus = ({ status }: Props) => {
  const { t } = useI18next()

  const statusIcon =
    status !== 'disqualified' ? <CheckCircleIcon /> : <CancelIcon />
  const statusIconColor =
    status !== 'disqualified'
      ? 'status-success-default'
      : 'status-danger-default'

  return (
    <RequirementStatusWrapper>
      {t(status)}
      <SvgIcon icon={statusIcon} color={statusIconColor} size={20} />
    </RequirementStatusWrapper>
  )
}

export default RequirementStatus
