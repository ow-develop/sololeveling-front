import Link from 'next/link'

import { LevelingMenuWrapper } from './style'
import {
  LevelingMenuCard,
  Props as SystemMenuCardProps
} from '../../ui/leveling-menu-card'

import ariseMenuImage from '~/assets/image/leveling/leveling_arise.webp'
import upgradeMenuImage from '~/assets/image/leveling/leveling_upgrade.webp'
import rankUpMenuImage from '~/assets/image/leveling/leveling_rankup.webp'
import returnMenuImage from '~/assets/image/leveling/leveling_return.webp'

import { InternalPath } from '~/constants/route'
import useIsCurrentSeasonQuery from '~/hooks/queries/useIsCurrentSeasonQuery'
import useAuth from '~/hooks/useAuth'
import { useRouter } from 'next/router'
import React from 'react'

const SystemMenu = () => {
  const { data: isCurrentSeason } = useIsCurrentSeasonQuery()
  const { isLoggedIn } = useAuth()
  const router = useRouter()

  const handleClick = () => {
    if (!isLoggedIn) {
      router.push(InternalPath.SIGN_IN)
    }
  }

  const systemRouteList: SystemMenuCardProps[] = [
    {
      title: 'Arise',
      subtitle: 'Arise Shadow Army from Monster by using Essence Stones.',
      imgUrl: ariseMenuImage.src,
      href: InternalPath.ARISE
    },
    {
      title: 'Upgrade',
      subtitle:
        'Use 2 Monsters of the same rank and 10 Essence Stones to get a higher rank Monster.',
      imgUrl: upgradeMenuImage.src,
      href: InternalPath.UPGRADE
    },
    {
      title: 'Rank Up',
      subtitle: 'Use 10 Monsters to become a higher rank Hunter.',
      imgUrl: rankUpMenuImage.src,
      href: InternalPath.RANK_UP,
      disabled: !isCurrentSeason
    },
    {
      title: 'Return',
      subtitle: 'Return Monsters to earn Essence Stones.',
      imgUrl: returnMenuImage.src,
      href: InternalPath.RETURN
    }
  ]

  return (
    <LevelingMenuWrapper>
      {systemRouteList.map((data) => (
        <React.Fragment key={data.title}>
          {data.disabled ? (
            <LevelingMenuCard {...data} />
          ) : (
            <Link href={data.href} onClick={handleClick}>
              <a>
                <LevelingMenuCard {...data} />
              </a>
            </Link>
          )}
        </React.Fragment>
      ))}
    </LevelingMenuWrapper>
  )
}

export default SystemMenu
