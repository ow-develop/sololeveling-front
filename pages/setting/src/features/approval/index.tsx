import { Toggle } from '@ow-develop/ow-design-system'
import { ExpandMoreIcon } from '@ow-develop/ow-icons/react/material'
import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  ButtonField,
  ContentField,
  ContentSideField,
  DescriptionBox,
  DescriptionRowBox,
  DescriptionUnit
} from './style'
import { useIsApproveAccountQuery } from '../../hooks/useIsApproveAccountQuery'
import Loading from '../../ui/loading'
import { SettingSideContentLayout } from '../../ui/style'
import Title from '../../ui/title'
import ApprovalContent from '../approval-content'

import SvgIcon from '~/common/svg-icon'
import { IconBox, TextUnit } from '~/common/view-more/style'
import useTransactionHandler from '~/hooks/useTransactionHandler'

const Approval = () => {
  const { t } = useTranslation()
  const [isContentShow, setIsContentShow] = useState(false)
  const { transaction, loading } = useTransactionHandler()
  const { toggleAccountApproval, isApproveAccount } = useIsApproveAccountQuery()

  const controlApproval = async () => {
    await transaction({
      onSuccess: toggleAccountApproval,
      notUseLoading: true
    })
  }

  return (
    <SettingSideContentLayout>
      <ContentSideField>
        <DescriptionBox>
          <>
            <Title title='Project Collection Approval' />
            <DescriptionRowBox>
              <DescriptionUnit>
                {t(
                  'Can set project collection approval in Solo Leveling : Unlimited.'
                )}
              </DescriptionUnit>
              <ButtonField onClick={() => setIsContentShow((prev) => !prev)}>
                <TextUnit>{t('View more')}</TextUnit>
                <IconBox isOpen={isContentShow}>
                  <SvgIcon
                    size={20}
                    color='text-weak'
                    icon={<ExpandMoreIcon />}
                  />
                </IconBox>
              </ButtonField>
            </DescriptionRowBox>
          </>
        </DescriptionBox>
        <DescriptionBox>
          {!loading ? (
            <Toggle onClick={controlApproval} checked={isApproveAccount} />
          ) : (
            <Loading width={30} height={30} />
          )}
        </DescriptionBox>
      </ContentSideField>
      <>
        <ContentField isContentShow={isContentShow}>
          <ApprovalContent />
        </ContentField>
      </>
    </SettingSideContentLayout>
  )
}
export default Approval
