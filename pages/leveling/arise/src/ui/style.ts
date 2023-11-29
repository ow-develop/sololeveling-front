import styled from 'styled-components'
import { motion } from 'framer-motion'
import { Token } from '@ow-develop/ow-design-system'
import { Breakpoint } from '~/constants/style'

export const AriseEffectBox = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: translate(-50%, -50%);

  video {
    width: 100%;
    max-width: 769px;
    min-width: 540px;
  }
`

export const AriseVideoBox = styled.div`
  width: 100%;
  max-width: 460px;
  margin: 0 auto;

  video {
    width: 100%;
  }

  ${({ theme }) => theme.breakpoints.up(Breakpoint.L)} {
    min-height: 463px;
  }
`

export const AriseEffectField = styled.div`
  position: absolute;
  left: 50%;
  top: 52.5%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 24px;
  width: 100%;
`

export const AriseCardBox = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 50vw;
  max-width: 380px;
  min-width: 250px;

  img {
    width: 100%;
  }
`

export const AriseCount = styled.div`
  ${Token.typography.title_strong};
  color: var(--text-on-accent);
  text-align: center;
`

export const AriseTitleFields = styled.div`
  display: flex;
  flex-direction: column;
`

export const AriseTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  justify-content: center;
  align-items: center;
  text-align: center;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    gap: 8px;
  }
`

export const AriseTitleUnit = styled.div`
  font-family: 'Cormorant', serif;
  font-size: 40px;
  font-style: normal;
  font-weight: 700;
  line-height: 28px;
  text-transform: uppercase;
  background: linear-gradient(
    180deg,
    #e2e8f0 0%,
    rgba(226, 232, 240, 0.2) 100%
  );
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    font-size: 24px;
    line-height: 20px;
  }
`

export const AriseDescriptionUnit = styled.div`
  ${Token.typography.subtitle};
  color: var(--white-60);

  ${({ theme }) => theme.breakpoints.down(Breakpoint.M)} {
    ${Token.typography.body_strong};
  }
`
