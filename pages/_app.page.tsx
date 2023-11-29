import { DehydratedState } from '@tanstack/react-query'
import { NextPage } from 'next'
import type { AppProps } from 'next/app'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import { Session } from 'next-auth'
import { ReactElement, ReactNode, useMemo } from 'react'
import CombineProviders from '~/provider/combine-providers'
import NextAuthProvider from '~/provider/next-auth-provider'
import ReactQueryProvider from '~/provider/react-query-provider'
import RecoilProvider from '~/provider/recoil-provider'
import StyledComponentsProvider from '~/provider/styled-components-provider'
import AuthProvider from '~/provider/auth-provider'
import Web3AuthProvider from '~/provider/web3auth-provider'
import { DICTIONARY } from '~/config'

type NextPageWithLayout = NextPage<{ dehydratedState: DehydratedState }> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps<{
  session: Session
  dehydratedState: DehydratedState
}> & {
  Component: NextPageWithLayout
}

const App = dynamic(() => import('pages/src/app'), {
  ssr: true
})

const DevAuthProvider = dynamic(() => import('~/provider/dev-auth-provider'), {
  ssr: true
})

const MyApp = ({
  Component,
  pageProps: { session, ...pageProps }
}: AppPropsWithLayout) => {
  const Provider = useMemo(
    () =>
      CombineProviders([
        [NextAuthProvider, { session }],
        [StyledComponentsProvider],
        [RecoilProvider],
        [ReactQueryProvider, { dehydratedState: pageProps.dehydratedState }],
        [Web3AuthProvider],
        [AuthProvider],
        [DevAuthProvider]
      ]),
    [pageProps.dehydratedState, session]
  )

  const getLayout = Component.getLayout ?? ((page) => <App>{page}</App>)

  return (
    <>
      <Head>
        <title>{DICTIONARY.SERVICE_TITLE}</title>
        <meta property='og:title' content='나 혼자만 레벨업 : 언리미티드' />
        <meta
          property='og:description'
          content='나 혼자만 레벨업 : 언리미티드에서 헌터가 되어 그림자 군단을 모으세요'
        />
        <meta property='og:image' content='/promotion_opengraph.png' />
        <meta property='og:url' content='https://devsl.otherworld.network' />
      </Head>

      <Provider>{getLayout(<Component {...pageProps} />)}</Provider>
    </>
  )
}

export default MyApp
