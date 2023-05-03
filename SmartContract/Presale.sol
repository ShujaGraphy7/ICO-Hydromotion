// SPDX-License-Identifier: MIT
pragma solidity 0.8.17;
import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

interface erc20 {
    function mint(address to, uint256 amount) external;

    function presaleTransfer(address to, uint256 amount)
        external
        returns (bool);
}

contract HydromotionPresale {
    uint256 public minBuy = 1000 * 10**2;

    uint256 totalBought;

    address public erc20Address;
    address private OwnerIs;

    constructor(address _erc20Address) {
        OwnerIs = msg.sender;
        erc20Address = _erc20Address;
    }

    function CurrentPrice() public view returns (uint256) {
        uint256 a = getEURtoUSDPrice() * 1 ether;
        uint256 b = getUSDtoETHPrice() * 1 ether;

        if (totalBought <= 10000000000 * 10**2) {
            return (1 ether / (b / a)) / 100;
        } else if (totalBought <= 20000000000 * 10**2) {
            return (1 ether / (b / a)) / 10;
        } else if (totalBought <= 30000000000 * 10**2) {
            return 1 ether / (b / a);
        } else if (totalBought <= 40000000000 * 10**2) {
            return (1 ether / (b / a)) * 10;
        } else {
            revert("Already Max Minted, Now Only Owner Can Mint");
        }
    }

    function getEURtoUSDPrice() internal view returns (uint256) {
        AggregatorV3Interface priceFeed;

        priceFeed = AggregatorV3Interface(
            0xb49f677943BC038e9857d61E7d053CaA2C1734C1
        );
        (
            ,
            /*uint80 roundID*/
            int256 price, /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/
            ,
            ,

        ) = priceFeed.latestRoundData();
        return uint256(price);
    }

    function getUSDtoETHPrice() internal view returns (uint256) {
        AggregatorV3Interface priceFeed;

        priceFeed = AggregatorV3Interface(
            0x5f4eC3Df9cbd43714FE2740f5E3616155c5b8419
        );
        (
            ,
            /*uint80 roundID*/
            int256 price, /*uint startedAt*/ /*uint timeStamp*/ /*uint80 answeredInRound*/
            ,
            ,

        ) = priceFeed.latestRoundData();
        return uint256(price);
    }

    function buy(uint256 amount) external payable {
        address caller = msg.sender;

        require(amount >= minBuy, "Low Amount Pass");

        require(
            msg.value >= (CurrentPrice() * (amount / 10**2)),
            "Low Value Pass"
        );
        IERC20(erc20Address).transfer(caller, (amount));

        totalBought = totalBought + (amount);
    }

    function fiatBuy(uint256 amount, address account) external onlyOwner {
        require(amount >= minBuy, "Low Amount Pass");

        IERC20(erc20Address).transfer(account, (amount));

        totalBought = totalBought + (amount);
    }

    function transfer(uint256 amount, address account)
        public
        virtual
        returns (bool)
    {
        address caller = msg.sender;

        require(
            IERC20(erc20Address).balanceOf(caller) >= amount,
            "Not Enough tokens abailable"
        );

        erc20(erc20Address).presaleTransfer(account, amount);

        return false;
    }

    function withdraw() external onlyOwner {
        (bool success, ) = payable(msg.sender).call{
            value: address(this).balance
        }("");
        require(success, "Failed to send amount");
    }

    function withdrawTokens(uint256 amount, address account)
        external
        onlyOwner
    {
        IERC20(erc20Address).transfer(account, amount);
    }

    function mint(address to, uint256 amount) external onlyOwner {
        erc20(erc20Address).mint(to, amount);

        totalBought = totalBought + amount;
    }

    function transferOwnership(address account) external onlyOwner {
        OwnerIs = account;
    }

    function setTokenAddress(address tokenAddress) external onlyOwner {
        erc20Address = tokenAddress;
    }

    function setMinBuy(uint256 _minBuy) external onlyOwner {
        minBuy = _minBuy;
    }

    modifier onlyOwner() {
        require(msg.sender == OwnerIs, "only Owner Function");
        _;
    }
}
