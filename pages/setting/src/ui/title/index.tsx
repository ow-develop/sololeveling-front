import { TitleWrapper } from './style'

import { useTranslation } from 'react-i18next'

const Title = ({ title }: { title: string }) => {
  const { t } = useTranslation()

  return <TitleWrapper>{t(title)}</TitleWrapper>
}

export default Title
