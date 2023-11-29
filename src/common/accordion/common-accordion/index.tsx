import { ReactNode } from 'react'

import CommonAccordionItem from './common-accordion-item'
import { CommonAccordionWrapper } from './style'

interface Props {
  children?: string | ReactNode
}

const CommonAccordion = ({ children }: Props) => {
  return <CommonAccordionWrapper>{children}</CommonAccordionWrapper>
}

export default Object.assign(CommonAccordion, {
  Item: CommonAccordionItem
})
