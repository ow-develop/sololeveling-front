import CardAImage from '~/assets/image/card/card_a.webp'
import CardBImage from '~/assets/image/card/card_b.webp'
import CardCImage from '~/assets/image/card/card_c.webp'
import CardDImage from '~/assets/image/card/card_d.webp'
import CardEImage from '~/assets/image/card/card_e.webp'
import CardSImage from '~/assets/image/card/card_s.webp'
import CardSAImage from '~/assets/image/card/card_sa.webp'
import CardSBImage from '~/assets/image/card/card_sb.webp'
import CardSSImage from '~/assets/image/card/card_ss.webp'
import RankAImage from '~/assets/image/rank/rank_a.webp'
import RankBImage from '~/assets/image/rank/rank_b.webp'
import RankCImage from '~/assets/image/rank/rank_c.webp'
import RankDImage from '~/assets/image/rank/rank_d.webp'
import RankEImage from '~/assets/image/rank/rank_e.webp'
import RankSImage from '~/assets/image/rank/rank_s.webp'

export const cardImgSet = {
  E: CardEImage.src,
  D: CardDImage.src,
  C: CardCImage.src,
  B: CardBImage.src,
  A: CardAImage.src,
  S: CardSImage.src
}

export const reseultCardImgSet = {
  'E-Rank': CardDImage.src,
  'D-Rank': CardCImage.src,
  'C-Rank': CardBImage.src,
  'B-Rank': CardAImage.src,
  'A-Rank': CardSImage.src,
  'S-Rank': CardSBImage.src,
  'Shadow-B': CardSAImage.src,
  'Shadow-A': CardSSImage.src
}

export const reseultTitleSet = {
  'E-Rank': 'D-Rank Monster',
  'D-Rank': 'C-Rank Monster',
  'C-Rank': 'B-Rank Monster',
  'B-Rank': 'A-Rank Monster',
  'A-Rank': 'S-Rank Monster',
  'S-Rank': 'B-Rank Shadow Army',
  'Shadow-B': 'A-Rank Shadow Army',
  'Shadow-A': 'S-Rank Shadow Army'
}

export const monsterImgSet = {
  'E-Rank': CardEImage.src,
  'D-Rank': CardDImage.src,
  'C-Rank': CardCImage.src,
  'B-Rank': CardBImage.src,
  'A-Rank': CardAImage.src,
  'S-Rank': CardSImage.src,
  'Shadow-B': CardSBImage.src,
  'Shadow-A': CardSAImage.src,
  'Shadow-S': CardSSImage.src
}

export const rankImgSet = {
  E: RankDImage.src,
  D: RankCImage.src,
  C: RankBImage.src,
  B: RankAImage.src,
  A: RankSImage.src,
  S: RankSImage.src
}

export const currentImgUrlSet = {
  none: RankEImage.src,
  E: RankEImage.src,
  D: RankDImage.src,
  C: RankCImage.src,
  B: RankBImage.src,
  A: RankAImage.src,
  S: RankSImage.src
}

export const previewImgUrlSet = {
  none: '',
  E: RankDImage.src,
  D: RankCImage.src,
  C: RankBImage.src,
  B: RankAImage.src,
  A: RankSImage.src,
  S: ''
}

export const rankTitleSet = {
  none: 'E-Rank Hunter',
  E: 'D-Rank Hunter',
  D: 'C-Rank Hunter',
  C: 'B-Rank Hunter',
  B: 'A-Rank Hunter',
  A: 'S-Rank Hunter',
  S: 'S-Rank Hunter'
}
