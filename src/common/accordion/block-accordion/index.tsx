import React, { ReactNode } from 'react'

import BlockAccordionItem from '~/common/accordion/block-accordion/block-accordion-item'
import { BlockAccordionWrapper } from '~/common/accordion/block-accordion/style'

interface Props {
  children?: string | ReactNode
}

const BlockAccordion = ({ children }: Props) => {
  return <BlockAccordionWrapper>{children}</BlockAccordionWrapper>
}

export default Object.assign(BlockAccordion, {
  Item: BlockAccordionItem
})
