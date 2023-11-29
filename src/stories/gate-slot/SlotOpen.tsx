import React, { useState } from 'react'
import styled from 'styled-components'
import { motion } from 'framer-motion'
import {
  Background,
  ContentBox,
  GateSlotWrapper,
  ReadySlotWrapper
} from './GateSlot.styled'
import ReadyImg from '~/assets/image/dungeon/gateslot_ready.webp'
import ProgressImg from '~/assets/image/dungeon/gateslot_progress.webp'
import { Button } from '@ow-develop/ow-design-system'

type Direction = 'left' | 'right' | 'up' | 'down'

interface ReadySlotProps {
  setActive: (arg: number) => void
  active: number
  index: number
}

const data = {
  1: ReadyImg.src,
  2: ReadyImg.src,
  3: ProgressImg.src,
  4: ProgressImg.src
}

const ReadySlot = ({ setActive, index, active }: ReadySlotProps) => {
  return (
    <ReadySlotWrapper
      style={{ flex: active === index ? '8' : '1' }}
      layout
      layoutId={'ready-slot' + index}
      onClick={() => setActive(index)}
    >
      <Background
        layout
        layoutId={'ready-slot-background' + index}
        src={data[index]}
        alt={''}
      />

      {(!active || active === index) && (
        <ContentBox
          initial={{ opacity: 0 }}
          animate={{
            opacity: 1
          }}
          transition={{ ease: 'easeOut', duration: 0.3, delay: 0.2 }}
        >
          <Button width='fill' size='sm'>
            Gate Enter
          </Button>
        </ContentBox>
      )}
    </ReadySlotWrapper>
  )
}

const ProgressSlot = () => {
  return <></>
}

const SlotOpen = () => {
  const [active, setActive] = useState<number>(null)

  return (
    <GateSlotWrapper>
      <ReadySlot active={active} setActive={setActive} index={1} />
      <ReadySlot active={active} setActive={setActive} index={2} />
      <ReadySlot active={active} setActive={setActive} index={3} />
      <ReadySlot active={active} setActive={setActive} index={4} />

      {/*<ProgressSlot />*/}

      {/*<DisabledSlot status={'disabled_s'} />*/}
    </GateSlotWrapper>
  )
}

export default SlotOpen

const Wrapper = styled(motion.div)`
  display: flex;
  width: 100%;
  gap: 10px;
`

const Item = styled(motion.div)`
  > img {
    width: 100%;
  }
`

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140
    }
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1
    }
  }
}

export const slideIn = (
  direction: Direction,
  type: any,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === 'left' ? '-100%' : direction === 'right' ? '100%' : 0,
    y: direction === 'up' ? '100%' : direction === 'down' ? '100%' : 0
  },
  show: {
    x: 0,
    y: 0,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut'
    }
  }
})

export const textVariant = (delay: number) => ({
  hidden: {
    y: 50,
    opacity: 0
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'spring',
      duration: 1.25,
      delay
    }
  }
})

export const textContainer = {
  hidden: {
    opacity: 0
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 }
  })
}

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn'
    }
  }
}
