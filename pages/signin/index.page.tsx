import React from 'react'
import AsyncBoundary from '~/common/async-boundary'
import { SignInLayout } from './src/style'
import SignInBackground from './src/ui/signin-background'
import SignInContents from './src/ui/signin-contents'
import { GetServerSidePropsContext } from 'next'
import { getSession } from 'next-auth/react'
import { InternalPath } from '~/constants/route'

const SignInPage = () => {
  return (
    <SignInLayout>
      <AsyncBoundary>
        <SignInBackground />
        <SignInContents />
      </AsyncBoundary>
    </SignInLayout>
  )
}

export default SignInPage

export async function getServerSideProps(ctx: GetServerSidePropsContext) {
  const session = await getSession({ req: ctx.req })

  if (session) {
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
