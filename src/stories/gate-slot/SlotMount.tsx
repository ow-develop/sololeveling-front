import { motion } from 'framer-motion'
import styled from 'styled-components'
import {
  BackgroundBox,
  ContentBox,
  GateSlotItemWrapper,
  GateSlotWrapper,
  ReadySlotWrapper
} from './GateSlot.styled'
import Image from 'next/image'
import ReadyImg from '~/assets/image/dungeon/gateslot_ready.webp'
import { Button } from '@ow-develop/ow-design-system'

import React from 'react'

const SlotMount = () => {
  return (
    <Div>
      <GateSlotWrapper
        variants={staggerContainer as any}
        initial='hidden'
        whileInView='show'
      >
        {[1, 2, 3, 4].map((item, index) => {
          return (
            <Item
              key={item + 'anime'}
              variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
            >
              <GateSlotItemWrapper>
                <ReadySlotWrapper>
                  <BackgroundBox key='ready-slot-background'>
                    <Image
                      src={ReadyImg.src}
                      alt=''
                      layout='fill'
                      objectFit='cover'
                    />
                  </BackgroundBox>

                  <ContentBox>
                    <Button width='fill' size='sm'>
                      Gate Enter
                    </Button>
                  </ContentBox>
                </ReadySlotWrapper>
              </GateSlotItemWrapper>
            </Item>
          )
        })}
      </GateSlotWrapper>
    </Div>
  )
}

export default SlotMount
type Direction = 'left' | 'right' | 'up' | 'down'

const Div = styled.div`
  display: flex;
  width: 100%;
`

const Item = styled(motion.div)`
  > img {
    width: 100%;
  }
`

export const staggerContainer = (staggerChildren: any, delayChildren: any) => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren,
      delayChildren
    }
  }
})

export const fadeIn = (
  direction: Direction,
  type: any,
  delay: number,
  duration: number
) => ({
  hidden: {
    x: direction === 'left' ? 100 : direction === 'right' ? -100 : 0,
    y: direction === 'up' ? 100 : direction === 'down' ? -100 : 0,
    opacity: 0
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      type,
      delay,
      duration,
      ease: 'easeOut'
    }
  }
})
