import {
  AmountUnit,
  ContentBox,
  ImageBox,
  ImageUnit,
  ItemCardWrapper,
  SubtitleUnit,
  ThumbnailField,
  TitleUnit
} from './style'

export interface Props {
  thumbnailUrl: string
  title: string
  subtitle: string
  disabled?: boolean
  selected?: boolean
  amount?: number
  onClick?: (title: string) => void
}

const ItemCard = ({
  thumbnailUrl,
  title,
  subtitle,
  disabled,
  selected,
  onClick,
  amount = 1
}: Props) => {
  const handleClick = () => {
    onClick?.(title)
  }

  return (
    <ItemCardWrapper
      disabled={disabled}
      selected={selected}
      onClick={handleClick}
    >
      <ThumbnailField disabled={disabled}>
        <ImageBox>
          <ImageUnit src={thumbnailUrl} />
        </ImageBox>
        {amount > 1 && <AmountUnit>× {amount}</AmountUnit>}
      </ThumbnailField>
      <ContentBox>
        <SubtitleUnit>{subtitle}</SubtitleUnit>
        <TitleUnit disabled={disabled}>{title}</TitleUnit>
      </ContentBox>
    </ItemCardWrapper>
  )
}

export default ItemCard
