import React, { ReactNode, useRef } from 'react'
import {
  DehydratedState,
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'
import { STALE_TIME } from '~/constants/query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const ReactQueryProvider = ({
  children,
  dehydratedState
}: {
  children: ReactNode
  dehydratedState: DehydratedState
}) => {
  const queryClientRef = useRef<QueryClient>()
  if (!queryClientRef.current) {
    queryClientRef.current = new QueryClient({
      defaultOptions: {
        queries: {
          suspense: true,
          refetchOnWindowFocus: false,
          staleTime: STALE_TIME
        }
      }
    })
  }

  return (
    <QueryClientProvider client={queryClientRef.current}>
      <Hydrate state={dehydratedState}>
        {children}
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  )
}

export default ReactQueryProvider
