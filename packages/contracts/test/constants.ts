// Contract address storage

export enum CHAINID {
	ETH_MAINNET = 1, // eslint-disable-line no-unused-vars
	ETH_KOVAN = 42, // eslint-disable-line no-unused-vars
	AVAX_MAINNET = 43114, // eslint-disable-line no-unused-vars
	AVAX_FUJI = 43113 // eslint-disable-line no-unused-vars
}

/**
 * Tokens and owners
 */
export const WETH_ADDRESS = {
	[CHAINID.ETH_MAINNET]: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
	[CHAINID.ETH_KOVAN]: "0xd0A1E359811322d97991E03f863a0C30C2cF029C",
	[CHAINID.AVAX_MAINNET]: "0xB31f66AA3C1e785363F0875A1B74E27b85FD66c7", // NOTE: Wrapped AVAX token address, not ETH
	[CHAINID.AVAX_FUJI]: "0xD9D01A9F7C810EC035C0e42cB9E80Ef44D7f8692" // NOTE: Wrapped AVAX token address, not ETH
}

export const USDC_ADDRESS = {
	[CHAINID.ETH_MAINNET]: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
	[CHAINID.ETH_KOVAN]: "0x7e6edA50d1c833bE936492BF42C1BF376239E9e2",
	[CHAINID.AVAX_MAINNET]: "0xA7D7079b0FEaD91F3e65f86E8915Cb59c1a4C664",
	[CHAINID.AVAX_FUJI]: "0x6275B63A4eE560004c34431e573314426906cee9"
}

export const USDC_OWNER_ADDRESS = {
	[CHAINID.ETH_MAINNET]: "0x47ac0fb4f2d84898e4d9e7b4dab3c24507a6d503",
	[CHAINID.AVAX_MAINNET]: "0x50ff3b278fcc70ec7a9465063d68029ab460ea04",
	[CHAINID.AVAX_FUJI]: "0x61a74365315d57a79a9c72a8394a8a959a29b9c1"
}

/**
 * Oracles
 */
export const ETH_PRICE_ORACLE = {
	[CHAINID.ETH_MAINNET]: "0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419",
	[CHAINID.AVAX_MAINNET]: "0x0A77230d17318075983913bC2145DB16C7366156", // NOTE: AVAX/USD Chainlink Oracle
	[CHAINID.AVAX_FUJI]: "0x5498BB86BC934c8D34FDA08E81D444153d0D06aD" // NOTE: AVAX/USD Chainlink Oracle
}

export const USDC_PRICE_ORACLE = {
	[CHAINID.ETH_MAINNET]: "0x8fFfFfd4AfB6115b954Bd326cbe7B4BA576818f6",
	[CHAINID.ETH_KOVAN]: "0x9211c6b3BF41A10F78539810Cf5c64e1BB78Ec60",
	[CHAINID.AVAX_MAINNET]: "0xF096872672F44d6EBA71458D74fe67F9a77a23B9",
	[CHAINID.AVAX_FUJI]: "0x7898AcCC83587C3C55116c5230C17a6Cd9C71bad" // NOTE: This is the USDT oracle, no USDC oracle is on avax testnet
}

export const CHAINLINK_WETH_PRICER = {
	[CHAINID.ETH_MAINNET]: "0x128cE9B4D97A6550905dE7d9Abc2b8C747b0996C" // New ChainLink
}

/**
 * Opyn
 */
export const OTOKEN_FACTORY = {
	[CHAINID.ETH_MAINNET]: "0x7C06792Af1632E77cb27a558Dc0885338F4Bdf8E",
	[CHAINID.ETH_KOVAN]: "0xb9D17Ab06e27f63d0FD75099d5874a194eE623e2"
}

export const MARGIN_POOL = {
	[CHAINID.ETH_MAINNET]: "0x5934807cC0654d46755eBd2848840b616256C6Ef",
	[CHAINID.ETH_KOVAN]: "0x8c7C60d766951c5C570bBb7065C993070061b795"
}

export const GAMMA_ORACLE = {
	[CHAINID.ETH_MAINNET]: "0x789cD7AB3742e23Ce0952F6Bc3Eb3A73A0E08833"
}

export const GAMMA_ORACLE_NEW = {
	[CHAINID.ETH_MAINNET]: "0x789cD7AB3742e23Ce0952F6Bc3Eb3A73A0E08833" // New oracle
}

export const GAMMA_WHITELIST = {
	[CHAINID.ETH_MAINNET]: "0xa5EA18ac6865f315ff5dD9f1a7fb1d41A30a6779"
}

export const GAMMA_WHITELIST_OWNER = {
	[CHAINID.ETH_MAINNET]: "0x638E5DA0EEbbA58c67567bcEb4Ab2dc8D34853FB"
}

export const GAMMA_CONTROLLER = {
	[CHAINID.ETH_MAINNET]: "0x4ccc2339F87F6c59c6893E1A678c2266cA58dC72",
	[CHAINID.ETH_KOVAN]: "0xdEE7D0f8CcC0f7AC7e45Af454e5e7ec1552E8e4e"
}

export const ORACLE_OWNER = {
	[CHAINID.ETH_MAINNET]: "0x2FCb2fc8dD68c48F406825255B4446EDFbD3e140"
}

export const UNISWAP_V3_SWAP_ROUTER = {
	[CHAINID.ETH_MAINNET]: "0xE592427A0AEce92De3Edee1F18E0157C05861564"
}

export const CONTROLLER_OWNER = {
	[CHAINID.ETH_MAINNET]: "0x638E5DA0EEbbA58c67567bcEb4Ab2dc8D34853FB"
}

export const ADDRESS_BOOK_OWNER = {
	[CHAINID.ETH_MAINNET]: "0x638E5DA0EEbbA58c67567bcEb4Ab2dc8D34853FB"
}

export const ADDRESS_BOOK = {
	[CHAINID.ETH_MAINNET]: "0x1E31F2DCBad4dc572004Eae6355fB18F9615cBe4"
}
export const ORACLE_DISPUTE_PERIOD = 7200
export const ORACLE_LOCKING_PERIOD = 300
export const oTokenDecimalShift18 = 10000000000
