import { useRouter } from 'next/router'

import Menu from '~/common/menu'
import { InternalPath } from '~/constants/route'
import useAuth from '~/hooks/useAuth'
import GetTestTokenModal from '../../../get-test-token-modal'
import useModal from '~/hooks/useModal'

const AccountNavigator = () => {
  const { address } = useAuth()
  const { push, pathname } = useRouter()
  const { openModal } = useModal()

  const linkList = [
    {
      title: 'Setting',
      link: InternalPath.SETTING
    }
  ]

  return (
    <Menu>
      {linkList.map((item) => {
        return (
          <Menu.Item
            key={item.title}
            title={item.title}
            onClick={() => push(item.link)}
          />
        )
      })}
      <Menu.Item
        key={'getTestToken'}
        title={'Get Test Token'}
        onClick={() => openModal(<GetTestTokenModal />)}
      />
    </Menu>
  )
}

export default AccountNavigator
