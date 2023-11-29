import { ComponentMeta, ComponentStory } from '@storybook/react'

import { MenuItem } from '.'

export default {
  title: 'common/Menu/item',
  component: MenuItem
} as ComponentMeta<typeof MenuItem>

const Template: ComponentStory<typeof MenuItem> = (args) => (
  <MenuItem {...args} />
)

export const Default = Template.bind({})
Default.args = {
  children: 'Home'
}

export const Active = Template.bind({})
Active.args = {
  children: 'Home'
}
