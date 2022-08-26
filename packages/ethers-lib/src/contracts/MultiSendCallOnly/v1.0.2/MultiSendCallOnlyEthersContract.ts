import { MultiSendCallOnlyContract } from '@biconomy-sdk/core-types'
import {
  MultiSendCallOnlyContractV102 as MultiSendCallOnly_TypeChain,
  MultiSendCallOnlyContractV102Interface
} from '../../../../typechain/src/ethers-v5/v1.0.2/MultiSendCallOnlyContractV102'
import { Contract } from '@ethersproject/contracts'
import { Interface } from '@ethersproject/abi'

class MultiSendCallOnlyEthersContract implements MultiSendCallOnlyContract {
  constructor(public contract: MultiSendCallOnly_TypeChain) {}

  getAddress(): string {
    return this.contract.address
  }

  getContract(): Contract {
    return this.contract
  }

  getInterface(): Interface {
    return this.contract.interface
  }

  encode: MultiSendCallOnlyContractV102Interface['encodeFunctionData'] = (
    methodName: any,
    params: any
  ): string => {
    return this.contract.interface.encodeFunctionData(methodName, params)
  }
}

export default MultiSendCallOnlyEthersContract
