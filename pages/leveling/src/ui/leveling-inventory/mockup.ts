import MonsterDemoImage from '~/assets/image/rank/rank_a.webp'
import { MonsterCollection } from '~/types/collection'

export const monsterList: MonsterCollection[] = [
  {
    tokenId: 1,
    title: 'Veru',
    rank: 'S',
    imgUrl: MonsterDemoImage.toString(),
    imgUrlCf: MonsterDemoImage.toString(),
    score: 10,
    isShadow: false,
    amount: 1,
    descriptionKR: null,
    descriptionEN: null,
    descriptionJP: null
  }
]
