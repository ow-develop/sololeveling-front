import { CollectionLayout, ProfileField, CollectionWrapper } from './style'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import CollectionBackground from './src/ui/collection-background'
import Profile from './src/feature/collection-profile'
import CollectionCardList from './src/feature/collection-card-list'
import Tab from './src/feature/collection-tab'
import React, { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { HEADER_HEIGHT } from '~/constants/style'
import { Collection } from '~/types/collection'

const CollectionPage = () => {
  const [selectedTab, setSelectedTab] = useState(Collection.Monster)
  const { inView, ref: tabRef } = useInView({
    rootMargin: `${-HEADER_HEIGHT}px 0px 0px`
  })

  return (
    <CollectionWrapper>
      <CollectionLayout>
        <ProfileField>
          <Profile />

          <div ref={tabRef} />
          <Tab
            sticky={!inView}
            selectedTab={selectedTab}
            setSelectedTab={setSelectedTab}
          />
        </ProfileField>

        <CollectionCardList />
      </CollectionLayout>

      <CollectionBackground />
    </CollectionWrapper>
  )
}

export default CollectionPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession({ req: ctx.req })

  return {
    props: {}
  }
}
