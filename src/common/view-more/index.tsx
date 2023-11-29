import { ExpandMoreIcon } from '@ow-develop/ow-icons/react/material'
import { AnimatePresence } from 'framer-motion'

import SvgIcon from '~/common/svg-icon'
import {
  ButtonField,
  ContentField,
  IconBox,
  TextUnit,
  ViewMoreWrapper
} from '~/common/view-more/style'
import { ViewMoreProps } from '~/common/view-more/type'
import { useI18next } from '~/lib/i18n'

export const ViewMore = ({
  text = 'View More',
  onClick,
  extend = false,
  btnDirection = 'center',
  children
}: ViewMoreProps) => {
  const { t } = useI18next()

  return (
    <ViewMoreWrapper extend={extend}>
      <ButtonField onClick={onClick} btnDirection={btnDirection}>
        <TextUnit>{t(text)}</TextUnit>
        <IconBox isOpen={extend}>
          <SvgIcon size={20} color='text-weak' icon={<ExpandMoreIcon />} />
        </IconBox>
      </ButtonField>
      <AnimatePresence>
        {extend && <ContentField>{children}</ContentField>}
      </AnimatePresence>
    </ViewMoreWrapper>
  )
}
