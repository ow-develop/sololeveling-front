import ModalLayout from '~/common/modal/modal-layout'
import React, { useState } from 'react'
import GetTestTokenContent from './get-test-token-content'
import SvgIcon from '~/common/svg-icon'
import {
  MaticTokenIcon,
  CryptoUsdcIcon
} from '@ow-develop/ow-icons/react/integration'
import FaucetContract from '~/contracts/faucet'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import TestUSDCContract from '~/contracts/test-usdc'
import { BigNumber } from 'ethers'
import useUSDCBalanceQuery from '~/hooks/queries/useUSDCBalanceQuery'
import useMaticBalanceQuery from '~/hooks/queries/useMaticBalanceQuery'
import { convertToLocale } from '~/utils/formatNumber'
export interface GetTokenStep {
  title: string
  description: string
  icon: JSX.Element
  totalAmount: string
  myBalance: string
  buttonText: string
  buttonDisable: boolean
  loading: boolean
  onClick: () => void
}
const GUIDE_TEXT = 'You need to get STEP 1 Gas Fee Token first.'
const GetTestTokenModal = () => {
  const { signer } = useWeb3AuthContext()
  const { data: maticBalance } = useMaticBalanceQuery()
  const { data: USDCBalance } = useUSDCBalanceQuery()

  // matic balance <= 0.5, usdc balance === 0
  const [guideText, setGuideText] = useState('')
  const [maticLoading, setMaticLoading] = useState(false)
  const [USDCLoading, setUSDCLoading] = useState(false)

  // MATIC balance 가 0.5 이하일 때
  const getGasFee = async () => {
    setMaticLoading(true)
    const faucetContract = await new FaucetContract()
    await faucetContract.mint(await signer.getAddress())
    setMaticLoading(false)
  }

  // USDC balance 가 0일 때
  const getPaymentFee = async () => {
    setUSDCLoading(true)
    const testUSDCContract = await new TestUSDCContract(signer)

    await testUSDCContract.mint(
      await signer.getAddress(),
      BigNumber.from(1000 * 10 ** 6) // convertUSDToUSDC(1000)
    )
    setUSDCLoading(false)
  }

  const getTokenStepList: GetTokenStep[] = [
    {
      title: 'Get Gas Fee Token',
      description:
        'The gas token used to submit the transaction. You can only receive it if your balance is less than 0.5 MATIC.',
      icon: <SvgIcon icon={<MaticTokenIcon />} size={20} />,
      totalAmount: '3',
      myBalance: convertToLocale(maticBalance.MATIC ?? 0, 3),
      buttonText: 'Claim',
      buttonDisable: maticBalance.MATIC > 0.5,
      loading: maticLoading,
      onClick: getGasFee
    },
    {
      title: 'Get Payment Token',
      description:
        'A payment token used for service features. You can only receive them if your balance is less than 1 USDC.',
      icon: <SvgIcon icon={<CryptoUsdcIcon />} size={18} />,
      totalAmount: '1,000',
      myBalance: convertToLocale(USDCBalance.USDC, 3),
      buttonText: 'Claim',
      buttonDisable: maticBalance.MATIC <= 0.5 || USDCBalance.USDC > 0,
      loading: USDCLoading,
      onClick: getPaymentFee
    }
  ]

  return (
    <ModalLayout contentWidth='md'>
      <ModalLayout.Header title='Get Test Token' />
      <GetTestTokenContent list={getTokenStepList} guideText={guideText} />
    </ModalLayout>
  )
}
export default GetTestTokenModal
