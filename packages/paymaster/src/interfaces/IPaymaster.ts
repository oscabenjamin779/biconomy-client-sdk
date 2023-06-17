import { UserOperation } from '@biconomy-devx/core-types'

export interface IPaymaster {
  getPaymasterAndData(userOp: Partial<UserOperation>): Promise<string>
}
