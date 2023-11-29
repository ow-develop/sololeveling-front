import { Token } from '@ow-develop/ow-design-system'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import { ViewMoreBtnDirection } from '~/common/view-more/type'

export const ViewMoreWrapper = styled.div<{ extend: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${({ extend }) => (extend ? '24px' : '0px')};
  width: 100%;
`

export const ContentField = styled(motion.div).attrs(() => ({
  layout: true,
  initial: 'default',
  animate: 'expand',
  exit: 'default',
  transition: {
    duration: 0.3,
    opacity: {
      duration: 0.7
    }
  },
  variants: {
    default: {
      height: 0,
      overflow: 'hidden',
      opacity: 0
    },
    expand: {
      height: 'fit-content',
      overflow: 'initial',
      opacity: 1
    }
  }
}))`
  width: 100%;
`

export const ButtonField = styled.div<{ btnDirection: ViewMoreBtnDirection }>`
  display: flex;

  justify-content: ${({ btnDirection }) =>
    btnDirection === 'start'
      ? 'flex-start'
      : btnDirection === 'end'
      ? 'flex-end'
      : 'center'};
  gap: 8px;
  width: 100%;
`

export const TextUnit = styled.div`
  ${Token.typography.body_strong}
  color: var(--text-weak);
  cursor: pointer;
`

export const IconBox = styled.div<{ isOpen: boolean }>`
  transition: transform 300ms ease;
  transform: ${({ isOpen }) => (isOpen ? 'rotateX(180deg)' : '')};
  cursor: pointer;
`
