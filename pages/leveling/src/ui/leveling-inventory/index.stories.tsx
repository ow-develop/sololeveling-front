import { ComponentMeta, ComponentStory } from '@storybook/react'
import { useState } from 'react'

import { SelectInventoryItem } from './context'
import { monsterList } from './mockup'

import LevelingInventory from './index'

export default {
  title: 'leveling/System inventory',
  component: LevelingInventory
} as ComponentMeta<typeof LevelingInventory>

export const Default: ComponentStory<typeof LevelingInventory.Item> = (
  args
) => {
  const [selectItems, setSelectItems] = useState<SelectInventoryItem[]>([])
  return (
    <LevelingInventory
      selectItems={selectItems}
      setSelectItems={setSelectItems}
      multiple={true}
    >
      <LevelingInventory.Item {...args} />
    </LevelingInventory>
  )
}

Default.argTypes = {
  imgUrl: {
    defaultValue: monsterList[0].imgUrlCf,
    control: { type: 'file' }
  },
  amount: {
    defaultValue: monsterList[0].amount,
    control: { type: 'number' }
  },
  title: {
    defaultValue: monsterList[0].title,
    control: { type: 'text' }
  },
  subTitle: {
    defaultValue: 'Monster',
    control: { type: 'text' }
  },
  insufficient: {
    defaultValue: false,
    control: { type: 'boolean' }
  },
  disabled: {
    defaultValue: false,
    control: { type: 'boolean' }
  }
}

export const Insufficient: ComponentStory<typeof LevelingInventory> = ({
  column,
  multiple
}) => {
  const [selectItems, setSelectItems] = useState<SelectInventoryItem[]>([])

  return (
    <LevelingInventory
      column={column}
      multiple={multiple}
      selectItems={selectItems}
      setSelectItems={setSelectItems}
    >
      {monsterList.map(({ imgUrl, imgUrlCf, title, amount, rank }, idx) => (
        <LevelingInventory.Item
          key={idx}
          idx={1}
          imgUrl={imgUrlCf || imgUrl}
          title={title}
          subTitle='Monster'
          amount={amount}
          insufficient={amount < 3}
        />
      ))}
    </LevelingInventory>
  )
}

Insufficient.argTypes = {
  column: {
    defaultValue: 2,
    control: { type: 'number' }
  },
  multiple: {
    defaultValue: false,
    control: { type: 'boolean' }
  }
}
