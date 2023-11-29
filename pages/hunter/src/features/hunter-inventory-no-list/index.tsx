import { DescriptionUnit, HunterInventoryNoListWrapper } from './style'
import { Button } from '@ow-develop/ow-design-system'
import { useTranslation } from 'react-i18next'
import { useRouter } from 'next/router'
import { InternalPath } from '~/constants/route'

const HunterInventoryNoList = () => {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <HunterInventoryNoListWrapper>
      <div>
        <DescriptionUnit>{t('There are no items.')}</DescriptionUnit>
        <DescriptionUnit>
          {t('Get your first Monster at Dungeon Gate.')}
        </DescriptionUnit>
      </div>

      <Button
        variant={'primary'}
        size={'sm'}
        width={'fixed'}
        fixedWidth={160}
        onClick={() => router.push(InternalPath.DUNGEON)}
      >
        {t('Go to Dungeon')}
      </Button>
    </HunterInventoryNoListWrapper>
  )
}
export default HunterInventoryNoList
