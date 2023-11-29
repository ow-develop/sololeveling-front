import React from 'react'

import { ShopListWrapper } from './style'
import useShopListQuery from '../../hooks/useShopListQuery'
import Link from 'next/link'
import { ShopListItem } from '../../ui/shop-list-item'
import { FreeItem } from '../../ui/free-item'

const ShopList = () => {
  const { itemList, isAvailableFreeGateKey, remainingTimeOfFreeGateKey } =
    useShopListQuery()
  const freeGateInfo = itemList[0]

  return (
    <ShopListWrapper>
      <FreeItem
        gateKeyId={freeGateInfo.gateKeyId}
        type={freeGateInfo.type}
        rank={freeGateInfo.rank}
        title={freeGateInfo.title}
        priceUSD={freeGateInfo.priceUSD}
        imgUrl={freeGateInfo.imgUrlCf || freeGateInfo.imgUrl}
        descriptionEN={freeGateInfo.descriptionEN}
        isAvailableFreeGateKey={isAvailableFreeGateKey}
        remainingTimeOfFreeGateKey={remainingTimeOfFreeGateKey}
      />

      {itemList.map((data) => (
        <Link href={`/shop/${data.rank ?? 'stone'}`} key={data.rank}>
          <a>
            <ShopListItem
              gateKeyId={data.gateKeyId}
              type={data.type}
              rank={data.rank ?? 'stone'}
              title={data.title}
              priceUSD={data.priceUSD}
              imgUrl={data.imgUrlCf || data.imgUrl}
              descriptionEN={data.descriptionEN}
            />
          </a>
        </Link>
      ))}
    </ShopListWrapper>
  )
}

export default ShopList
