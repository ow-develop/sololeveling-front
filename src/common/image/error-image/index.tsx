import { PreparingIcon } from '@ow-develop/ow-icons/react/other-world'

import { ErrorImageBox, ErrorImageWrapper } from './style'

interface Props {
  transparent?: boolean
}

const ErrorImage = ({ transparent = false }: Props) => {
  return (
    <ErrorImageWrapper transparent={transparent}>
      <ErrorImageBox>
        <PreparingIcon />
      </ErrorImageBox>
    </ErrorImageWrapper>
  )
}

export default ErrorImage
