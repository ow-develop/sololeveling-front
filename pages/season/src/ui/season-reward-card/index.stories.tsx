import { ComponentMeta, ComponentStory } from '@storybook/react'
import styled from 'styled-components'

import { SeasonRewardCard } from './index'

export default {
  title: 'season/Season Reward Card',
  component: SeasonRewardCard,
  args: {
    title: 'Shadow Monarch',
    description: `This is a collection you can get if you achieve excellent grades within 100th place in one season of <Solo Leveling: Unlimited>. This collection will be issued with an additional 100 items per season.`
  }
} as ComponentMeta<typeof SeasonRewardCard>

const StoryWrapper = styled.div`
  margin: 20px auto;
  width: 340px;
  height: 600px;
`

const Template: ComponentStory<typeof SeasonRewardCard> = (args) => {
  return (
    <StoryWrapper>
      <SeasonRewardCard {...args} />
    </StoryWrapper>
  )
}

export const Default = Template.bind({})
Default.args = {
  type: 'text',
  text: 'Incomplete'
}

export const Button = Template.bind({})
Button.args = {
  type: 'button',
  qualified: true
}

export const QualifiedText = Template.bind({})
QualifiedText.args = {
  type: 'text',
  text: 'Will be airdropped',
  qualified: true
}
