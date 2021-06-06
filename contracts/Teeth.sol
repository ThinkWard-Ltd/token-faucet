// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

/// @title A personal token for my practice ecosystem
/// @author Lucius
/// @dev Uses OpenZeppelin ERC20 implementation
/// @custom: This is an experimental contract meant for my own personal use.

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

// @custom inheriting all functions from OpenZeppelin ERC20 contract
contract Teeth is ERC20 {
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
        _mint(msg.sender, 10000 * (10**18));
    }

    /// @notice Deposits specified amount of Teeth into wallet
    function faucet(address recipient, uint256 amount) external {
        _mint(recipient, amount);
    }
}
