import { fetchClaimGateKey, fetchGetClaimGateKeySignature } from '~/api/shop'
import { convertToISOString } from '~/lib/ethers-util'
import { HunterRank } from '~/constants/hunter'
import { useWeb3AuthContext } from '~/provider/web3auth-provider'

export const useKeyMinted = () => {
  const {
    signer,
    contract: { GateKeyContract }
  } = useWeb3AuthContext()

  const keyMinted = async () => {
    const whitelistSignature = await fetchGetClaimGateKeySignature()
    const { txHash, blockNumber, keyMinted } =
      await GateKeyContract.mintKeyByWhitelist(
        HunterRank.E,
        1,
        whitelistSignature
      )

    const signature = await GateKeyContract.getSignatureByTxHash(txHash)

    await fetchClaimGateKey({
      signature,
      txHash,
      blockNumber,
      blockDate: convertToISOString(keyMinted.timestamp),
      keyMinted
    })

    return { txHash }
  }
  return { keyMinted }
}
