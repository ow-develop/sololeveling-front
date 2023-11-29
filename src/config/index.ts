import Local from './local'
import Beta from './beta'
import Development from './development'
import Production from './production'

export enum DICTIONARY {
  SERVICE_TITLE = 'Solo Leveling : Unlimited'
}

const config = {
  local: Local,
  beta: Beta,
  development: Development,
  production: Production
} as const

const branch = process.env.NEXT_PUBLIC_BRANCH as keyof typeof config

const Config = config[branch]

export default Config
