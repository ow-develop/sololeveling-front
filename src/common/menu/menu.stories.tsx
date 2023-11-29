import { MenuItem } from './menu-item'

import Menu from '.'

export default {
  title: 'common/Menu/Menu'
}

export const Default = () => {
  return (
    <Menu title='Menu'>
      <MenuItem>Home</MenuItem>
      <MenuItem>Dungeon</MenuItem>
      <MenuItem>System</MenuItem>
      <MenuItem>Collection</MenuItem>
      <MenuItem>Season</MenuItem>
    </Menu>
  )
}
