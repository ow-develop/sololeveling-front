import {
  HunterCollectionType,
  HunterFilterItem,
  HunterSortType,
  HunterSortViewType
} from '~/types/hunter'

export const HUNTER_FILTER_LIST: HunterFilterItem[] = [
  { name: 'Shadow Monarch', value: HunterCollectionType.ShadowMonarch },
  { name: 'Legendary Scene', value: HunterCollectionType.LegendaryScene },
  { name: 'TOP 100', value: HunterCollectionType.Top100 },
  { name: 'Season Score', value: HunterCollectionType.SeasonScore },
  { name: 'Shadow Army', value: HunterCollectionType.ShadowArmy },
  { name: 'Monster', value: HunterCollectionType.Monster },
  { name: 'Season Pack', value: HunterCollectionType.SeasonPack },
  { name: 'Essence Stone', value: HunterCollectionType.EssenceStone },
  { name: 'Gate Key', value: HunterCollectionType.GateKey },
  { name: 'Hunter Rank', value: HunterCollectionType.HunterRank }
]
export const HUNTER_SORT_LIST = [
  { value: HunterSortType.Rank, name: HunterSortViewType.RankOrder },
  {
    value: HunterSortType.Collection,
    name: HunterSortViewType.CollectionOrder
  },
  { value: HunterSortType.Recent, name: HunterSortViewType.RecentOrder }
]
