import { Button } from '@ow-develop/ow-design-system'
import { useAnimation } from 'framer-motion'
import React, { useEffect, useRef, useState } from 'react'

import {
  ButtonBox,
  CardBox,
  CardContentField,
  CardField,
  ContentBox,
  ContentTextBox,
  ContentTitleText,
  ContentTypeText,
  OpenEffectWrapper,
  VideoEffectBox
} from './style'

import useIsMounted from '~/hooks/useIsMounted'
import usePreventBodyScroll from '~/hooks/usePreventBodyScroll'
import { useI18next } from '~/lib/i18n'
import { RewardMonster } from '~/types/dungeon'

export interface OpenEffectProps {
  list?: RewardMonster[]
  onClick?: () => void
  videoSrc: string
}

const OpenEffect = ({ list = [], onClick, videoSrc }: OpenEffectProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>()
  const mounted = useIsMounted()
  const cardControls = useAnimation()
  const videoControls = useAnimation()
  const { t } = useI18next()
  const { initScroll } = usePreventBodyScroll()

  const cardVariants = {
    animate: {
      opacity: 1,
      transition: { duration: 0.75, delay: 0.8 }
    },
    hidden: { opacity: 0 }
  }

  const videoVariants = {
    animate: { opacity: 1, transition: { duration: 0 } }
  }

  const skipAnimation = async () => {
    await videoControls.start('hidden')
    await cardControls.start('animate', { duration: 0, delay: 0 })
  }

  const startAnimation = async () => {
    videoRef.current.currentTime = 0
    await videoControls.start('animate')
    await cardControls.start('hidden', { duration: 0, delay: 0 })
    await videoRef.current.play()
    await cardControls.start('animate')
  }

  const onClickCard = async () => {
    if (isPlaying) {
      await skipAnimation()
    } else {
      if (currentIndex === list.length - 1) return onClick?.()
      setCurrentIndex((prev) => prev + 1)
      await startAnimation()
    }
  }

  useEffect(() => {
    if (mounted) {
      initScroll()
      videoRef.current?.play()
      cardControls?.start('animate')
    }
  }, [mounted])

  if (!mounted) return null

  return (
    <OpenEffectWrapper>
      <VideoEffectBox
        onClick={onClickCard}
        variants={videoVariants}
        animate={videoControls}
      >
        <video
          autoPlay
          playsInline
          muted
          ref={videoRef}
          src={videoSrc}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
          onEnded={async () => {
            await videoControls.start('hidden')
            await videoRef.current.pause()
            setIsPlaying(false)
          }}
        />
      </VideoEffectBox>

      <CardField>
        <CardBox
          initial={cardVariants.hidden}
          variants={cardVariants}
          animate={cardControls}
        >
          <img src={list[currentIndex].imgUrl} alt='' onClick={onClickCard} />

          <CardContentField>
            <ContentBox>
              <ContentTextBox>
                <ContentTypeText>{t(list[currentIndex].type)}</ContentTypeText>
                <ContentTitleText>
                  {t(list[currentIndex].title)}
                </ContentTitleText>
                <ContentTitleText>{list[currentIndex].amount}</ContentTitleText>
              </ContentTextBox>
            </ContentBox>

            <ButtonBox>
              <Button
                variant='secondary'
                size='sm'
                style={{ background: 'var(--white-20)' }}
                onClick={onClick}
              >
                {t('Open all')}
              </Button>
              <Button variant='primary' size='sm' onClick={onClickCard}>
                {t('Next')}
              </Button>
            </ButtonBox>
          </CardContentField>
        </CardBox>
      </CardField>
    </OpenEffectWrapper>
  )
}

export default OpenEffect
