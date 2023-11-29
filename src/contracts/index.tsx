import DungeonGateContract from '~/contracts/dungeon-gate'
import SeasonContract from '~/contracts/season'
import ShopContract from '~/contracts/shop'
import SystemContract from '~/contracts/system'
import ApproveControllerContract from '~/contracts/approve-controller'
import FaucetContract from '~/contracts/faucet'
import TestUSDCContract from '~/contracts/test-usdc'
import GateKeyContract from '~/contracts/gate-key'
import SeasonSettlementContract from '~/contracts/season-settlement'
import RandomContract from '~/contracts/random'
import ERC20Contract from '~/contracts/erc20'
import Config from '~/config'

const Contract = {
  DungeonGateContract: new DungeonGateContract(),
  SeasonContract: new SeasonContract(),
  SystemContract: new SystemContract(),
  ShopContract: new ShopContract(),
  ApproveControllerContract: new ApproveControllerContract(),
  FaucetContract: new FaucetContract(),
  TestUSDCContract: new TestUSDCContract(),
  GateKeyContract: new GateKeyContract(),
  SeasonSettlementContract: new SeasonSettlementContract(),
  RandomContract: new RandomContract(),
  USDCContract: new ERC20Contract(Config.TestUSDC)
}

export default Contract
