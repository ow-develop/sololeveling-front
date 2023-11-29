import { HunterInventoryItemDto } from '~/api/dto/hunter'
import { HunterCollectionType } from '~/types/hunter'

export enum HunterCardBgType {
  Rare,
  Default
}
export function getHunterCardBgType(data: HunterInventoryItemDto) {
  const { collectionType } = data
  if (
    collectionType === HunterCollectionType.ShadowMonarch ||
    collectionType === HunterCollectionType.LegendaryScene ||
    collectionType === HunterCollectionType.ShadowArmy ||
    collectionType === HunterCollectionType.Top100
  ) {
    return HunterCardBgType.Rare
  } else if (
    collectionType === HunterCollectionType.Monster ||
    collectionType === HunterCollectionType.SeasonScore ||
    collectionType === HunterCollectionType.SeasonPack ||
    collectionType === HunterCollectionType.EssenceStone ||
    collectionType === HunterCollectionType.GateKey ||
    collectionType === HunterCollectionType.HunterRank
  ) {
    return HunterCardBgType.Default
  }
}
export const HUNTER_CARD_BG_SET = {
  [HunterCardBgType.Rare]: `
  background: linear-gradient(
      180deg,
      rgba(113, 89, 252, 0) 0%,
      rgba(113, 89, 252, 0.4) 100%
    ),
    rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px -2px rgba(26, 26, 26, 0.06),
    0px 2px 4px -2px rgba(26, 26, 26, 0.03),
    0px 0px 8px -2px rgba(26, 26, 26, 0.06);`,
  [HunterCardBgType.Default]: `
  background: linear-gradient(
      180deg,
      rgba(128, 138, 140, 0) 0%,
      rgba(128, 138, 140, 0.2) 100%
    ),
    rgba(255, 255, 255, 0.1);
  box-shadow: 0 4px 8px -2px rgba(26, 26, 26, 0.06),
    0px 2px 4px -2px rgba(26, 26, 26, 0.03),
    0px 0px 8px -2px rgba(26, 26, 26, 0.06);
  `
}
export const HUNTER_DETAIL_CARD_BG_SET = {
  [HunterCardBgType.Rare]: `
  background: linear-gradient(
      180deg,
      rgba(113, 89, 252, 0) 0%,
      rgba(113, 89, 252, 0.6) 100%
    ),
    #0d0d0d;
  box-shadow: 0 4px 8px -2px rgba(26, 26, 26, 0.1),
    0px 2px 4px -2px rgba(26, 26, 26, 0.06);
`,
  [HunterCardBgType.Default]: `
  background: linear-gradient(
      180deg,
      rgba(128, 138, 140, 0) 0%,
      rgba(128, 138, 140, 0.6) 100%
    ),
    #0d0d0d;
  box-shadow: 0 4px 8px -2px rgba(26, 26, 26, 0.1),
    0px 2px 4px -2px rgba(26, 26, 26, 0.06);`
}
