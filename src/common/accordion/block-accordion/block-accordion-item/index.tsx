import { ExpandMoreIcon } from '@ow-develop/ow-icons/react/material'
import React, { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'

import BlockAccordionItemContext from '~/common/accordion/block-accordion/block-accordion-item/context'
import {
  BlockAccordionItemWrapper,
  ItemBadge,
  ItemContentBox,
  ItemContentField,
  ItemExpand,
  ItemHeaderBox,
  ItemTitle
} from '~/common/accordion/block-accordion/block-accordion-item/style'
import SvgIcon from '~/common/svg-icon'

export interface Props {
  badge?: string | ReactNode
  title?: string
  isExtend?: boolean
  children?: string | ReactNode
}

const BlockAccordionItem = ({ badge, title, isExtend, children }: Props) => {
  const { t } = useTranslation()
  const [extend, setExtend] = useState(isExtend)
  return (
    <BlockAccordionItemContext.Provider value={{ extend }}>
      <BlockAccordionItemWrapper extend={extend}>
        <ItemHeaderBox onClick={() => setExtend(!extend)}>
          <ItemBadge>
            {typeof badge === 'string' ? (
              badge
            ) : (
              <SvgIcon icon={badge} color='icon-strong' />
            )}
          </ItemBadge>
          <ItemTitle>{t(title)}</ItemTitle>
          <ItemExpand extend={extend}>
            <SvgIcon icon={<ExpandMoreIcon />} color='icon-strong' />
          </ItemExpand>
        </ItemHeaderBox>
        <ItemContentField>
          <ItemContentBox>{children}</ItemContentBox>
        </ItemContentField>
      </BlockAccordionItemWrapper>
    </BlockAccordionItemContext.Provider>
  )
}

export default BlockAccordionItem
