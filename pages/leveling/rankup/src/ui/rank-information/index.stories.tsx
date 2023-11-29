import { ComponentMeta, ComponentStory } from '@storybook/react'
import React from 'react'

import { rankTitleSet } from '../../features/rank-information/data'

import RankInformation from './index'

import RankAImage from '~/assets/image/rank/rank_a.webp'
import RankBImage from '~/assets/image/rank/rank_b.webp'
import RankCImage from '~/assets/image/rank/rank_c.webp'
import RankDImage from '~/assets/image/rank/rank_d.webp'
import RankSImage from '~/assets/image/rank/rank_s.webp'

const rankImgSet = {
  E: RankDImage.toString(),
  D: RankCImage.toString(),
  C: RankBImage.toString(),
  B: RankAImage.toString(),
  A: RankSImage.toString(),
  S: RankSImage.toString()
}

export default {
  title: 'rank up/Rank information',
  component: RankInformation,
  argTypes: {
    rank: {
      defaultValue: 'E',
      control: {
        type: 'radio',
        options: ['E', 'D', 'C', 'B', 'A', 'S']
      }
    }
  }
} as ComponentMeta<any>

export const Default: ComponentStory<typeof RankInformation> = ({
  rank
}: any) => {
  return (
    <RankInformation
      title={rankTitleSet[rank]}
      previewImgUrl={rankImgSet[rank]}
      disabled={false}
    />
  )
}
