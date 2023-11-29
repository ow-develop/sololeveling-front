import { CloseIcon } from '@ow-develop/ow-icons/react/material'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import {
  ButtonInfoUnit,
  CloseButtonUnit,
  HunterInfoWrapper,
  HunterModalWrapper,
  HunterProfileWrapper,
  HunterShortsUnit,
  InfoBox,
  InfoField,
  InfoStrong,
  InfoUnit,
  ShortsUnit,
  SubTitle,
  Title
} from './style'

import FullWidthImage from '~/common/image/full-width-image'
import SvgIcon from '~/common/svg-icon'
import { useGetCollectionTokenDetailQuery } from '../../../../collection/src/hooks/useGetCollectionTokenDetailQuery'
import { HunterInventoryItemDto } from '~/api/dto/hunter'
import { splitAddress } from '~/utils/formatText'

import { TokenStandardType } from '~/constants/contracts'
import { useRecoilState } from 'recoil'
import { languageState } from '~/atoms/common'
import { HunterCollectionType } from '~/types/hunter'
import { BlockChainType } from '~/types/common'
import { useRouter } from 'next/router'
import { ExternalPath, InternalPath } from '~/constants/route'
import { ViewMore } from '~/common/view-more'
import Link from 'next/link'

interface Props {
  handleModalClose: () => void
  item: HunterInventoryItemDto
}

const HunterInventoryDetail = ({ handleModalClose, item }: Props) => {
  const [isContentShow, setIsContentShow] = useState(false)
  const { data: collectionDetail } = useGetCollectionTokenDetailQuery({
    collectionAddress: item.collectionAddress,
    tokenId: item.tokenId
  })
  const language = useRecoilState(languageState)
  const { t } = useTranslation()
  const router = useRouter()

  const isShowEssenceStoneReward =
    collectionDetail.collectionType === HunterCollectionType.Monster ||
    collectionDetail.collectionType === HunterCollectionType.ShadowArmy

  return (
    <HunterModalWrapper>
      <CloseButtonUnit
        width='hug'
        variant='text'
        size='sm'
        onClick={handleModalClose}
      >
        <SvgIcon icon={<CloseIcon />} color='icon-weaker' />
      </CloseButtonUnit>
      <HunterProfileWrapper>
        <FullWidthImage
          src={
            collectionDetail.gifCf ||
            collectionDetail.gif ||
            collectionDetail.imageCf ||
            collectionDetail.image
          }
        />
      </HunterProfileWrapper>
      <HunterInfoWrapper>
        <div>
          <Title>{t(collectionDetail.title)}</Title>
          <SubTitle>{t(collectionDetail.collectionType)}</SubTitle>
        </div>
        <InfoUnit>{collectionDetail[`description${language[0]}`]}</InfoUnit>

        <InfoField>
          {collectionDetail.tokenStandard === TokenStandardType.ERC721 && (
            <InfoBox>
              <InfoUnit>{t('Owner')}</InfoUnit>
              <ButtonInfoUnit
                onClick={() =>
                  router.push(
                    `${InternalPath.COLLECTION + collectionDetail.ownerAddress}`
                  )
                }
              >
                {splitAddress(collectionDetail.ownerAddress)}
              </ButtonInfoUnit>
            </InfoBox>
          )}

          <InfoBox>
            <InfoUnit>{t('Token ID')}</InfoUnit>
            <InfoUnit>{item.tokenId}</InfoUnit>
          </InfoBox>

          <InfoBox>
            <InfoUnit>{t('Collection Score')}</InfoUnit>
            <InfoUnit>{collectionDetail.score ?? 0}</InfoUnit>
          </InfoBox>

          {isShowEssenceStoneReward && (
            <InfoBox>
              <InfoUnit>{t('Returnable Essence Stone')}</InfoUnit>
              <InfoUnit>{collectionDetail.essenceStoneReward}</InfoUnit>
            </InfoBox>
          )}

          <ViewMore
            onClick={() => setIsContentShow((prev) => !prev)}
            text={'View more'}
            extend={isContentShow}
            btnDirection={'start'}
          >
            <InfoField>
              <InfoBox>
                <InfoUnit>{t('Contract Address')}</InfoUnit>
                <InfoUnit>
                  <Link
                    href={`${ExternalPath.MUMBAI_POLYGON_SCAN}token/${collectionDetail.collectionAddress}`}
                  >
                    <a target='_blank'>
                      {splitAddress(collectionDetail.collectionAddress)}
                    </a>
                  </Link>
                </InfoUnit>
              </InfoBox>

              {collectionDetail.tokenStandard === TokenStandardType.ERC1155 && (
                <InfoBox>
                  <InfoUnit>{t('Owners')}</InfoUnit>
                  <InfoUnit>{collectionDetail.owners}</InfoUnit>
                </InfoBox>
              )}

              <InfoBox>
                <InfoUnit>{t('Token Standard')}</InfoUnit>
                <InfoUnit>{collectionDetail.tokenStandard}</InfoUnit>
              </InfoBox>

              <InfoBox>
                <InfoUnit>{t('Blockchain')}</InfoUnit>
                <InfoUnit>{BlockChainType}</InfoUnit>
              </InfoBox>

              <InfoBox>
                <InfoUnit>{t('Total Supply')}</InfoUnit>
                <InfoUnit>{collectionDetail.totalSupply}</InfoUnit>
              </InfoBox>

              {!!collectionDetail.maxSupply && (
                <InfoBox>
                  <InfoUnit>{t('Max Supply')}</InfoUnit>
                  <InfoUnit>{collectionDetail.maxSupply}</InfoUnit>
                </InfoBox>
              )}

              <InfoBox>
                <InfoUnit>{t('Burned')}</InfoUnit>
                <InfoUnit>{collectionDetail.burned}</InfoUnit>
              </InfoBox>
            </InfoField>
          </ViewMore>
        </InfoField>

        <InfoBox>
          <HunterShortsUnit>
            {collectionDetail.traits?.map((trait, index) => (
              <ShortsUnit key={index}>
                <InfoStrong>{t(trait.traitType)}</InfoStrong>
                <InfoUnit>{t(trait.traitValue)}</InfoUnit>
              </ShortsUnit>
            ))}
          </HunterShortsUnit>
        </InfoBox>
      </HunterInfoWrapper>
    </HunterModalWrapper>
  )
}
export default HunterInventoryDetail
