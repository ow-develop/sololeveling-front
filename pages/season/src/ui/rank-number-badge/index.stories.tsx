import { ComponentMeta, ComponentStory } from '@storybook/react'

import { RankNumberBadge } from './index'

import { StoryWrapper } from '~/styles/global-style'

export default {
  title: 'season/Rank Number Badge',
  component: RankNumberBadge
} as ComponentMeta<typeof RankNumberBadge>

const Template: ComponentStory<typeof RankNumberBadge> = (args) => {
  return (
    <StoryWrapper>
      <RankNumberBadge {...args} />
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
