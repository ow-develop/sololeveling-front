import { Button } from '@ow-develop/ow-design-system'

import {
  ButtonBox,
  DescriptionUnit,
  ImageBox,
  SeasonRewardCardWrapper,
  TextUnit,
  TitleUnit
} from './style'

import FullWidthImage from '~/common/image/full-width-image'
import { useI18next } from '~/lib/i18n'

export interface SeasonRewardCardProps {
  type?: 'text' | 'button'
  text?: string
  title?: string
  imgUrl?: string
  description?: string
  qualified?: boolean
  onClick?: () => void
  loading?: boolean
  completed?: boolean
}

export const SeasonRewardCard = ({
  type = 'text',
  text,
  title,
  imgUrl,
  description,
  qualified,
  onClick,
  loading,
  completed
}: SeasonRewardCardProps) => {
  const { t } = useI18next()

  const getButtonTypeComponent = () => {
    switch (true) {
      case qualified:
        return completed ? (
          <TextUnit qualified>{t('complete')}</TextUnit>
        ) : (
          <Button
            width='fill'
            variant='primary'
            onClick={onClick}
            disabled={!qualified}
            loading={loading}
          >
            {t('Claim')}
          </Button>
        )
      default:
        return <TextUnit qualified={qualified}>{t(text)}</TextUnit>
    }
  }

  return (
    <SeasonRewardCardWrapper>
      <ImageBox>
        <FullWidthImage src={imgUrl} />
      </ImageBox>

      <TitleUnit>{t(title)}</TitleUnit>

      <DescriptionUnit>{t(description)}</DescriptionUnit>

      <ButtonBox>
        {type === 'text' && (
          <TextUnit qualified={qualified}>{t(text)}</TextUnit>
        )}

        {type === 'button' && getButtonTypeComponent()}
      </ButtonBox>
    </SeasonRewardCardWrapper>
  )
}
