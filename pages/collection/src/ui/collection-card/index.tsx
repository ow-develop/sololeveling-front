import {
  CollectionCardWrapper,
  CardImgField,
  ImgUnit,
  LayeredImgUnit,
  NameUnit
} from './style'
import temp_card_SS from '~/assets/image/collection/temp_card_SS.webp'
import unOwned_card_SS from '~/assets/image/collection/unowned_card_SS.webp'

interface Props {
  unOwned: boolean
}
const CollectionCard = ({ unOwned }: Props) => {
  return (
    <CollectionCardWrapper unOwned={unOwned}>
      <CardImgField>
        {unOwned && (
          <LayeredImgUnit
            alt={'unOwned_collection_card'}
            src={unOwned_card_SS.src}
          />
        )}
        <ImgUnit
          alt='collection_card'
          unOwned={unOwned}
          src={temp_card_SS.src}
        />
      </CardImgField>
      <NameUnit>Tank</NameUnit>
    </CollectionCardWrapper>
  )
}

export default CollectionCard
