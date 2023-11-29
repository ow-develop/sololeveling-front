import { AnimatePresence, motion, useAnimationControls } from 'framer-motion'

import Countdown, { CountdownRendererFn } from 'react-countdown'
import ProgressImg from '~/assets/image/dungeon/gateslot_progress.webp'
import React, { memo, useEffect, useMemo, useRef, useState } from 'react'
import EssenceStoneImage from '~/assets/image/stone/essence_stone.webp'

import { MILLISECONDS_A_SECOND } from '~/constants/time'
import {
  BackgroundBox,
  ContentBox,
  FlipBoxWrapper,
  FlipField,
  MotionBottomFlex,
  MotionFlex,
  ProgressSlotWrapper,
  SlotItemTextWrapper,
  StaticCardLower,
  StaticCardUpper,
  TimerText,
  TitleUnit
} from '~/stories/gate-slot/Timer.styled'

const StaticCard = ({
  position,
  unit
}: {
  position: 'upper' | 'lower'
  unit: number | string
}) => {
  if (position === 'upper') {
    return (
      <StaticCardUpper>
        <TimerText up>{unit}</TimerText>
      </StaticCardUpper>
    )
  }

  return (
    <StaticCardLower>
      <TimerText>{unit}</TimerText>
    </StaticCardLower>
  )
}

const AnimatedCard = memo(
  ({
    current,
    previous
  }: {
    current: number | string
    previous: number | string
  }) => {
    const [displayUnit, setDisplayUnit] = useState(previous)
    const controls = useAnimationControls()

    useEffect(() => {
      controls.start({
        rotateX: [0, -180],
        transition: { duration: 0.6, ease: 'easeInOut' }
      })
      setDisplayUnit(previous)
    }, [previous])

    return (
      <MotionFlex
        id='animated-card'
        animate={controls}
        onAnimationComplete={() => {
          setDisplayUnit(current)
          controls.set({ rotateX: 0 })
        }}
      >
        <TimerText id='animated-card-text' up>
          {displayUnit}
        </TimerText>
      </MotionFlex>
    )
  }
)

const AnimatedCardBottom = ({ unit }: { unit: number | string }) => {
  const [displayUnit, setDisplayUnit] = useState(unit)
  const controls = useAnimationControls()

  useEffect(() => {
    controls.start({
      rotateX: [180, 0],
      transition: { duration: 0.6, ease: 'easeInOut' }
    })
    setDisplayUnit(unit)
  }, [unit])

  return (
    <MotionBottomFlex id='animated-card' animate={controls}>
      <TimerText>{displayUnit}</TimerText>
    </MotionBottomFlex>
  )
}

const FlipItem = ({
  number,
  title
}: {
  number: number
  title: 'days' | 'hours' | 'mins' | 'secs'
}) => {
  const { current, previous } = useMemo(() => {
    const currentDigit = number
    const previousDigit = number + 1

    const current =
      currentDigit < 10
        ? `0${currentDigit}`
        : (title === 'secs' || title === 'mins') && currentDigit === 60
        ? '00'
        : currentDigit
    const previous =
      previousDigit < 10
        ? `0${previousDigit}`
        : (title === 'secs' || title === 'mins') && previousDigit === 60
        ? '00'
        : previousDigit

    return { current, previous }
  }, [number])

  return (
    <FlipBoxWrapper>
      <FlipField>
        <StaticCard position='upper' unit={current} />
        <StaticCard position='lower' unit={previous} />
        <AnimatedCard current={current} previous={previous} />
        <AnimatedCardBottom unit={current} />
      </FlipField>
      {/*<FlipBottom>*/}
      {/*  <p>{title}</p>*/}
      {/*</FlipBottom>*/}
    </FlipBoxWrapper>
  )
}

const Renderer: CountdownRendererFn = ({
  hours,
  minutes,
  seconds,
  completed,
  days
}) => {
  // if (completed) return null
  return (
    <AnimatePresence>
      {!completed && (
        <motion.div
          exit={{
            opacity: 0,
            transition: {
              duration: 0.2,
              type: 'spring',
              damping: 70,
              stiffness: 500
            }
          }}
          style={{
            display: 'flex',
            gap: '8px'
          }}
        >
          <FlipItem number={days} title={'days'} />
          <FlipItem number={hours} title={'hours'} />
          <FlipItem number={minutes} title={'mins'} />
          <FlipItem number={seconds} title={'secs'} />
        </motion.div>
      )}
    </AnimatePresence>
  )
}

const Timer = ({ remainBlock = 5 }: { remainBlock: number }) => {
  const [isFetched, setIsFetched] = useState(false)
  const [future, setFuture] = useState<number>()
  const [img, setImg] = useState(ProgressImg.src)
  const ref = useRef()

  const getRemainTime = (block: number) => {
    const timePerBlock = 2.5 * MILLISECONDS_A_SECOND
    const remainTime = timePerBlock * block

    setFuture((prev) => new Date().getTime() + remainTime)
    setIsFetched(true)
  }

  // const time = getRemainTime(remainBlock)
  //
  useEffect(() => {
    getRemainTime(remainBlock)
  }, [])

  return (
    <AnimatePresence>
      <ProgressSlotWrapper
        variants={{
          default: {},
          hover: {
            scale: 1.05,
            cursor: 'pointer',
            transition: { duration: 0.2 }
          }
        }}
        initial='default'
        whileHover='hover'
      >
        <BackgroundBox>
          <img src={img} alt='' />
        </BackgroundBox>

        <ContentBox>
          <SlotItemTextWrapper>
            {img === ProgressImg.src && (
              <TitleUnit
                exit={{
                  opacity: 0,
                  transition: {
                    duration: 0.2,
                    type: 'spring',
                    damping: 70,
                    stiffness: 500
                  }
                }}
              >
                {remainBlock?.toLocaleString()} Block
              </TitleUnit>
            )}
            {isFetched && (
              <Countdown
                ref={ref}
                date={future}
                renderer={Renderer}
                onComplete={() => setImg(EssenceStoneImage.src)}
              />
            )}
          </SlotItemTextWrapper>
        </ContentBox>
      </ProgressSlotWrapper>
    </AnimatePresence>
  )
}

export default Timer
