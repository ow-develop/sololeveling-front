import Layout from '~/stories/Layout'
import { inventoryList } from '~/stories/inventory-list/dummyData'
import { TokenStandardType } from '~/constants/contracts'
import { SeasonType } from '~/api/dto/hunter'
import { seasonSet } from '~/constants/season'
import { getHunterCardBgType } from '../../../pages/hunter/style'
import { HunterInventoryCardBox } from '../../../pages/hunter/src/features/hunter-inventory-list/style'
import HunterInventoryCard from '~/stories/inventory-list/hunter-inventory-card'

export default {
  title: 'demo/Inventory'
}

export const Delay = () => {
  return (
    <Layout>
      <div style={{ display: 'flex', gap: '16px' }}>
        <HunterInventoryCardBox isFilterShow={null}>
          {inventoryList.map((item, index) => {
            return (
              <HunterInventoryCard
                delay={index * 0.1}
                key={item.idx}
                imgUrl={item.gifCf || item.gif || item.imageCf || item.image}
                title={item.title}
                subtitle={item.collectionType}
                amount={item.amount}
                shouldShowCount={
                  TokenStandardType.ERC1155 === item.tokenStandard
                }
                seasonName={
                  item.season === SeasonType.Preseason
                    ? seasonSet[item.season]?.name
                    : ''
                }
                hunterCardBgType={getHunterCardBgType(item)}
              />
            )
          })}
        </HunterInventoryCardBox>
      </div>
    </Layout>
  )
}
