import useGateQuery from './useGateQuery'

import { fetchCreateGate } from '~/api/dungeon'
import Config from '~/config'
import { ERC1155CollectionType } from '~/constants/contracts'
import { HunterRank } from '~/constants/hunter'
import ERC1155Contract from '~/contracts/erc1155'
import useCurrentBlockNumber from '~/hooks/queries/useCurrentBlockNumber'
import useAuth from '~/hooks/useAuth'
import useToastAction from '~/hooks/useToastAction'
import { convertToISOString, convertUSDToUSDC } from '~/lib/ethers-util'
import { useI18next } from '~/lib/i18n'
import { HunterRankType } from '~/types/common'
import { findKeyByValue } from '~/utils/formatEnum'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'
import useShopListQuery from '../../../shop/src/hooks/useShopListQuery'
import { ethers } from 'ethers'

const useEnterGate = () => {
  const {
    signer,
    contract: { DungeonGateContract, USDCContract }
  } = useWeb3AuthContext()
  const { address } = useAuth()
  const { refetch: refetchCurrentBlockNumber } = useCurrentBlockNumber()
  const { refetch } = useGateQuery()
  const { priceByRank } = useShopListQuery()
  const { showSuccessToast } = useToastAction()
  const { t } = useI18next()

  const validEnterGate = async (rankName: HunterRankType) => {
    const gateKeyContract = new ERC1155Contract(
      ERC1155CollectionType.GATE_KEY
    ).initialize(signer)

    const rankNum: number = findKeyByValue(rankName, HunterRank)
    const price = convertUSDToUSDC(priceByRank(rankName))
    const gateKey = await gateKeyContract.balanceOf(address, rankNum)
    const usdc = await USDCContract.balanceOf()

    return !(gateKey === 0 && usdc.lt(price))
  }

  const enterGate = async (rankName: HunterRankType) => {
    // transaction
    const rankNum: number = findKeyByValue(rankName, HunterRank)
    const { gateCreated, txHash, blockNumber, timestamp } =
      await DungeonGateContract.enterToGate(Config.CURRENT_SEASON_ID, rankNum)
    const signature = await DungeonGateContract.getSignatureByTxHash(txHash)
    showSuccessToast(t('Dungeon Gate has been opened.'))

    refetch()
    // post receipt after transaction
    fetchCreateGate({
      signature,
      txHash,
      blockNumber,
      blockDate: convertToISOString(timestamp),
      gateCreated
    })
      .then((res) => {
        console.log(res.data.message)
        refetchCurrentBlockNumber()
      })
      .catch((err) => console.error(err))
  }

  const hasGateKey = async (rankName: HunterRankType) => {
    const gateKeyContract = new ERC1155Contract(
      ERC1155CollectionType.GATE_KEY
    ).initialize(signer)
    const rankNum: number = findKeyByValue(rankName, HunterRank)
    const gateKeyBalance = await gateKeyContract.balanceOf(address, rankNum)

    return gateKeyBalance > 0
  }

  const checkUSDC = async (rankName: HunterRankType) => {
    const price = convertUSDToUSDC(priceByRank(rankName))
    const USDCBalance = await USDCContract.balanceOf()
    return USDCBalance.gte(price)
  }

  const allowUSDC = async () => {
    const approvedBalance = await USDCContract.allowance(Config.DungeonGate)
    const min = ethers.BigNumber.from(1)
    if (approvedBalance.lt(min)) {
      await USDCContract.approve(Config.DungeonGate)
    }
  }

  return { enterGate, validEnterGate, hasGateKey, allowUSDC, checkUSDC }
}

export default useEnterGate
