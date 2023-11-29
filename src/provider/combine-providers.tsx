import { ComponentProps, ComponentType, FC } from 'react'

type Providers = [ComponentType<any>, ComponentProps<any>?][]

const CombineProviders = (providers: Providers): FC<any> => {
  return providers.reduce(
    (AccumulatedProviders, [Provider, props = {}]) =>
      ({ children }) => {
        return (
          <AccumulatedProviders>
            <Provider {...props}>{children}</Provider>
          </AccumulatedProviders>
        )
      },
    ({ children }) => <>{children}</>
  )
}

export default CombineProviders
