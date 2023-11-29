import ReactiveImage from '~/common/image/reactive-image'
import { ReceiptBlockItemWrapper } from '~/common/modal/receipt-modal/receipt-block-item/style'

export interface Props {
  imgUrl: string
}

const ReceiptBlockItem = ({ imgUrl }: Props) => {
  return (
    <ReceiptBlockItemWrapper>
      <ReactiveImage src={imgUrl} />
    </ReceiptBlockItemWrapper>
  )
}

export default ReceiptBlockItem
