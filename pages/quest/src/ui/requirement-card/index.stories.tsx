import { ComponentMeta, ComponentStory } from '@storybook/react'

import RequirementCard from './index'

import DummyImage from '~/assets/image/rank/rank_a.webp'

export default {
  title: 'quest/Requirement card',
  component: RequirementCard,
  argTypes: {
    title: {
      defaultValue: 'Card Title',
      control: {
        type: 'text'
      }
    },
    actionStatus: {
      defaultValue: 'disqualified',
      control: {
        type: 'radio',
        options: ['disqualified', 'qualified', 'select', 'complete']
      }
    },
    preceding: {
      table: {
        disable: true
      }
    },
    defaultImgUrl: {
      control: {
        type: 'file'
      }
    }
  }
} as ComponentMeta<typeof RequirementCard>

const Template: ComponentStory<typeof RequirementCard> = (args) => (
  <RequirementCard {...args} />
)

export const Preceding = Template.bind({})
Preceding.args = {
  preceding: true,
  defaultImgUrl: DummyImage.toString()
}

export const Quest = Template.bind({})
Quest.args = {
  preceding: false
}
