import { Button } from '@ow-develop/ow-design-system'
import { useTranslation } from 'react-i18next'

import { PreparingContent, PreparingDesc, PreparingWrapper } from './style'

export interface Props {
  text: string
  buttonText?: string
  buttonCb?: () => void
}

const Preparing = ({ text, buttonText, buttonCb }: Props) => {
  const { t } = useTranslation()

  return (
    <PreparingWrapper>
      <PreparingContent>
        <PreparingDesc>{t(text)}</PreparingDesc>

        {buttonText && (
          <Button size='sm' width='hug' variant='secondary' onClick={buttonCb}>
            {t(buttonText)}
          </Button>
        )}
      </PreparingContent>
    </PreparingWrapper>
  )
}

export default Preparing
