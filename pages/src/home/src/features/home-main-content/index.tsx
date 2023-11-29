import { ArrowForwardIcon } from '@ow-develop/ow-icons/react/material'
import { useRouter } from 'next/router'
import { useTranslation } from 'react-i18next'
import { InView } from 'react-intersection-observer'
import {
  BackgroundField,
  BackgroundUnit,
  ContentBox,
  ContentField,
  DescriptionBox,
  DescriptionUnit,
  HomeMainContentWrapper,
  ImageBox,
  ImageUnit,
  InfoField,
  ItemDescriptionUnit,
  ItemLinkBox,
  ItemLinkUnit,
  ItemTitleUnit,
  TitleUnit
} from './style'
import contentBg from '../../../../../../src/assets/image/background/bg_home_content.webp'

import SvgIcon from '~/common/svg-icon'
import Content1 from '~/assets/image/background/bg_home_content_1.webp'
import Content2 from '~/assets/image/background/bg_home_content_2.webp'
import Content3 from '~/assets/image/background/bg_home_content_3.webp'
import Content4 from '~/assets/image/background/bg_home_content_4.webp'
import Content5 from '~/assets/image/background/bg_home_content_5.webp'
import Content6 from '~/assets/image/background/bg_home_content_6.webp'
import { InternalPath } from '~/constants/route'
import useAuth from '~/hooks/useAuth'

interface ContentType {
  title: string
  description: string
  linkName: string
  link: string
  img: string
}

const HomeMainContent = () => {
  const { t } = useTranslation()
  const router = useRouter()
  const { address } = useAuth()

  const homeContentData: ContentType[] = [
    {
      title: 'Open Dungeon Gate',
      description:
        'Hunter can open Dungeon gates with the Gate keys that can purchase on the Shop page.',
      linkName: 'Go to Shop',
      link: `${InternalPath.SHOP}`,
      img: Content1.src
    },
    {
      title: 'Dungeon Gate Clear',
      description:
        'Open and clear dungeon gate to get the Monster item. Gates can be completed instantly by using Essence Stones.',
      linkName: 'Go to Dungeon',
      link: `${InternalPath.DUNGEON}`,
      img: Content2.src
    },
    {
      title: 'Upgrade Monster',
      description: 'Upgrade Monster with Essence stone.',
      linkName: 'Go to Upgrade',
      link: `${InternalPath.UPGRADE}`,
      img: Content3.src
    },
    {
      title: 'Collect your own',
      description:
        'Hunter can create own collections. Enjoy the world of webtoon and obtain various digital collectibles based on IP.',
      linkName: 'Go to Inventory',
      link: `${InternalPath.HUNTER}`,
      img: Content4.src
    },
    {
      title: 'Raise Hunter rank',
      description:
        'Raise Hunter rank by using monster items. High rank Hunter can earn higher rank monster items.',

      linkName: 'Go to Rank Up',
      link: `${InternalPath.RANK_UP}`,
      img: Content5.src
    },
    {
      title: 'Get listed in Ranking',
      description:
        'Collect Season score and get listed in the ranking. Rewards are awarded to the top-ranked Hunters after the season ends.',
      linkName: 'Go to Season',
      link: `${InternalPath.SEASON}`,
      img: Content6.src
    }
  ]

  return (
    <HomeMainContentWrapper>
      <InfoField>
        <TitleUnit>{t('How It Works')}</TitleUnit>
        <DescriptionBox>
          <DescriptionUnit>
            {t(`Become Hunter and collect Shadow Army`)}
          </DescriptionUnit>
        </DescriptionBox>
      </InfoField>

      <ContentField>
        {homeContentData.map((item, index) => (
          <InView key={item.title}>
            {({ inView, ref, entry }) => (
              <ContentBox
                ref={ref}
                inView={inView}
                key={item.title}
                isEven={index % 2 !== 0}
              >
                <ImageBox>
                  <ImageUnit src={item.img} />
                </ImageBox>
                <ItemTitleUnit>{t(item.title)}</ItemTitleUnit>
                <ItemDescriptionUnit>{t(item.description)}</ItemDescriptionUnit>
                <ItemLinkBox onClick={() => router.push(item.link)}>
                  <ItemLinkUnit>{t(item.linkName)}</ItemLinkUnit>
                  <SvgIcon
                    icon={<ArrowForwardIcon />}
                    size={20}
                    color='icon-default'
                  />
                </ItemLinkBox>
              </ContentBox>
            )}
          </InView>
        ))}
      </ContentField>

      <BackgroundField>
        <BackgroundUnit src={contentBg.src} />
      </BackgroundField>
    </HomeMainContentWrapper>
  )
}

export default HomeMainContent
