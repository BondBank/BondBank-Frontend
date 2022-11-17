export const CreateBondandAdminRole_CONTRACT_ADDRESS =
  '0xb3687dE80846c8677633a8280A4c23A19f75d25f';

export const BuyandRedeemBonds_CONTRACT_ADDRESS =
  '0xfC0c1ab9c7cAD2706F98e1742C59711832B6f7F5';

export const BuyandRedeemBondsInstance_CONTRACT_ABI = '';
export const ReturnBondInfo_CONTRACT_ABI = '';

export const contr = [
  '0xeE1aC1468dB9362c992B218F301BaB0f4eF34660',
  '0xbeb4B847Da6c704DB1c0ee9622b87178e2bD3eEA',
  '0x62e8CFf05fFccAF468Efd72cC0b8c31f47403eaB',
  '0xcD29cABcfEFaDd49C4b7F1207001d7c5b755Cc8D',
  '0xb3687dE80846c8677633a8280A4c23A19f75d25f',
];

export const CreateBondandAdminRole_CONTRACT_ABI = [
  {
    inputs: [],
    name: 'addADMINrole',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    stateMutability: 'nonpayable',
    type: 'constructor',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'ApprovalForAll',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'bondId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'bondName',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'bondAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'bondBuyTime',
        type: 'uint256',
      },
    ],
    name: 'BondBought',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'bondId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'bondName',
        type: 'string',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'bondStartDate',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'bondMaturityDate',
        type: 'uint256',
      },
    ],
    name: 'BondCreated',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'uint256',
        name: 'bondId',
        type: 'uint256',
      },
      {
        indexed: true,
        internalType: 'string',
        name: 'bondName',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'bondAmount',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'bondRedeemTime',
        type: 'uint256',
      },
    ],
    name: 'BondRedeemed',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'Bondredemption',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'buybond',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'collectfunds',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'string',
        name: 'bondName',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'bondMaturityDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'createBond',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [],
    name: 'depostitETH',
    outputs: [],
    stateMutability: 'payable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155BatchReceived',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'onERC1155Received',
    outputs: [
      {
        internalType: 'bytes4',
        name: '',
        type: 'bytes4',
      },
    ],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'performUpkeep',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        internalType: 'uint256[]',
        name: 'amounts',
        type: 'uint256[]',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeBatchTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
      {
        internalType: 'bytes',
        name: 'data',
        type: 'bytes',
      },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        internalType: 'bool',
        name: 'approved',
        type: 'bool',
      },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
      {
        indexed: false,
        internalType: 'uint256[]',
        name: 'values',
        type: 'uint256[]',
      },
    ],
    name: 'TransferBatch',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'from',
        type: 'address',
      },
      {
        indexed: true,
        internalType: 'address',
        name: 'to',
        type: 'address',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
      {
        indexed: false,
        internalType: 'uint256',
        name: 'value',
        type: 'uint256',
      },
    ],
    name: 'TransferSingle',
    type: 'event',
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: 'string',
        name: 'value',
        type: 'string',
      },
      {
        indexed: true,
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'URI',
    type: 'event',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'amount',
        type: 'uint256',
      },
    ],
    name: 'WithdrawETH',
    outputs: [],
    stateMutability: 'nonpayable',
    type: 'function',
  },
  {
    stateMutability: 'payable',
    type: 'receive',
  },
  {
    inputs: [],
    name: 'ADDRESSES_PROVIDER',
    outputs: [
      {
        internalType: 'contract IPoolAddressesProvider',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'adminrole',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'aWETH',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'balanceOf',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address[]',
        name: 'accounts',
        type: 'address[]',
      },
      {
        internalType: 'uint256[]',
        name: 'ids',
        type: 'uint256[]',
      },
    ],
    name: 'balanceOfBatch',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'bondInfo',
    outputs: [
      {
        internalType: 'string',
        name: 'bondName',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'bondStartDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'bondMaturityDate',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'BondManager',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'BondsinExistence',
    outputs: [
      {
        internalType: 'string',
        name: 'bondName',
        type: 'string',
      },
      {
        internalType: 'uint256',
        name: 'bondStartDate',
        type: 'uint256',
      },
      {
        internalType: 'uint256',
        name: 'bondMaturityDate',
        type: 'uint256',
      },
      {
        internalType: 'address',
        name: 'BondManager',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'buyers',
    outputs: [
      {
        internalType: 'address payable',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'checkIfAddminRoleIsPresent',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    name: 'checkUpkeep',
    outputs: [
      {
        internalType: 'bool',
        name: 'upkeepNeeded',
        type: 'bool',
      },
      {
        internalType: 'bytes',
        name: '',
        type: 'bytes',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'commentedCode',
    outputs: [],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'Gateway',
    outputs: [
      {
        internalType: 'contract WETHgateway',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'getAllBonds',
    outputs: [
      {
        components: [
          {
            internalType: 'string',
            name: 'bondName',
            type: 'string',
          },
          {
            internalType: 'uint256',
            name: 'bondStartDate',
            type: 'uint256',
          },
          {
            internalType: 'uint256',
            name: 'bondMaturityDate',
            type: 'uint256',
          },
          {
            internalType: 'address',
            name: 'BondManager',
            type: 'address',
          },
          {
            internalType: 'address payable[]',
            name: 'buyers',
            type: 'address[]',
          },
        ],
        internalType: 'struct CreateBondandAdminRole.Info[]',
        name: '',
        type: 'tuple[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'getbondsByBuyersAddr',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'addr',
        type: 'address',
      },
    ],
    name: 'getUserCreatedBonds',
    outputs: [
      {
        internalType: 'uint256[]',
        name: '',
        type: 'uint256[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'interval',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: 'account',
        type: 'address',
      },
      {
        internalType: 'address',
        name: 'operator',
        type: 'address',
      },
    ],
    name: 'isApprovedForAll',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'lastTimeStamp',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'linkAddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'numberofBondsinCirculation',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'OnlyoneBond',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'POOL',
    outputs: [
      {
        internalType: 'contract IPool',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'pooladdress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'Pooladdress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: 'id',
        type: 'uint256',
      },
    ],
    name: 'returnbuyers',
    outputs: [
      {
        internalType: 'address payable[]',
        name: '',
        type: 'address[]',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'bytes4',
        name: 'interfaceId',
        type: 'bytes4',
      },
    ],
    name: 'supportsInterface',
    outputs: [
      {
        internalType: 'bool',
        name: '',
        type: 'bool',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'Swapaddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'uri',
    outputs: [
      {
        internalType: 'string',
        name: '',
        type: 'string',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    name: 'userCreatedBonds',
    outputs: [
      {
        internalType: 'uint256',
        name: '',
        type: 'uint256',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'WETHgatewayAddr',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'WETHgatewayaddress',
    outputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [
      {
        internalType: 'address',
        name: '',
        type: 'address',
      },
    ],
    name: 'WETHgatewaycontract',
    outputs: [
      {
        internalType: 'contract WETHgateway',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
  {
    inputs: [],
    name: 'WETHgatewayContract',
    outputs: [
      {
        internalType: 'contract IWETHGateway',
        name: '',
        type: 'address',
      },
    ],
    stateMutability: 'view',
    type: 'function',
  },
];

export const BuyandRedeemBonds_CONTRACT_ABI = [
  { type: 'constructor', payable: false, inputs: [] },
  {
    type: 'event',
    anonymous: false,
    name: 'Approval',
    inputs: [
      { type: 'address', name: 'owner', indexed: true },
      { type: 'address', name: 'spender', indexed: true },
      { type: 'uint256', name: 'amount', indexed: false },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    name: 'ApprovalForAll',
    inputs: [
      { type: 'address', name: 'account', indexed: true },
      { type: 'address', name: 'operator', indexed: true },
      { type: 'bool', name: 'approved', indexed: false },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    name: 'BondBought',
    inputs: [
      { type: 'uint256', name: 'bondId', indexed: true },
      { type: 'string', name: 'bondName', indexed: true },
      { type: 'uint256', name: 'bondAmount', indexed: true },
      { type: 'uint256', name: 'bondBuyTime', indexed: false },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    name: 'BondCreated',
    inputs: [
      { type: 'uint256', name: 'bondId', indexed: true },
      { type: 'string', name: 'bondName', indexed: true },
      { type: 'uint256', name: 'bondStartDate', indexed: false },
      { type: 'uint256', name: 'bondMaturityDate', indexed: false },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    name: 'BondRedeemed',
    inputs: [
      { type: 'uint256', name: 'bondId', indexed: true },
      { type: 'string', name: 'bondName', indexed: true },
      { type: 'uint256', name: 'bondAmount', indexed: true },
      { type: 'uint256', name: 'bondRedeemTime', indexed: false },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    name: 'Transfer',
    inputs: [
      { type: 'address', name: 'from', indexed: true },
      { type: 'address', name: 'to', indexed: true },
      { type: 'uint256', name: 'amount', indexed: false },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    name: 'TransferBatch',
    inputs: [
      { type: 'address', name: 'operator', indexed: true },
      { type: 'address', name: 'from', indexed: true },
      { type: 'address', name: 'to', indexed: true },
      { type: 'uint256[]', name: 'ids', indexed: false },
      { type: 'uint256[]', name: 'values', indexed: false },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    name: 'TransferSingle',
    inputs: [
      { type: 'address', name: 'operator', indexed: true },
      { type: 'address', name: 'from', indexed: true },
      { type: 'address', name: 'to', indexed: true },
      { type: 'uint256', name: 'id', indexed: false },
      { type: 'uint256', name: 'value', indexed: false },
    ],
  },
  {
    type: 'event',
    anonymous: false,
    name: 'URI',
    inputs: [
      { type: 'string', name: 'value', indexed: false },
      { type: 'uint256', name: 'id', indexed: true },
    ],
  },
  {
    type: 'function',
    name: 'ADDRESSES_PROVIDER',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'address' }],
  },
  {
    type: 'function',
    name: 'Bondredemption',
    constant: false,
    payable: false,
    inputs: [{ type: 'uint256', name: 'id' }],
    outputs: [],
  },
  {
    type: 'function',
    name: 'BondsinExistence',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'uint256' }],
    outputs: [
      { type: 'string', name: 'bondName' },
      { type: 'uint256', name: 'bondStartDate' },
      { type: 'uint256', name: 'bondMaturityDate' },
      { type: 'address', name: 'BondManager' },
    ],
  },
  {
    type: 'function',
    name: 'OnlyoneBond',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'address' }],
    outputs: [{ type: 'bool' }],
  },
  {
    type: 'function',
    name: 'POOL',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'address' }],
  },
  {
    type: 'function',
    name: 'Pooladdress',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'address' }],
  },
  {
    type: 'function',
    name: 'WETHgatewayContract',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'address' }],
  },
  {
    type: 'function',
    name: 'WETHgatewayaddress',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'address' }],
  },
  {
    type: 'function',
    name: 'WithdrawETH',
    constant: false,
    payable: false,
    inputs: [{ type: 'uint256', name: 'amount' }],
    outputs: [],
  },
  {
    type: 'function',
    name: 'aWETH',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'address' }],
  },
  {
    type: 'function',
    name: 'addADMINrole',
    constant: false,
    stateMutability: 'payable',
    payable: true,
    inputs: [],
    outputs: [],
  },
  {
    type: 'function',
    name: 'adminrole',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'address' }],
    outputs: [{ type: 'bool' }],
  },
  {
    type: 'function',
    name: 'balanceOf',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [
      { type: 'address', name: 'account' },
      { type: 'uint256', name: 'id' },
    ],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'balanceOf',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'address' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'balanceOfBatch',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [
      { type: 'address[]', name: 'accounts' },
      { type: 'uint256[]', name: 'ids' },
    ],
    outputs: [{ type: 'uint256[]' }],
  },
  {
    type: 'function',
    name: 'bondInfo',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'uint256' }],
    outputs: [
      { type: 'string', name: 'bondName' },
      { type: 'uint256', name: 'bondStartDate' },
      { type: 'uint256', name: 'bondMaturityDate' },
      { type: 'address', name: 'BondManager' },
    ],
  },
  {
    type: 'function',
    name: 'burnshares',
    constant: false,
    payable: false,
    inputs: [
      { type: 'address', name: '_from' },
      { type: 'uint256', name: '_shares' },
    ],
    outputs: [],
  },
  {
    type: 'function',
    name: 'buybond',
    constant: false,
    stateMutability: 'payable',
    payable: true,
    inputs: [{ type: 'uint256', name: 'id' }],
    outputs: [],
  },
  {
    type: 'function',
    name: 'buyers',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'uint256' }],
    outputs: [{ type: 'address' }],
  },
  {
    type: 'function',
    name: 'checkIfAddminRoleIsPresent',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'bool' }],
  },
  {
    type: 'function',
    name: 'checkUpkeep',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'bytes' }],
    outputs: [{ type: 'bool', name: 'upkeepNeeded' }, { type: 'bytes' }],
  },
  {
    type: 'function',
    name: 'collectfunds',
    constant: false,
    payable: false,
    inputs: [],
    outputs: [],
  },
  {
    type: 'function',
    name: 'createBond',
    constant: false,
    payable: false,
    inputs: [
      { type: 'string', name: 'bondName' },
      { type: 'uint256', name: 'bondMaturityDate' },
      { type: 'uint256', name: 'amount' },
    ],
    outputs: [],
  },
  {
    type: 'function',
    name: 'deposit',
    constant: false,
    stateMutability: 'payable',
    payable: true,
    inputs: [],
    outputs: [],
  },
  {
    type: 'function',
    name: 'depositETH',
    constant: false,
    stateMutability: 'payable',
    payable: true,
    inputs: [],
    outputs: [],
  },
  {
    type: 'function',
    name: 'getAllBonds',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [
      {
        type: 'tuple[]',
        components: [
          { type: 'string', name: 'bondName' },
          { type: 'uint256', name: 'bondStartDate' },
          { type: 'uint256', name: 'bondMaturityDate' },
          { type: 'address', name: 'BondManager' },
          { type: 'address[]', name: 'buyers' },
        ],
      },
    ],
  },
  {
    type: 'function',
    name: 'getUserCreatedBonds',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'address', name: 'addr' }],
    outputs: [{ type: 'uint256[]' }],
  },
  {
    type: 'function',
    name: 'getbondsByBuyersAddr',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'address', name: 'addr' }],
    outputs: [{ type: 'uint256[]' }],
  },
  {
    type: 'function',
    name: 'interval',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'isApprovedForAll',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [
      { type: 'address', name: 'account' },
      { type: 'address', name: 'operator' },
    ],
    outputs: [{ type: 'bool' }],
  },
  {
    type: 'function',
    name: 'lastTimeStamp',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'mintshares',
    constant: false,
    payable: false,
    inputs: [
      { type: 'address', name: '_to' },
      { type: 'uint256', name: '_shares' },
    ],
    outputs: [],
  },
  {
    type: 'function',
    name: 'onERC1155BatchReceived',
    constant: false,
    payable: false,
    inputs: [
      { type: 'address' },
      { type: 'address' },
      { type: 'uint256[]' },
      { type: 'uint256[]' },
      { type: 'bytes' },
    ],
    outputs: [{ type: 'bytes4' }],
  },
  {
    type: 'function',
    name: 'onERC1155Received',
    constant: false,
    payable: false,
    inputs: [
      { type: 'address' },
      { type: 'address' },
      { type: 'uint256' },
      { type: 'uint256' },
      { type: 'bytes' },
    ],
    outputs: [{ type: 'bytes4' }],
  },
  {
    type: 'function',
    name: 'performUpkeep',
    constant: false,
    payable: false,
    inputs: [{ type: 'bytes' }],
    outputs: [],
  },
  {
    type: 'function',
    name: 'pooladdress',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'address' }],
  },
  {
    type: 'function',
    name: 'returnbalance',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'returnbuyers',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'uint256', name: 'id' }],
    outputs: [{ type: 'address[]' }],
  },
  {
    type: 'function',
    name: 'safeBatchTransferFrom',
    constant: false,
    payable: false,
    inputs: [
      { type: 'address', name: 'from' },
      { type: 'address', name: 'to' },
      { type: 'uint256[]', name: 'ids' },
      { type: 'uint256[]', name: 'amounts' },
      { type: 'bytes', name: 'data' },
    ],
    outputs: [],
  },
  {
    type: 'function',
    name: 'safeTransferFrom',
    constant: false,
    payable: false,
    inputs: [
      { type: 'address', name: 'from' },
      { type: 'address', name: 'to' },
      { type: 'uint256', name: 'id' },
      { type: 'uint256', name: 'amount' },
      { type: 'bytes', name: 'data' },
    ],
    outputs: [],
  },
  {
    type: 'function',
    name: 'setApprovalForAll',
    constant: false,
    payable: false,
    inputs: [
      { type: 'address', name: 'operator' },
      { type: 'bool', name: 'approved' },
    ],
    outputs: [],
  },
  {
    type: 'function',
    name: 'supportsInterface',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'bytes4', name: 'interfaceId' }],
    outputs: [{ type: 'bool' }],
  },
  {
    type: 'function',
    name: 'totalSupply',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'uri',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'uint256' }],
    outputs: [{ type: 'string' }],
  },
  {
    type: 'function',
    name: 'userCreatedBonds',
    constant: true,
    stateMutability: 'view',
    payable: false,
    inputs: [{ type: 'address' }, { type: 'uint256' }],
    outputs: [{ type: 'uint256' }],
  },
  {
    type: 'function',
    name: 'withdraw',
    constant: false,
    payable: false,
    inputs: [],
    outputs: [],
  },
];
