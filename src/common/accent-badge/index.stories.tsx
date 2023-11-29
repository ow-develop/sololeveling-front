import { ComponentMeta, ComponentStory } from '@storybook/react'

import AccentBadge from '~/common/accent-badge/index'

export default {
  title: 'common/Accent badge',
  component: AccentBadge,
  argTypes: {
    children: {
      defaultValue: 'Badge',
      control: {
        type: 'text'
      }
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    }
  }
} as ComponentMeta<typeof AccentBadge>

const Template: ComponentStory<typeof AccentBadge> = (args) => (
  <AccentBadge {...args} />
)

export const Default = Template.bind({})
