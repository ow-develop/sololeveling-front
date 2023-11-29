import { ComponentMeta, ComponentStory } from '@storybook/react'

import { NicknameBox } from './index'

export default {
  title: 'base/Input',
  component: NicknameBox,
  argTypes: {
    title: {
      defaultValue: 'Label',
      control: {
        type: 'text'
      }
    },
    max: {
      defaultValue: 50,
      control: {
        type: 'range',
        min: 1,
        max: 100
      }
    },
    helperText: {
      defaultValue: 'Helper Text',
      control: {
        type: 'text'
      }
    },
    required: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    disabled: {
      defaultValue: false,
      control: {
        type: 'boolean'
      }
    },
    defaultValue: {
      defaultValue: '',
      control: {
        type: 'text'
      }
    },
    placeholder: {
      defaultValue: '',
      control: {
        type: 'text'
      }
    },
    width: {
      control: {
        type: 'inline-radio',
        options: ['hug', 'fill', 'fixed']
      }
    },
    fixedWidth: {
      control: {
        type: 'range',
        min: 50,
        max: 500
      }
    }
  }
} as ComponentMeta<typeof NicknameBox>

export const Default: ComponentStory<typeof NicknameBox> = (args) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
      }}
    >
      <NicknameBox {...args} />
      <input type='submit' />
    </form>
  )
}
