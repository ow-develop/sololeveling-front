import { BackgroundUnit, NeedClearSlotWrapper, TextUnit } from './style'

import EssenceStoneImage from '~/assets/image/stone/essence_stone.webp'
import { useI18next } from '~/lib/i18n'

const NeedClearSlot = () => {
  const { t } = useI18next()

  return (
    <NeedClearSlotWrapper>
      <BackgroundUnit src={EssenceStoneImage.src} />

      <TextUnit>{t('Remaining Gate should be completed.')}</TextUnit>
    </NeedClearSlotWrapper>
  )
}

export default NeedClearSlot
