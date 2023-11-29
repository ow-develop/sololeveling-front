import { ComponentMeta, ComponentStory } from '@storybook/react'

import { CommonLink } from '~/common/link/common-link/index'

export default {
  title: 'common/Link',
  component: CommonLink,
  argTypes: {
    color: {
      control: {
        type: 'select',
        options: [
          'status-info-default',
          'status-info-strong',
          'status-danger-default'
        ]
      }
    }
  }
} as ComponentMeta<typeof CommonLink>

const Template: ComponentStory<typeof CommonLink> = (args) => {
  return <CommonLink {...args}>Go to Link</CommonLink>
}

export const Default = Template.bind({})
Default.args = {
  href: '/link'
}
