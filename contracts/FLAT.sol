// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.6;

import "./ERC20.sol";
import "./ERC20Detailed.sol";

/**
 * @title SimpleToken
 * @dev Very simple ERC20 Token example, where all tokens are pre-assigned to the creator.
 * Note they can later distribute these tokens as they wish using `transfer` and other
 * `ERC20` functions.
 */
contract FLAT is ERC20, ERC20Detailed {

    /**
     * @dev Constructor that gives msg.sender all of existing tokens.
     */
    constructor () ERC20Detailed("FlatCoin", "FLAT", 6) {
        _mint(msg.sender, 1000000 * (10 ** uint256(decimals())));
    }
}