import { Token } from '@ow-develop/ow-design-system'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

import { ZIndex } from '~/constants/style'

export const OpenEffectWrapper = styled(motion.div)`
  overflow: hidden;
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  max-height: 100vh;
  z-index: ${ZIndex.MODAL};
  background: #00050d;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const VideoEffectBox = styled(motion.div)`
  position: absolute;
  left: 50%;
  top: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  transform: translate(-50%, -50%);

  video {
    position: relative;
    width: 100%;
    max-width: 769px;
    min-width: 540px;
  }
`

export const CardField = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  margin-top: 79px;
  display: flex;
  justify-content: center;
  width: 50vw;
  max-width: 769px;
`

export const CardBox = styled(motion.div)`
  img {
    width: 100%;
    max-width: 370px;
    min-width: 250px;
  }
`

export const CardContentField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`

export const ContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 100%;
  color: #fff;
`

export const ContentTextBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`

export const ContentTypeText = styled.p`
  ${Token.typography.body_strong};
  color: var(--white-60);
`

export const ContentTitleText = styled.div`
  ${Token.typography.title_strong};
  color: var(--text-on-accent);
`

export const SubtitleUnit = styled.div`
  color: var(--text-weak);
  ${Token.typography.body_strong};
`

export const TitleUnit = styled.div<{ disabled: boolean }>`
  color: var(--text-strong);
  ${Token.typography.subtitle_strong};

  ${({ disabled }) =>
    disabled &&
    css`
      color: var(--text-weak);
    `}
`

export const ButtonBox = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  width: 100%;

  > button {
    flex: 1;
    max-width: 160px;
  }
`
