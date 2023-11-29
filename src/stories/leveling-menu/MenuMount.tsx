import React from 'react'
import { Props as SystemMenuCardProps } from '../../../pages/leveling/src/ui/leveling-menu-card'
import Link from 'next/link'
import ariseMenuImage from '~/assets/image/leveling/leveling_arise.webp'
import upgradeMenuImage from '~/assets/image/leveling/leveling_upgrade.webp'
import rankUpMenuImage from '~/assets/image/leveling/leveling_rankup.webp'
import returnMenuImage from '~/assets/image/leveling/leveling_return.webp'
import { staggerContainer } from '~/stories/gate-slot/SlotMount'
import {
  Item,
  LevelingMenuWrapper
} from '~/stories/leveling-menu/MenuMount.styled'
import MenuItem from '~/stories/leveling-menu/MenuItem'

const MenuMount = () => {
  const systemRouteList: SystemMenuCardProps[] = [
    {
      title: 'Arise',
      subtitle: 'Arise Shadow Army from Monster by using Essence Stones.',
      imgUrl: ariseMenuImage.src,
      href: ''
    },
    {
      title: 'Upgrade',
      subtitle:
        'Use 2 Monsters of the same rank and 10 Essence Stones to get a higher rank Monster.',
      imgUrl: upgradeMenuImage.src,
      href: ''
    },
    {
      title: 'Rank Up',
      subtitle: 'Use 10 Monsters to become a higher rank Hunter.',
      imgUrl: rankUpMenuImage.src,
      href: '',
      disabled: true
    },
    {
      title: 'Return',
      subtitle: 'Return Monsters to earn Essence Stones.',
      imgUrl: returnMenuImage.src,
      href: ''
    }
  ]

  return (
    <>
      <LevelingMenuWrapper
        variants={staggerContainer as any}
        initial='hidden'
        whileInView='show'
      >
        {systemRouteList.map((data, i) => (
          <Item
            key={data.title}
            initial={{
              opacity: 0,
              translateX: i % 2 === 0 ? -50 : 50,
              translateY: -50
            }}
            animate={{ opacity: 1, translateX: 0, translateY: 0 }}
            transition={{ duration: 0.3, delay: i * 0.2 }}
          >
            <React.Fragment key={data.title}>
              <Link href={data.href}>
                <a>
                  <MenuItem {...data} />
                </a>
              </Link>
            </React.Fragment>
          </Item>
        ))}
      </LevelingMenuWrapper>
    </>
  )
}

export default MenuMount

type Direction = 'left' | 'right' | 'up' | 'down'
