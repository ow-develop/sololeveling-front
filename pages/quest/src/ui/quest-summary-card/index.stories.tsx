import { ComponentMeta, ComponentStory } from '@storybook/react'

import QuestSummaryCard from './index'

export default {
  title: 'quest/Quest summary card',
  component: QuestSummaryCard,
  argTypes: {
    questType: {
      defaultValue: 'Dungeon',
      control: {
        type: 'text'
      }
    },
    title: {
      defaultValue: 'Quest Title',
      control: {
        type: 'text'
      }
    },
    completed: {
      table: {
        disable: true
      }
    }
  }
} as ComponentMeta<typeof QuestSummaryCard>

const Template: ComponentStory<typeof QuestSummaryCard> = (args) => (
  <QuestSummaryCard
    {...args}
    reward={
      <>
        <QuestSummaryCard.Reward rewardType='gate_key' />
        <QuestSummaryCard.Reward rewardType='quest_score' />
      </>
    }
  />
)

export const Default = Template.bind({})
Default.args = {
  completed: false
}

export const Completed = Template.bind({})
Completed.args = {
  completed: true
}
