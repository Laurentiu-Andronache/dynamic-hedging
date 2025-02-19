export const O_TOKEN_REGISTRY_ABI = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_addressBook",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "tokenAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "creator",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "underlying",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "strike",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "collateral",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "strikePrice",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "expiry",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "isPut",
        type: "bool",
      },
    ],
    name: "OtokenCreated",
    type: "event",
  },
  {
    inputs: [],
    name: "addressBook",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlyingAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_strikeAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isPut",
        type: "bool",
      },
    ],
    name: "createOtoken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlyingAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_strikeAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isPut",
        type: "bool",
      },
    ],
    name: "getOtoken",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getOtokensLength",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_underlyingAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_strikeAsset",
        type: "address",
      },
      {
        internalType: "address",
        name: "_collateralAsset",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_strikePrice",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_expiry",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "_isPut",
        type: "bool",
      },
    ],
    name: "getTargetOtokenAddress",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "otokens",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
