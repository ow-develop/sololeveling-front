import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Breakpoint, ZIndex } from '~/constants/style'
import { noneDraggable } from '~/styles/mixin'
import { Token } from '@ow-develop/ow-design-system'

export const LoadingWrapper = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  z-index: ${ZIndex.MODAL};
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1a1a1a;
  ${noneDraggable};
`

export const BackgroundUnit = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  z-index: -1;
  width: 720px;
  height: 720px;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    50% 50% at 50% 50%,
    #0a071a 23.44%,
    rgba(45, 28, 97, 0) 100%
  );
`

export const ContentField = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  gap: 24px;
  max-width: 720px;
  max-height: 720px;
`

export const ImgBox = styled(motion.div)`
  max-width: 500px;
  width: 100%;
`

export const HeadingBox = styled.div``

export const TextBox = styled.div`
  position: relative;
  top: -100px;
  text-align: center;
`

export const TitleUnit = styled.div`
  margin: 0 0 24px 0;
  background: linear-gradient(
    180deg,
    #7159fc 37.5%,
    rgba(255, 255, 255, 0.6) 87.5%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  ${Token.typography.title_strong}
`

export const TipUnit = styled.p`
  max-width: 496px;
  text-align: center;
  color: #fff;
  ${Token.typography.subtitle}

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    max-width: 264px;
  }
`
