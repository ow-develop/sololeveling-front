import {
  RankCardField,
  CollectionCardListWrapper,
  RankImgUnit,
  RankField,
  RankUnit,
  RankGroupField
} from './style'
import CollectionCard from '../../ui/collection-card'
import { useTranslation } from 'react-i18next'
import rank_S from '~/assets/image/collection/rank_S.webp'

const CollectionCardList = () => {
  const { t } = useTranslation()

  return (
    <CollectionCardListWrapper>
      <RankGroupField>
        <RankField>
          <RankImgUnit src={rank_S.src} />
          <RankUnit>{t('S-Rank')}</RankUnit>
        </RankField>

        <RankCardField>
          <CollectionCard unOwned={false} />
          <CollectionCard unOwned={true} />
          <CollectionCard unOwned={false} />
          <CollectionCard unOwned={false} />
          <CollectionCard unOwned={true} />
        </RankCardField>
      </RankGroupField>
    </CollectionCardListWrapper>
  )
}

export default CollectionCardList
