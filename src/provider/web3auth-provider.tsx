import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from 'react'
import { Web3AuthNoModal } from '@web3auth/no-modal'
import { IProvider, WALLET_ADAPTERS } from '@web3auth/base'
import Config from '~/config'
import {
  OPENLOGIN_NETWORK,
  OpenloginAdapter
} from '@web3auth/openlogin-adapter'
import { signIn, signOut, useSession } from 'next-auth/react'
import { InternalPath } from '~/constants/route'
import { ethers, Signer } from 'ethers'
import { v4 as uuidv4 } from 'uuid'
import { useRouter } from 'next/router'
import { LOGIN_PROVIDER_TYPE } from '@toruslabs/openlogin-utils/src/interfaces'
import { EthereumPrivateKeyProvider } from '@web3auth/ethereum-provider'
import { useSetRecoilState } from 'recoil'
import { eventModalState } from '~/atoms/common'
import Contract from '~/contracts'

const Web3AuthContext = createContext<{
  web3Auth?: Web3AuthNoModal
  provider?: IProvider
  signer?: Signer
  logout?: () => Promise<void>
  connectSocialWallet?: (loginProvider: LOGIN_PROVIDER_TYPE) => void
  contract?: typeof Contract
}>({
  web3Auth: null,
  provider: null,
  signer: null,
  contract: null
})

const Web3AuthProvider = ({ children }: { children: ReactNode }) => {
  const setEventModalState = useSetRecoilState(eventModalState)
  const [web3Auth, setWeb3Auth] = useState<Web3AuthNoModal | null>(null)
  const [isWeb3AuthMount, setIsWeb3AuthMount] = useState(false)
  const [provider, setProvider] = useState<IProvider | null>(null)
  const [signer, setSigner] = useState<Signer | null>(null)
  const [contractMap, setContractMap] = useState(Contract)
  const { status, ...data } = useSession()
  const { push } = useRouter()

  const isConnected = useMemo(
    () => !!web3Auth?.connectedAdapterName,
    [web3Auth?.connectedAdapterName]
  )

  const initializeWeb3Auth = async () => {
    try {
      const web3authInstance = new Web3AuthNoModal({
        clientId: Config.WEB3_AUTH_CLIENT_ID,
        chainConfig: Config.chainConfig,
        web3AuthNetwork: OPENLOGIN_NETWORK.SAPPHIRE_MAINNET,
        sessionTime: Config.SESSION_TIME,
        enableLogging: process.env.NEXT_PUBLIC_BRANCH !== 'beta'
      })

      const privateKeyProvider = new EthereumPrivateKeyProvider({
        config: { chainConfig: Config.chainConfig }
      })

      const openloginAdapter = new OpenloginAdapter({
        privateKeyProvider,
        adapterSettings: {
          network: OPENLOGIN_NETWORK.SAPPHIRE_MAINNET,
          uxMode: 'redirect',
          whiteLabel: {
            appName: 'Solo Leveling : Unlimited',
            appUrl: 'https://beta.sololeveling.otherworld.network/',
            logoLight:
              'https://beta.sololeveling.otherworld.network/favicon.ico',
            logoDark:
              'https://beta.sololeveling.otherworld.network/favicon.ico',
            defaultLanguage: 'ko',
            mode: 'dark',
            theme: {
              primary: '#0364FF'
            },
            useLogoLoader: true
          },
          loginConfig: {
            google: {
              verifier: 'google-dev',
              clientId: Config.GOOGLE_CLIENT_ID,
              typeOfLogin: 'google'
            }
          }
        }
      })
      web3authInstance.configureAdapter(openloginAdapter)

      await web3authInstance.init()
      setWeb3Auth(web3authInstance)
      setProvider(web3authInstance.provider)
      setIsWeb3AuthMount(true)
    } catch (error) {
      console.error(error)
    }
  }

  const login = async () => {
    const message = uuidv4()
    const ethersProvider = new ethers.providers.Web3Provider(provider)
    const signer = ethersProvider.getSigner()
    const address = await signer.getAddress()
    const signature = await signer.signMessage(message)

    await signIn('Credential', {
      address,
      message,
      signature,
      callbackUrl: InternalPath.HOME,
      redirect: false
    }).then((res) => {
      if (res.ok) {
        push(InternalPath.HOME)
      } else {
        logout()
      }
    })
  }

  const connectSocialWallet = async (loginProvider: LOGIN_PROVIDER_TYPE) => {
    await web3Auth.connectTo(WALLET_ADAPTERS.OPENLOGIN, {
      loginProvider,
      mfaLevel: 'none'
    })
  }

  const logout = async () => {
    setEventModalState(true)
    if (isConnected) {
      await web3Auth?.logout()
    }
    setSigner(null)
    initializeContracts(null)

    if (status === 'authenticated') {
      await signOut({ redirect: false })
      await push(InternalPath.HOME)
    }
  }

  const initializeContracts = (signer?: Signer) => {
    setContractMap((prev) => {
      Object.values(prev).forEach((contract) => {
        contract.initialize(signer)
      })

      return prev
    })
  }

  const initializeSigner = async () => {
    console.time('SIGNER, CONTRACT INIT')
    const ethersProvider = new ethers.providers.Web3Provider(provider)
    const signer = ethersProvider.getSigner()
    setSigner(signer)
    initializeContracts(signer)
    console.timeEnd('SINGER, CONTRACT INIT')
  }

  useEffect(() => {
    initializeWeb3Auth()
  }, [])

  // Social 로그인이 성공하고 업데이트되면 signer를 생성한다.
  useEffect(() => {
    if (isConnected && isWeb3AuthMount) {
      initializeSigner()
    }
  }, [isConnected, isWeb3AuthMount])

  // Web3Auth는 연결되었지만 프론트와 API단의 세션 인증은 하지 않았을 때
  useEffect(() => {
    if (status === 'unauthenticated' && isConnected && isWeb3AuthMount) {
      login()
    }
  }, [isConnected, status, isWeb3AuthMount])

  // 예외케이스 : 사용중 Web3Auth 연결이 끊겼을 때 로그아웃
  useEffect(() => {
    if (!isConnected && isWeb3AuthMount && status === 'authenticated') {
      logout()
    }
  }, [isConnected, status, isWeb3AuthMount])

  const value = useMemo(
    () => ({
      web3Auth,
      provider,
      signer,
      logout,
      connectSocialWallet,
      contract: contractMap
    }),
    [web3Auth, provider, signer, logout, connectSocialWallet]
  )

  return (
    <Web3AuthContext.Provider value={value}>
      {children}
    </Web3AuthContext.Provider>
  )
}

export const useWeb3AuthContext = () => useContext(Web3AuthContext)

export default Web3AuthProvider
