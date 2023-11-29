import { ComponentMeta, ComponentStory } from '@storybook/react'

import Dashboard from '.'

export default {
  title: 'common/Dashboard',
  component: Dashboard,
  argTypes: {
    gap: {
      name: 'gap',
      defaultValue: {
        row: 8,
        column: 8
      },
      description: '대시보드의 행과 열 간격을 의미합니다.',
      control: { type: 'object' }
    }
  }
} as ComponentMeta<typeof Dashboard>

const Template: ComponentStory<typeof Dashboard> = (args) => {
  return (
    <Dashboard {...args}>
      {Array(9)
        .fill(1)
        .map((item) => {
          return <Dashboard.Item key={item}>{item}</Dashboard.Item>
        })}
    </Dashboard>
  )
}

export const Default = Template.bind({})
