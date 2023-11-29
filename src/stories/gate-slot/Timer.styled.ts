import styled from 'styled-components'
import { Token } from '@ow-develop/ow-design-system'
import { motion } from 'framer-motion'
import { SlotWrapper } from '~/stories/gate-slot/GateSlot.styled'
import { Breakpoint, ZIndex } from '~/constants/style'

const DELAY = 0.2
export const ProgressSlotWrapper = styled(SlotWrapper)`
  width: 288px;
`

export const BackgroundBox = styled(motion.div).attrs(() => ({
  exit: { background: 'none' }
}))<{ disabled?: boolean }>`
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 0;
  z-index: ${ZIndex.BACKGROUND};
  width: 100%;
  height: 100%;
  background: #2b2b2b;
  border-radius: 8px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    border-radius: 8px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 46.88%, #000 100%);
  }
`

export const BackgroundUnit = styled(motion.img).attrs(() => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { delay: DELAY }
}))`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
`

export const ContentField = styled(motion.div)`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    height: 100%;
  }
`

export const SlotItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  height: 100%;
`

export const TitleUnit = styled(motion.p)`
  color: var(--text-on-accent);
  ${Token.typography.headline_strong};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.title_strong};
  }
`

export const TextUnit = styled.p`
  padding: 0 22%;
  word-break: keep-all;
  text-align: center;
  color: var(--text-on-accent);
  ${Token.typography.button_l};
`

export const SubTextUnit = styled.p`
  color: var(--white-70);
  ${Token.typography.subtitle};

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.body_strong};
  }
`

export const ContentBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 24px;
  width: 100%;
`

export const FlipBoxWrapper = styled.div`
  box-shadow: 0px 10px 10px -10px black;
  border-bottom-left-radius: 6px;
  border-bottom-right-radius: 6px;
`

export const FlipField = styled.div`
  display: block;
  position: relative;
  width: 40px;
  height: 40px;
  padding: 3px;
  background-color: #12161c;
  border-radius: 6px;
  perspective: 300px;
  perspective-origin: 50% 50%;
`

export const FlipBottom = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  padding: 8px 0;
  background-color: #1d2127;

  > p {
    ${Token.typography.body_stronger};
    color: #fff;
  }
`

export const MotionFlex = styled(motion.div)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: absolute;
  left: 0px;
  width: 100%;
  height: 50%;
  overflow: hidden;
  top: 0px;
  -webkit-align-items: flex-end;
  align-items: flex-end;
  transform-origin: 50% 100%;
  -webkit-transform: rotateX(0deg);
  -moz-transform: rotateX(0deg);
  -ms-transform: rotateX(0deg);
  transform: rotateX(0deg);
  background-color: #12161c;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: 1px solid #0e1116;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`

export const MotionBottomFlex = styled(motion.div)`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  position: absolute;
  left: 0px;
  width: 100%;
  height: 50%;
  overflow: hidden;
  top: 50%;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  transform-origin: 50% 0%;
  -ms-transform: rotateX(180deg);
  transform: rotateX(180deg);
  background-color: #181c22;
  border-top: 1px solid #0e1116;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transform-style: preserve-3d;
`

export const TimerText = styled(motion.div)<{ up?: boolean }>`
  ${Token.typography.title_strong};
  color: #fff;
  transform: translateY(${({ up }) => (up ? '50%' : '-50%')});
`

export const StaticCardUpper = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  overflow: hidden;
  -webkit-align-items: flex-end;
  align-items: flex-end;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
  border-bottom: 1px solid #0e1116;
`

export const StaticCardLower = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  position: relative;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  -webkit-justify-content: center;
  justify-content: center;
  width: 100%;
  height: 50%;
  overflow: hidden;
  -webkit-align-items: flex-start;
  align-items: flex-start;
  background-color: #181c22;
  border-top: 1px solid #0e1116;
`

export const timerFadeIn = {
  variants: {
    default: {},
    hover: {
      scale: 1.05,
      cursor: 'pointer',
      transition: { duration: 0.2 }
    }
  },
  initial: 'default',
  whileHover: 'hover'
}
