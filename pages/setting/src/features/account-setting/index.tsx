import { LinkButton, Toggle } from '@ow-develop/ow-design-system'
import { useTranslation } from 'react-i18next'
import useWithdrawMutation from '../../hooks/useWithdrawMutation'
import useModal from '~/hooks/useModal'
import SettingContentLayout from '../../ui/setting-content-layout'
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react'
import useAuth from '~/hooks/useAuth'
import { MESSAGE } from '~/constants/message'
import useToastAction from '~/hooks/useToastAction'
import SvgIcon from '~/common/svg-icon'
import {
  ContentCopyIcon,
  ExpandMoreIcon
} from '@ow-develop/ow-icons/react/material'
import useTransactionHandler from '~/hooks/useTransactionHandler'
import { useIsApproveAccountQuery } from '../../hooks/useIsApproveAccountQuery'
import { SettingSideContentLayout } from '../../ui/style'
import {
  ButtonField,
  ContentField,
  ContentSideField,
  DescriptionRowBox
} from '../approval/style'
import Title from '../../ui/title'
import { IconBox, TextUnit } from '~/common/view-more/style'
import Loading from '../../ui/loading'
import ApprovalContent from '../approval-content'
import { DescriptionBox, DescriptionColumnBox, DescriptionUnit } from './style'
import { isSupported } from 'clipboard'
import PrivateKeyContent from '../private-key-content'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import DeleteConfirmModal from '../delete-confirm-modal'

const AccountSetting = () => {
  const [isContentShow, setIsContentShow] = useState(false)
  const { email, address } = useAuth()
  const { mutate: deleteAccount } = useWithdrawMutation()
  const { toggleAccountApproval, isApproveAccount } = useIsApproveAccountQuery()
  const { provider } = useWeb3AuthContext()
  const [privateKey, setPrivateKey] = useState<string | null>('')
  const [isAgree, setIsAgree] = useState(false)

  const controlApproval = async () => {
    await transaction({
      onSuccess: toggleAccountApproval,
      notUseLoading: true
    })
  }

  const { openModal, closeModal } = useModal()
  const { copyToast } = useToastAction()

  const { transaction, loading } = useTransactionHandler()
  const { t } = useTranslation()

  const handleDeleteAccount = () => {
    openModal(
      <DeleteConfirmModal
        title='Delete Account'
        onConfirm={handleClickConfirm}
        onChangeAgreement={onChangeAgreement}
        onCancel={handleClickCancel}
        confirmBtnName='Delete Account'
        cancelBtnName='Cancel'
      />
    )
  }
  const handleClickConfirm = () => {
    deleteAccount()
  }
  const handleClickCancel = () => {
    closeModal()
  }

  const handleCopyClick = () => {
    copyToast(address, MESSAGE.WALLET_ADDRESS_COPY)
  }
  const handleCopyPrivateKey = () => {
    copyToast(privateKey, MESSAGE.PRIVATE_KEY_COPY)
  }
  useEffect(() => {
    async function getPrivateKey(): Promise<string> {
      return await provider.request({
        method: 'eth_private_key'
      })
    }
    getPrivateKey().then((res: string) => {
      setPrivateKey(res)
    })
  }, [])

  const onChangeAgreement = (isAgree: boolean) => {
    setIsAgree(isAgree)
  }

  return (
    <>
      {/*<SettingContentLayout title='Email'>*/}
      {/*  <DescriptionUnit>{email}</DescriptionUnit>*/}
      {/*</SettingContentLayout>*/}

      <SettingContentLayout title='Wallet Address'>
        <DescriptionBox>
          <DescriptionUnit>{address}</DescriptionUnit>
          {isSupported() && (
            <SvgIcon
              onClick={handleCopyClick}
              icon={<ContentCopyIcon />}
              color='icon-default'
              size={16}
            />
          )}
        </DescriptionBox>
      </SettingContentLayout>

      <SettingSideContentLayout>
        <ContentSideField>
          <DescriptionBox>
            <DescriptionColumnBox>
              <Title title='Export my Wallet' />
              <DescriptionRowBox>
                <DescriptionUnit>
                  {t('Can export my Wallet through Private key.')}
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
            </DescriptionColumnBox>
          </DescriptionBox>
        </ContentSideField>
        <>
          <ContentField isContentShow={isContentShow}>
            <PrivateKeyContent
              onClick={handleCopyPrivateKey}
              privateKey={privateKey}
            />
          </ContentField>
        </>
      </SettingSideContentLayout>

      {/*<SettingSideContentLayout>*/}
      {/*  <ContentSideField>*/}
      {/*    <DescriptionBox>*/}
      {/*      <DescriptionColumnBox>*/}
      {/*        <Title title='Project Collection Approval' />*/}
      {/*        <DescriptionRowBox>*/}
      {/*          <DescriptionUnit>*/}
      {/*            {t(*/}
      {/*              'Can set project collection approval in Solo Leveling : Unlimited.'*/}
      {/*            )}*/}
      {/*          </DescriptionUnit>*/}
      {/*          <ButtonField onClick={() => setIsContentShow((prev) => !prev)}>*/}
      {/*            <TextUnit>{t('View more')}</TextUnit>*/}
      {/*            <IconBox isOpen={isContentShow}>*/}
      {/*              <SvgIcon*/}
      {/*                size={20}*/}
      {/*                color='text-weak'*/}
      {/*                icon={<ExpandMoreIcon />}*/}
      {/*              />*/}
      {/*            </IconBox>*/}
      {/*          </ButtonField>*/}
      {/*        </DescriptionRowBox>*/}
      {/*      </DescriptionColumnBox>*/}
      {/*    </DescriptionBox>*/}

      {/*    <DescriptionBox>*/}
      {/*      {!loading ? (*/}
      {/*        <Toggle onClick={controlApproval} checked={isApproveAccount} />*/}
      {/*      ) : (*/}
      {/*        <Loading width={30} height={30} />*/}
      {/*      )}*/}
      {/*    </DescriptionBox>*/}
      {/*  </ContentSideField>*/}
      {/*  <>*/}
      {/*    <ContentField isContentShow={isContentShow}>*/}
      {/*      <ApprovalContent />*/}
      {/*    </ContentField>*/}
      {/*  </>*/}
      {/*</SettingSideContentLayout>*/}

      <LinkButton
        size='sm'
        variant='neutral'
        style={{ paddingLeft: 0 }}
        onClick={handleDeleteAccount}
      >
        {t('Delete Account')}
      </LinkButton>
    </>
  )
}

export default AccountSetting
