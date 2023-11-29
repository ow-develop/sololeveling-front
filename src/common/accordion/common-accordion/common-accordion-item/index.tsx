import { ExpandMoreIcon } from '@ow-develop/ow-icons/react/material'
import { ReactNode, useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  AccordionItemWrapper,
  ItemBadge,
  ItemContentBox,
  ItemExpand,
  ItemHeaderBox,
  ItemTitle
} from './style'

import SvgIcon from '~/common/svg-icon'

export interface Props {
  badge?: string | ReactNode
  title?: string
  description?: string
}

const CommonAccordionItem = ({ badge, title, description }: Props) => {
  const { t } = useTranslation()
  const [extend, setExtend] = useState(false)
  return (
    <AccordionItemWrapper extend={extend}>
      <ItemHeaderBox onClick={() => setExtend(!extend)}>
        <ItemBadge>
          {typeof badge === 'string' ? badge : <SvgIcon icon={badge} />}
        </ItemBadge>
        <ItemTitle>{t(title)}</ItemTitle>
        <ItemExpand extend={extend}>
          <SvgIcon size={20} color='--text-default' icon={<ExpandMoreIcon />} />
        </ItemExpand>
      </ItemHeaderBox>
      <ItemContentBox>{description}</ItemContentBox>
    </AccordionItemWrapper>
  )
}

export default CommonAccordionItem
