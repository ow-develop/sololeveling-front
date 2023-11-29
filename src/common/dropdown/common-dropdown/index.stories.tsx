import { ComponentStory, ComponentMeta } from '@storybook/react'
import React from 'react'

import { CommonDropdown } from '.'

export default {
  title: 'Common/Dropdown',
  component: CommonDropdown
} as ComponentMeta<typeof CommonDropdown>

const Template: ComponentStory<typeof CommonDropdown> = (args) => (
  <CommonDropdown {...args} />
)

export const Default = Template.bind({})
Default.args = {
  width: '160px',
  trigger: 'Hunter',
  drops: [
    {
      text: 'Inventory'
    },
    {
      text: 'Quest'
    },
    {
      text: 'Rank Up'
    }
  ]
}
