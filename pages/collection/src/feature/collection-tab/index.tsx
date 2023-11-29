import {
  TabBtnBox,
  TabBtnUnit,
  CollectionTabWrapper,
  MenuGradient,
  TabField
} from './style'
import useBreakpoint from '~/hooks/useBreakpoint'
import { useInView } from 'react-intersection-observer'
import { COLLECTION_TYPE_LIST } from '../../../collectionData'
import { useState } from 'react'
import { Collection } from '~/types/collection'

interface Props {
  sticky: boolean
  selectedTab: Collection
  setSelectedTab: (value: Collection) => void
}
const CollectionTab = ({ sticky, selectedTab, setSelectedTab }: Props) => {
  const { belowLargeWidth } = useBreakpoint()
  const { inView, ref: rightPosition } = useInView({
    rootMargin: '0px 0px'
  })

  return (
    <CollectionTabWrapper sticky={sticky}>
      {!inView && belowLargeWidth && <MenuGradient />}
      <TabField>
        {COLLECTION_TYPE_LIST.map((collection, index) => (
          <TabBtnBox
            key={collection.value}
            onClick={() => setSelectedTab(collection.value)}
            selected={collection.value === selectedTab}
            ref={
              COLLECTION_TYPE_LIST.length === index + 1 ? rightPosition : null
            }
          >
            <TabBtnUnit selected={collection.value === selectedTab}>
              {collection.name}
            </TabBtnUnit>
          </TabBtnBox>
        ))}
      </TabField>
    </CollectionTabWrapper>
  )
}

export default CollectionTab
