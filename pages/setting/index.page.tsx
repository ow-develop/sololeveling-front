import { useRouter } from 'next/router'
import React, { useState } from 'react'

import AccountSetting from './src/features/account-setting'
import NotificationSetting from './src/features/notification-setting'
import ProfileSetting from './src/features/profile-setting'
import {
  SettingContentLayout,
  SettingMainLayout,
  TabListLayout
} from './src/ui/style'
import Tab from './src/ui/tab'

import AsyncBoundary from '~/common/async-boundary'
import { InternalPath } from '~/constants/route'
import useAuth from '~/hooks/useAuth'
import SectionLayout from '~/layouts/section-layout'
import { CommonMainLayout } from '~/layouts/style'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import AccountSettingSkeleton from './src/features/account-setting/account-setting-skeleton'

interface Tab {
  label: string
  content: JSX.Element
}

const TAB_LIST: Tab[] = [
  {
    label: 'Profile',
    content: <ProfileSetting />
  },
  {
    label: 'Account',
    content: (
      <AsyncBoundary loadingComponent={<AccountSettingSkeleton />}>
        <AccountSetting />
      </AsyncBoundary>
    )
  }
]

const SettingPage = () => {
  const router = useRouter()
  const [selectedTabIndex, setSelectedTabIndex] = useState(0)
  const { isLoggedIn } = useAuth()

  if (!isLoggedIn) {
    router.push(InternalPath.SIGN_IN)
    return
  }

  const handleTabClick = (index: number) => {
    setSelectedTabIndex(index)
  }

  return (
    <CommonMainLayout>
      <SectionLayout
        title='Setting'
        description='Hunter can edit profile and account information.'
      >
        <SettingMainLayout>
          <TabListLayout>
            {TAB_LIST.map((tab, index) => (
              <Tab
                key={tab.label}
                onClick={() => handleTabClick(index)}
                title={tab.label}
                isSelected={index === selectedTabIndex}
              />
            ))}
          </TabListLayout>
          <SettingContentLayout>
            {TAB_LIST[selectedTabIndex].content}
          </SettingContentLayout>
        </SettingMainLayout>
      </SectionLayout>
    </CommonMainLayout>
  )
}

export default SettingPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession({ req: ctx.req })

  if (!session) {
    return {
      redirect: {
        destination: InternalPath.HOME
      }
    }
  }

  return {
    props: {}
  }
}
