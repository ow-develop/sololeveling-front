import { ComponentMeta, ComponentStory } from '@storybook/react'

import { AccountProfile } from './index'

import { StoryWrapper } from '~/styles/global-style'

export default {
  title: 'common/Account Profile',
  component: AccountProfile
} as ComponentMeta<typeof AccountProfile>

const Template: ComponentStory<typeof AccountProfile> = (args) => {
  return (
    <StoryWrapper>
      <AccountProfile {...args} />
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
