import React, { useRef, useState } from 'react'
import { CountdownCircleTimer } from 'react-countdown-circle-timer'
import {
  CountWrapper,
  TimeBox,
  TimeWrapper
} from '~/stories/circle-count-down/CircleCountDown.styled'

interface RenderTimeProps {
  remainingTime: number
}

const RenderTime = ({ remainingTime }: RenderTimeProps) => {
  const currentTime = useRef(remainingTime)
  const prevTime = useRef<number | null>(null)
  const isNewTimeFirstTick = useRef(false)
  const [, setOneLastRerender] = useState(0)

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true
    prevTime.current = currentTime.current
    currentTime.current = remainingTime
  } else {
    isNewTimeFirstTick.current = false
  }

  const isTimeUp = isNewTimeFirstTick.current

  return (
    <TimeWrapper>
      <TimeBox>
        <div key={remainingTime} className={`time ${isTimeUp ? 'up' : ''}`}>
          {remainingTime}
        </div>
        {prevTime.current !== null && (
          <div
            key={prevTime.current}
            className={`time ${!isTimeUp ? 'down' : ''}`}
          >
            {prevTime.current}
          </div>
        )}
      </TimeBox>
    </TimeWrapper>
  )
}

interface CircleCountDownProps {
  duration: number
  colors: string
  size: number
}

const CircleCountDown = ({ duration, colors, size }: CircleCountDownProps) => {
  return (
    <CountWrapper>
      <CountdownCircleTimer
        isPlaying
        duration={duration}
        colors={`#${colors}`}
        size={size}
        onComplete={() => ({ shouldRepeat: true, delay: 1 })}
      >
        {RenderTime}
      </CountdownCircleTimer>
    </CountWrapper>
  )
}

export default CircleCountDown
