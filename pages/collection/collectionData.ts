import { Collection } from '~/types/collection'

export interface CollectionTabItem {
  name: string
  value: Collection
}
export const COLLECTION_TYPE_LIST: CollectionTabItem[] = [
  { name: 'Shadow Monarch', value: Collection.ShadowMonarch },
  { name: 'Shadow Army', value: Collection.ShadowArmy },
  { name: 'Monster', value: Collection.Monster },
  { name: 'Legendary Scene', value: Collection.LegendaryScene },
  { name: 'Season Pack', value: Collection.SeasonPack }
]
