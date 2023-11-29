import { Toggle } from '@ow-develop/ow-design-system'
import { useTranslation } from 'react-i18next'

import {
  ContentSideField,
  DescriptionBox,
  DescriptionRowBox,
  DescriptionUnit
} from './style'
import { useNotificationQuery } from '../../hooks/useNotificationQuery'
import Loading from '../../ui/loading'
import { SettingSideContentLayout } from '../../ui/style'
import Title from '../../ui/title'

const NotificationSetting = () => {
  const { toggleMarketingOpt, isMarketingOptApprove, isLoading } =
    useNotificationQuery()
  const handleMarketingOptClick = () => {
    toggleMarketingOpt()
  }
  const { t } = useTranslation()

  return (
    <SettingSideContentLayout>
      <ContentSideField>
        <DescriptionBox>
          <>
            <Title title='Consent to receive advertising information' />
            <DescriptionRowBox>
              <DescriptionUnit>
                {t(
                  'Consent to receive various information related to the service, including news, event updates, and benefits.'
                )}
              </DescriptionUnit>
            </DescriptionRowBox>
          </>
        </DescriptionBox>

        <DescriptionBox>
          {isLoading ? (
            <Loading width={30} height={30} />
          ) : (
            <Toggle
              onClick={handleMarketingOptClick}
              checked={isMarketingOptApprove}
            />
          )}
        </DescriptionBox>
      </ContentSideField>
    </SettingSideContentLayout>
  )
}

export default NotificationSetting
