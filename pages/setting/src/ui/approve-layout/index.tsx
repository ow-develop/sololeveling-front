import { ReactNode } from 'react'

import { ApproveLayoutWrapper, ContentField } from './style'
import SubTitle from '../subtitle'

export interface Props {
  title?: string
  children?: ReactNode
}

const ApproveLayout = ({ title, children }: Props) => {
  return (
    <ApproveLayoutWrapper>
      <SubTitle title={title} />
      <ContentField>{children}</ContentField>
    </ApproveLayoutWrapper>
  )
}

export default ApproveLayout
