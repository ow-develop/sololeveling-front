import { CheckGrayIcon } from '@ow-develop/ow-icons/react/material'
import { AnimatePresence } from 'framer-motion'
import { ReactNode } from 'react'

import {
  BlockStepperItemContent,
  BlockStepperItemWrapper,
  ContentBox,
  DescriptionUnit,
  HeaderBox
} from './style'
import { useBlockStepperContext } from '../context'

import SvgIcon from '~/common/svg-icon'

export interface BlockStepperItemProps {
  step: number
  header?: string
  description?: string
  children?: string | ReactNode
}

const BlockStepperItem = ({
  step,
  header,
  description,
  children
}: BlockStepperItemProps) => {
  const { activeStep } = useBlockStepperContext()
  const isStepped = activeStep === step

  return (
    <BlockStepperItemWrapper>
      <HeaderBox complete={activeStep > step}>
        {header}
        {activeStep > step && (
          <SvgIcon icon={<CheckGrayIcon />} size={20} color='icon-weak' />
        )}
      </HeaderBox>

      <AnimatePresence initial={false}>
        {isStepped && (
          <ContentBox>
            <DescriptionUnit>{description}</DescriptionUnit>
            <BlockStepperItemContent>{children}</BlockStepperItemContent>
          </ContentBox>
        )}
      </AnimatePresence>
    </BlockStepperItemWrapper>
  )
}

export default BlockStepperItem
