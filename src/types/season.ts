export interface RankUpMonsterList {
  monsterId: number
  amount: number
  isShadow: boolean
}

export interface RankUpMonster {
  key: number
  tokenId: number
  title: string
  isShadow: boolean
}

export interface Ranking {
  order: number
  questOriginalScore: number
  activityOriginalScore: number
  collectionOriginalScore: number
  questConvertedScore: number
  activityConvertedScore: number
  collectionConvertedScore: number
  totalConvertedScore: number
  name: string
  address: string
  profileImg: string
  profileImgCf: string
}
