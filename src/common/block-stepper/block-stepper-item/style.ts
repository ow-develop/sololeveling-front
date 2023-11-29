import { Token } from '@ow-develop/ow-design-system'
import { motion } from 'framer-motion'
import styled, { css } from 'styled-components'

export const BlockStepperItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding: 16px;
  border: 1px solid var(--border-default);
  border-radius: 8px;
  gap: 8px;
  counter-increment: stepper;
`
export const HeaderBox = styled(motion.div)<{ complete: boolean }>`
  display: flex;
  align-items: center;
  gap: 8px;
  color: var(${({ complete }) => (complete ? '--text-weak' : '--text-strong')});
  transition: color 1s;
  ${Token.typography.body_stronger}

  &:before {
    content: 'STEP ' counter(stepper) ' ';
    display: inline-block;
    width: 48px;
    color: var(--text-weak);
  }
`

export const ContentBox = styled(motion.div).attrs(() => ({
  initial: 'collapsed',
  animate: 'open',
  exit: 'collapsed',
  variants: {
    open: { opacity: 1, height: 'auto' },
    collapsed: { opacity: 0, height: '0px' }
  },
  transition: { duration: 0.3 }
}))`
  overflow: hidden;
  width: 100%;
`

export const DescriptionUnit = styled.p`
  padding-left: 56px;
  transition: all 1s;
  color: var(--gray-700);
  ${Token.typography.body_strong}
`

export const BlockStepperItemContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-end;

  > button {
    margin-top: 16px;
  }
`
export const BlockStepperPaddingWrapper = styled.div<{
  position: 'top' | 'bottom' | 'left' | 'right'
  amount: number
}>`
  width: 100%;
  ${({ position, amount }) => css`
    padding-${position}: ${amount}px;
  `}
`
