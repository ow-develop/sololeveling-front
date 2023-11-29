import { TransactionApiDto } from '~/types/api'
import { GateCleared, GateCreated } from '~/types/events'

export interface FetchClearGateDto extends TransactionApiDto {
  gateCleared: GateCleared
}

export interface FetchCreateGateDto extends TransactionApiDto {
  gateCreated: GateCreated
}
