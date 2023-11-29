import React, { useEffect } from 'react'
import {
  AriseCardBox,
  AriseDescriptionUnit,
  AriseEffectField,
  AriseTitleBox,
  AriseTitleFields,
  AriseTitleUnit
} from '../style'
import {
  ButtonBox,
  CardContentField,
  ContentBox,
  ContentTextBox,
  ContentTitleText,
  ContentTypeText,
  OpenEffectWrapper
} from '~/common/open-effect/style'
import { Button } from '@ow-develop/ow-design-system'
import { useI18next } from '~/lib/i18n'
import VideoCommon from '~/common/video-effect'
import { InternalPath } from '~/constants/route'
import { useRouter } from 'next/router'
import { useAnimation } from 'framer-motion'
import useIsMounted from '~/hooks/useIsMounted'

import { VideoType } from '~/constants/leveling'

export interface Props {
  rank: string
  title: string
  imgUrl: string
  usedStone: number
}

const AriseSuccess = ({ rank, title, imgUrl, usedStone }: Props) => {
  const cardControls = useAnimation()
  const mounted = useIsMounted()
  const { t, i18nextTranslate } = useI18next()
  const router = useRouter()
  const translate = i18nextTranslate(
    `Arise was successful, consuming 1 Monster and {{value}} Essence Stones.`,
    {
      value: usedStone
    }
  )

  const titles = i18nextTranslate(`{{value}}`, {
    value: title
  })

  const cardVariants = {
    animate: {
      opacity: [0, 0.3, 1],
      transition: { duration: 0.75, delay: 1 },
      y: [10, 0]
    },
    hidden: { opacity: 0 }
  }

  useEffect(() => {
    if (mounted) {
      cardControls?.start('animate')
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <OpenEffectWrapper>
      <VideoCommon video={VideoType.ARISE_SUCCESS} />

      <AriseEffectField>
        <AriseTitleFields>
          <AriseTitleBox>
            <AriseTitleUnit>ARISE SUCCEEDED</AriseTitleUnit>
            <AriseDescriptionUnit>{translate}</AriseDescriptionUnit>
          </AriseTitleBox>
        </AriseTitleFields>

        <AriseCardBox
          initial={cardVariants.hidden}
          variants={cardVariants}
          animate={cardControls}
        >
          <img src={imgUrl} alt={t(titles)} />
          <CardContentField>
            <ContentBox>
              <ContentTextBox>
                <ContentTypeText>
                  {t(`${rank}-Rank Shadow Army`)}
                </ContentTypeText>
                <ContentTitleText>{t(titles)}</ContentTitleText>
              </ContentTextBox>
            </ContentBox>

            <ButtonBox>
              <Button
                variant='primary'
                size='sm'
                onClick={() => {
                  router.push(InternalPath.HUNTER)
                }}
              >
                {t('Go to Inventory')}
              </Button>
            </ButtonBox>
          </CardContentField>
        </AriseCardBox>
      </AriseEffectField>
    </OpenEffectWrapper>
  )
}

export default AriseSuccess
