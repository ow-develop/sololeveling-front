import { SubTitleWrapper } from './style'

import { useI18next } from '~/lib/i18n'

const SubTitle = ({ title }: { title: string }) => {
  const { t } = useI18next()
  return <SubTitleWrapper>{t(title)}</SubTitleWrapper>
}

export default SubTitle
