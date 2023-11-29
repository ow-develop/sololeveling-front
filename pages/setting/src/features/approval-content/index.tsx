import { LinkButton } from '@ow-develop/ow-design-system'
import Link from 'next/link'
import Config from '~/config'
import { ApproveContentUnit, ApproveContentWrapper } from './style'
import ApproveLayout from '../../ui/approve-layout'
import { ExternalPath } from '~/constants/route'
import { useI18next } from '~/lib/i18n'

const ApprovalContent = () => {
  const { t } = useI18next()

  return (
    <ApproveContentWrapper>
      <ApproveLayout title='What is Project Collection Approval?'>
        <ApproveContentUnit>
          {t(
            'Since Solo Leveling : Unlimited is a blockchain-based Web3 NFT project, the ownership of project tokens held by users is guaranteed. Therefore, in order to use features that require moving tokens within the project, token movement permissions must be set in advance for the contract that performs the feature. However, to set permissions, users need to create transactions for each collection individually and bear gas fees, so to reduce this inconvenience, we provide a feature that allows users to set collection permissions for project features in batches. When unsetting collection permissions, a separate permission setting transaction may occur when using project features that require token burning and movement.'
          )}
        </ApproveContentUnit>
      </ApproveLayout>
      <ApproveLayout title='Approved Collections'>
        <LinkButton size='sm' variant='neutral'>
          <Link
            href={`${ExternalPath.MUMBAI_POLYGON_SCAN}address/${Config.GateKey}`}
          >
            <a target='_blank'>{t('Gate Key')}</a>
          </Link>
        </LinkButton>
        <LinkButton size='sm' variant='neutral'>
          <Link
            href={`${ExternalPath.MUMBAI_POLYGON_SCAN}address/${Config.EssenceStone}`}
          >
            <a target='_blank'>{t('Essence Stone')}</a>
          </Link>
        </LinkButton>
      </ApproveLayout>
      <ApproveLayout title='Approved Contracts'>
        <LinkButton size='sm' variant='neutral'>
          <Link
            href={`${ExternalPath.MUMBAI_POLYGON_SCAN}address/${Config.DungeonGate}`}
          >
            <a target='_blank'>{t('Dungeon')}</a>
          </Link>
        </LinkButton>
        <LinkButton size='sm' variant='neutral'>
          <Link
            href={`${ExternalPath.MUMBAI_POLYGON_SCAN}address/${Config.Season}`}
          >
            <a target='_blank'>{t('Rank Up')}</a>
          </Link>
        </LinkButton>
        <LinkButton size='sm' variant='neutral'>
          <Link
            href={`${ExternalPath.MUMBAI_POLYGON_SCAN}address/${Config.System}`}
          >
            <a target='_blank'>{t('Return, Upgrade')}</a>
          </Link>
        </LinkButton>
      </ApproveLayout>
    </ApproveContentWrapper>
  )
}

export default ApprovalContent
