import { Button } from '@ow-develop/ow-design-system'
import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AnimateShow } from '~/common/animate-show/index'
import { StoryWrapper } from '~/styles/global-style'

export default {
  title: 'common/Animate Show',
  component: AnimateShow
} as ComponentMeta<typeof AnimateShow>

const Template: ComponentStory<typeof AnimateShow> = (args) => (
  <StoryWrapper>
    <AnimateShow {...args}>
      <Button>CTA</Button>
    </AnimateShow>
  </StoryWrapper>
)

export const Default = Template.bind({})
