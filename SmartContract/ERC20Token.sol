// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract HydromotionCoin is ERC20, ERC20Burnable, Ownable {
    address presaleAddress;

    constructor(address presaleContract) ERC20("HydromotionCoin", "HYM") {
        presaleAddress = presaleContract;
        _mint(presaleContract, 40000000000 * 10**2);
        _mint(msg.sender, 10000000000 * 10**2);
    }

    function mint(address to, uint256 amount) public {
        require(
            msg.sender == presaleAddress || msg.sender == owner(),
            "Only Called with Presale Smart Contract or Owner"
        );

        _mint(to, amount);
    }

    function presaleTransfer(address to, uint256 amount)
        public
        virtual
        returns (bool)
    {
        require(
            msg.sender == presaleAddress || msg.sender == owner(),
            "Only Called with Presale Smart Contract or Owner"
        );
        address owner = tx.origin;
        _transfer(owner, to, amount);
        return true;
    }

    function setPresaleAddress(address add) external onlyOwner {
        presaleAddress = add;
    }

    function decimals() public view virtual override returns (uint8) {
        return 2;
    }
}
