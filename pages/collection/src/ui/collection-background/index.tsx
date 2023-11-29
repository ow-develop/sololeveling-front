import bgCollectionCastle from '~/assets/image/collection/bg_castle.webp'
import bgCollectionSky from '~/assets/image/collection/bg_collection_sky.webp'
import bgCollectionRock from '~/assets/image/collection/bg_rock.webp'
import { BgCastle, BgRock, BgSky, CollectionBgWrapper } from './style'

const CollectionBackground = () => {
  return (
    <CollectionBgWrapper>
      <BgSky src={bgCollectionSky.src} />
      <BgCastle src={bgCollectionCastle.src} />
      <BgRock src={bgCollectionRock.src} />
    </CollectionBgWrapper>
  )
}
export default CollectionBackground
