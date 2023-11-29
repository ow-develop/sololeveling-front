import { ReactNode, Suspense } from 'react'
import { ErrorBoundary } from 'react-error-boundary'

import Preparing from '../preparing'

import { LoadingBox } from '~/common/async-boundary/style'
import LoadingImage from '~/assets/image/loading/loading.gif'
import useIsMounted from '~/hooks/useIsMounted'
import FullWidthImage from '~/common/image/full-width-image'

interface Props {
  children: ReactNode
  errorComponent?: ReactNode
  errorText?: string
  loadingComponent?: ReactNode
}

const AsyncBoundary = ({
  errorComponent,
  errorText,
  loadingComponent,
  children
}: Props) => {
  const isMounted = useIsMounted()

  if (!isMounted) return <></>

  return (
    <ErrorBoundary
      fallbackRender={() => (
        <>{errorComponent || <ErrorComponent errorText={errorText} />}</>
      )}
    >
      <Suspense
        fallback={
          loadingComponent || (
            <LoadingBox>
              <FullWidthImage src={LoadingImage.src} alt='' />
            </LoadingBox>
          )
        }
      >
        {children}
      </Suspense>
    </ErrorBoundary>
  )
}

export default AsyncBoundary

const ErrorComponent = ({
  errorText = '500 ERROR'
}: {
  errorText?: string
}) => <Preparing text={errorText} />
