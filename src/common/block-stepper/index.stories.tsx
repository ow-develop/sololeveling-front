import { Button } from '@ow-develop/ow-design-system'
import { ComponentMeta } from '@storybook/react'
import { useState } from 'react'
import styled from 'styled-components'

import BlockStepper from '~/common/block-stepper/index'

export default {
  title: 'Common/Block Stepper',
  component: BlockStepper
} as ComponentMeta<typeof BlockStepper>

const list = [
  {
    header: 'Approve collection',
    description:
      'Each of the collections from your wallet needs to be approved only once.'
  },
  {
    header: 'Confirm clear',
    description: 'You’ll be asked to review and confirm from your wallet.'
  }
]

const StoryWrapper = styled.div`
  width: 400px;
  height: auto;
`

export const Default = () => {
  const [step, setStep] = useState(1)

  return (
    <StoryWrapper>
      <BlockStepper activeStep={step}>
        {list.map(({ header, description }, index) => {
          return (
            <BlockStepper.Item
              key={index}
              step={index + 1}
              header={header}
              description={description}
            >
              <Button onClick={() => setStep(2)}>Continue</Button>
            </BlockStepper.Item>
          )
        })}
      </BlockStepper>
    </StoryWrapper>
  )
}
