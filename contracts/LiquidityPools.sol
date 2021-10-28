pragma solidity >=0.5.0 <0.7.0;

import "./LiquidityPool.sol";
import "./OptionsProtocol.sol";

contract LiquidityPools {

  address public protocol;
  // maps a strikeAsset to a liquidity pool
  mapping(address => address) public strikeAssets;

  event LiquidityPoolCreated(address lp, address strikeAsset);

  function createLiquidityPool(address _strikeAsset, address underlying, uint rfr, uint iv, string memory name, string memory symbol) public {
    address lp = strikeAssets[_strikeAsset];
    require(lp == address(0), "Liquidity Pool already exists");
    lp = address(new LiquidityPool(
       protocol,
       _strikeAsset,
       underlying,
       rfr,
       iv,
       name,
       symbol
    ));
    strikeAssets[_strikeAsset] = lp;
    LiquidityPool(lp).transferOwnership(msg.sender);
    emit LiquidityPoolCreated(lp, _strikeAsset);
  }

  function supplyLiquidity(address _strikeAsset, uint amount) public {
    address lp = strikeAssets[_strikeAsset];
    require(lp != address(0), "Liquidity pool does not exist");
    LiquidityPool liquidityPool = LiquidityPool(lp);
  }

  function setup(address _protocol) public {
    require(address(protocol) == address(0), "protocol already set");
    protocol = _protocol;
  }

}
