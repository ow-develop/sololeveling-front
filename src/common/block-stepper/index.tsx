import { ReactNode, useMemo } from 'react'

import BlockStepperItem from '~/common/block-stepper/block-stepper-item'
import BlockStepperContext from '~/common/block-stepper/context'
import { BlockStepperWrapper } from '~/common/block-stepper/style'

export interface Props {
  activeStep?: number
  children?: ReactNode
}

const BlockStepper = ({ activeStep = 0, children }: Props) => {
  const contextValue = useMemo(() => ({ activeStep }), [activeStep])

  return (
    <BlockStepperContext.Provider value={contextValue}>
      <BlockStepperWrapper>{children}</BlockStepperWrapper>
    </BlockStepperContext.Provider>
  )
}

export default Object.assign(BlockStepper, {
  Item: BlockStepperItem
})
