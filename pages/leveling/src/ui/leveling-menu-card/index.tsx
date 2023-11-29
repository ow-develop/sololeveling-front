import {
  CardContentField,
  CardImageBox,
  CardSubtitleUnit,
  CardTitleUnit,
  LevelingMenuCardWrapper
} from './style'

import ReactiveImage from '~/common/image/reactive-image'
import { useI18next } from '~/lib/i18n'

export interface Props {
  title: string
  subtitle: string
  imgUrl: string
  href?: string
  disabled?: boolean
  padding?: number
}

export const LevelingMenuCard = ({
  title,
  subtitle,
  imgUrl,
  disabled,
  padding
}: Props) => {
  const { t } = useI18next()

  return (
    <LevelingMenuCardWrapper disabled={disabled}>
      <CardContentField>
        <CardTitleUnit>{t(title)}</CardTitleUnit>
        <CardSubtitleUnit>{t(subtitle)}</CardSubtitleUnit>
      </CardContentField>
      <CardImageBox padding={padding}>
        <ReactiveImage src={imgUrl} />
      </CardImageBox>
    </LevelingMenuCardWrapper>
  )
}
