import React, { ReactNode } from 'react'

import { BadgeImageBox, RankImageField } from './style'
import {
  LevelingInputCardWrapper,
  TitleUnit
} from '../../features/rank-input-card/style'

import FullWidthImage from '~/common/image/full-width-image'
import { useI18next } from '~/lib/i18n'

export interface Props {
  title?: string
  currentImgUrl?: string
  previewImgUrl?: string
  children?: ReactNode
  disabled?: boolean
}

const RankInformation = ({
  title,
  currentImgUrl,
  previewImgUrl,
  children,
  disabled
}: Props) => {
  const { t } = useI18next()

  return (
    <LevelingInputCardWrapper>
      <TitleUnit>{t(title)}</TitleUnit>
      <RankImageField>
        {currentImgUrl && (
          <BadgeImageBox>
            <FullWidthImage src={currentImgUrl} />
          </BadgeImageBox>
        )}

        {previewImgUrl && (
          <>
            <BadgeImageBox disabled={disabled}>
              <FullWidthImage src={previewImgUrl} />
            </BadgeImageBox>
          </>
        )}
      </RankImageField>
      {children}
    </LevelingInputCardWrapper>
  )
}

export default RankInformation
