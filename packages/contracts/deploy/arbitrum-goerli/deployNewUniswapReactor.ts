import { toWei } from "../../utils/conversion-helper"
import hre, { ethers } from "hardhat"
import { MintableERC20 } from "../../types/MintableERC20"
import { UniswapV3HedgingReactor } from "../../types/UniswapV3HedgingReactor"
import { truncate } from "@ragetrade/sdk"

// update these addresses to connect to the appropriate set of contracts

const usdcAddress = "0x6775842ae82bf2f0f987b10526768ad89d79536e"
const wethAddress = "0x53320bE2A35649E9B2a0f244f9E9474929d3B699"
const liquidityPoolAddress = "0x2ceDe96cd46C9B751EeB868A57FEDeD060Dbe6Bf"
const authorityAddress = "0xA524f4F9046a243c67A07dDE2D9477bf320Ed89E"
const priceFeedAddress = "0xDcA6c35228acb82363406CB2e7eee81B40c692aE"
const optionProtocolAddress = "0x865Bd85b7275a33C87E8a7E31a125DD6338e6747"
const uniswapV3SwapRouter = "0xE592427A0AEce92De3Edee1F18E0157C05861564"

export async function deployNewHedgingReactor() {
	const uniswapHedgingReactorFactory = await ethers.getContractFactory("UniswapV3HedgingReactor")
	const uniswapHedgingReactor = (await uniswapHedgingReactorFactory.deploy(
		uniswapV3SwapRouter,
		usdcAddress,
		wethAddress,
		liquidityPoolAddress,
		3000,
		priceFeedAddress,
		authorityAddress
	)) as UniswapV3HedgingReactor

	console.log("uniswap hedging reactor deployed")

	try {
		await hre.run("verify:verify", {
			address: uniswapHedgingReactor.address,
			constructorArguments: [
				uniswapV3SwapRouter,
				usdcAddress,
				wethAddress,
				liquidityPoolAddress,
				3000,
				priceFeedAddress,
				authorityAddress
			]
		})
		console.log("uniswap hedging reactor verified")
	} catch (err: any) {
		if (err.message.includes("Reason: Already Verified")) {
			console.log("uniswap hedging reactor contract already verified")
		}
	}

	const optionProtocol = await ethers.getContractAt(
		"contracts/Protocol.sol:Protocol",
		optionProtocolAddress
	)

	const liquidityPool = await ethers.getContractAt("LiquidityPool", liquidityPoolAddress)
	await liquidityPool.setHedgingReactorAddress(uniswapHedgingReactor.address)
	console.log("hedging reactors added to liquidity pool")
	console.log({ newReactorAddress: uniswapHedgingReactor.address })
}

deployNewHedgingReactor()
	.then(() => process.exit(0))
	.catch(error => {
		console.error(error)
		process.exit(1)
	})
