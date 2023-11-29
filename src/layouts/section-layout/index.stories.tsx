import { ComponentMeta, ComponentStory } from '@storybook/react'

import SectionLayout from '~/layouts/section-layout/index'

export default {
  title: 'layout/Section',
  component: SectionLayout
} as ComponentMeta<typeof SectionLayout>

export const Default: ComponentStory<typeof SectionLayout> = () => {
  return (
    <SectionLayout
      title='Dungeon'
      description='Generate gate and clear within the time limit to earn soul stones.'
    >
      <SectionLayout.Content title='Gate Slot'>
        <div>Content</div>
      </SectionLayout.Content>

      <SectionLayout.Content title='Gate Slot'>
        <div>Content</div>
      </SectionLayout.Content>

      <SectionLayout.Content title='Gate Slot'>
        <div>Content</div>
      </SectionLayout.Content>

      <SectionLayout.Content title='Gate Slot'>
        <div>Content</div>
      </SectionLayout.Content>

      <SectionLayout.Content title='Gate Slot'>
        <div>Content</div>
      </SectionLayout.Content>
    </SectionLayout>
  )
}
