// SPDX-License-Identifier: MIT
pragma solidity >=0.8.9;

import "./libraries/AccessControl.sol";

contract ReferralCode is AccessControl {

    struct CodeDetails {
        address owner;
        uint64 openingTimestamp;
        uint128 notionalTraded;
        uint128 premiumOriginated;

    }

    // mapping of referral code to code details struct
    mapping(bytes32 => CodeDetails) public codeDetails;
    // mapping of addresses authorised to update the details of a code
    mapping(address => bool) public auth;

    event ReferralCodeCreated(bytes32 code, uint256 openingTimestamp);
    event ReferralCodeOwnerChanged(bytes32 code, address newOwner);
    event ReferralCodeDetailsUpdated(bytes32 code, uint256 notionalTraded, uint256 premiumOriginated);
    event AuthChanged(address auth, bool isAuth);
	
    error NotAuth();

	constructor(address _authority) AccessControl(IAuthority(_authority)) {}

    function setAuth(address _auth, bool isAuth) external {
        _onlyGovernor();
        auth[_auth] = isAuth;
        emit AuthChanged(_auth, isAuth);
    }

    function createReferralCode(bytes32 code) external {
        require(code != bytes32(0), "ReferralCode: invalid code");
        require(codeDetails[code].owner == address(0), "ReferralCode: code already in use");
        codeDetails[code].owner = msg.sender;
        codeDetails[code].openingTimestamp = uint64(block.timestamp);
        emit ReferralCodeCreated(code, block.timestamp);
    }

    function setCodeOwner(bytes32 code, address owner) external {
        require(code != bytes32(0), "ReferralCode: invalid code");
        require(codeDetails[code].owner == msg.sender, "ReferralCode: code not owner by sender");
        require(owner != address(0), "ReferralCode: invalid owner address");
        codeDetails[code].owner = owner;
        emit ReferralCodeOwnerChanged(code, owner);
    }
    
    function updateCodeDetails(bytes32 code, uint256 notionalTraded, uint256 premiumOriginated) external {
        _isAuth();
        if (codeDetails[code].owner == address(0)) {
            return;
        } else {
            codeDetails[code].notionalTraded = uint128(notionalTraded);
            codeDetails[code].premiumOriginated = uint128(premiumOriginated);
            emit ReferralCodeDetailsUpdated(code, notionalTraded, premiumOriginated);
        }
    }

    function _isAuth() internal view {
		if (!auth[msg.sender]) {
			revert NotAuth();
		}
	}
}