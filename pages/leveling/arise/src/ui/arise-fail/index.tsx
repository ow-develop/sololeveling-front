import React from 'react'
import {
  AriseDescriptionUnit,
  AriseEffectField,
  AriseTitleBox,
  AriseTitleFields,
  AriseTitleUnit,
  AriseVideoBox
} from '../style'
import { ButtonBox, OpenEffectWrapper } from '~/common/open-effect/style'
import { Button } from '@ow-develop/ow-design-system'
import { useI18next } from '~/lib/i18n'
import useModal from '~/hooks/useModal'
import { VideoType } from '~/constants/leveling'

export interface Props {
  usedStone: number
}

const AriseFail = ({ usedStone }: Props) => {
  const { closeModal } = useModal()
  const { t, i18nextTranslate } = useI18next()
  const translate = i18nextTranslate(
    `Arise was failed, consuming {{value}} Essence Stones.`,
    {
      value: usedStone
    }
  )

  return (
    <OpenEffectWrapper>
      <AriseEffectField>
        <AriseTitleFields>
          <AriseTitleBox>
            <AriseTitleUnit>ARISE FAILED</AriseTitleUnit>
            <AriseDescriptionUnit>{translate}</AriseDescriptionUnit>
          </AriseTitleBox>
        </AriseTitleFields>
        <AriseVideoBox>
          <video autoPlay playsInline muted src={VideoType.ARISE_FAIL} />
        </AriseVideoBox>
        <ButtonBox>
          <Button
            variant='secondary'
            size='sm'
            onClick={() => {
              closeModal()
            }}
          >
            {t('Retry')}
          </Button>
        </ButtonBox>
      </AriseEffectField>
    </OpenEffectWrapper>
  )
}

export default AriseFail
